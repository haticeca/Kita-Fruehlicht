import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Member} from "../../../shared/Member";
import {ActivatedRoute, Router} from "@angular/router";
import {MemberService} from "../../../shared/member.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  member: Member;
  selectedId: number;
  selectedOption: string;
  selectedOptionGeschlecht: string;
  error: HttpErrorResponse;

  constructor(private mS: MemberService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        firstNameControl: ['', Validators.required],
        lastNameControl: ['', Validators.required],
        birthdayControl: ['', Validators.required],
        geschlechtControl: ['', Validators.required],
        geschwisterkindControl: ['', Validators.required],
        wunschterminControl: ['', Validators.required],
        parentFirstNameControl: ['', Validators.required],
        parentLastNameControl: ['', Validators.required],
        adresControl: ['', Validators.required],
        houseNumberControl: ['', Validators.required],
        plzControl: ['', Validators.required],
        ortControl: ['', Validators.required],
        emailControl: ['', Validators.required],
        telefonControl: ['', Validators.required],
      }
    );
    this.member = { id: 0, firstname: '', lastname: '', birthday: new Date(),
      geschlecht: '', wunschtermin: new Date(), geschwisterkind: '', parentFirstName: '',
      parentLastName: '', adres: '', houseNumber: '', plz: 0, ort: '', email: '', telefon: 0};
  }

  ngOnInit(): void {
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    this.readOne(this.selectedId);
    this.form.patchValue({
      idControl: this.member?.id,
      firstNameControl: this.member?.firstname,
      lastNameControl: this.member?.lastname,
      birthdayControl: this.member?.birthday,
      geschlechtCrontrol: this.member?.geschlecht,
      wunschterminControl: this.member?.wunschtermin,
      parentFirstNameControl: this.member?.parentFirstName,
      parentLastNameControl: this.member?.parentLastName,
      adresControl: this.member?.adres,
      houseNumberControl: this.member?.houseNumber,
      plzControl: this.member?.plz,
      ortControl: this.member?.ort,
      emailControl: this.member?.email,
      telefonControl: this.member?.telefon
    });
  }

  readOne(id: number): void {
    this.mS.getDataById(id).subscribe(
      (response: Member) => this.member = response,
      error => this.error = error,
    );
  }
  update(data: Member): void {
    this.mS.update(data.id, data);
    console.log('upgedatet: ' + data);
    this.router.navigate(['/read']);
  }
  onSubmit(): void {
    const values = this.form.value;
    this.member.id = values.idControl,
    this.member.firstname = values.firstNameControl,
    this.member.lastname = values.lastNameControl,
    this.member.birthday = values.birthdayControl,
    this.member.geschlecht = values.geschlechtControl,
    this.member.wunschtermin = values.wunschterminControl,
    this.member.parentFirstName = values.parentFirstNameControl,
    this.member.parentLastName = values.parentLastNameControl,
    this.member.adres = values.adresControl,
    this.member.houseNumber = values.houseNumberControl,
    this.member.plz = values.plzControl,
    this.member.ort = values.ortControl,
    this.member.telefon = values.telefonControl,
    this.member.email = values.emailControl;
    this.update(this.member);
  }

  cancel(): void {
    this.router.navigate(['/read']);
  }
}
