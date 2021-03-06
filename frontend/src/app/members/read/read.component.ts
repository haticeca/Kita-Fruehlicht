import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Member} from "../../shared/Member";
import {MemberService} from "../../shared/member.service";
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  @ViewChild('htmlData') htmlData: ElementRef;

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
    // Formular fuer deconste
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
    this.readAll();
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
  deconsteOne(id: number): void {
    this.cs.deleteOne(id);
    window.location.reload();
  }

  open(content, id: number): void {
    this.readOne(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
      if (result === 'deconste')
      {
        this.deconsteOne(this.member?.id);
      }
    });
  }
  public openPDF(): void {
    const DATA = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {

      const fileWidth = 208;
      const fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

      PDF.save('kita_fuehlicht_warteliste.pdf');
    });
  }
}
