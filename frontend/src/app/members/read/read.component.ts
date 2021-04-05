import { Component, OnInit } from '@angular/core';
import {Member} from "../../shared/Member";
import {MemberService} from "../../shared/member.service";
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  members: Member[];
  member: Member;
  selectedId: number;
  error: HttpErrorResponse;
  closeResult = '';
  form: FormGroup;

  public page = 1;
  public pageSize = 10;
  constructor(private cs: MemberService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              config: NgbModalConfig,
              private modalService: NgbModal
  ) {
    // Konfiguration des modalen Dialogs
    config.backdrop = 'static';   // schliesst nicht, wenn man in das Fenster dahinter klickt
    config.keyboard = false;      // Modaler Dialog kann nicht durch ESC beendet werden
    // Formular fuer delete
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        firstNameControl: ['', Validators.required],
        lastNameControl: ['', Validators.required],
        birthdayControl: ['', Validators.required],
        emailControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
      this.readAll();
    }
    else {
      console.log('id = ' + this.selectedId);
      this.readOne(this.selectedId);
    }
  }

  trackByData(index: number, data: Member): number {
    return data.id;
  }

  readAll(): void {
    this.cs.getAll().subscribe(
      (response: Member[]) => {
        console.log(response);
        return this.members = response;  },
      error => console.log(error)
    );
  }

  readOne(id: number): void {
    this.cs.getDataById(id).subscribe(
      (response: Member) => this.member = response,
      error => this.error = error,
    );
  }
  deleteOne(id: number): void {
    this.cs.deleteOne(id);
    window.location.reload();
  }

  open(content, id: number): void {
    this.readOne(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
      if (result === 'delete')
      {
        this.deleteOne(this.member?.id);
      }
    });
  }
}
