import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Member} from "../shared/Member";
import {MemberService} from "../shared/member.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {
  form: FormGroup;
  member: Member;
  alert: boolean;


  constructor(
    private mS: MemberService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
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
    this.alert = false;
  }
  onSubmit(): void {
    console.warn(this.form.value);
    const values = this.form.value;
    this.member.firstname = values.firstNameControl;
    this.member.lastname = values.lastNameControl;
    this.member.birthday = values.birthdayControl;
    this.member.geschlecht = values.geschlechtControl;
    this.member.wunschtermin = values.wunschterminControl;
    this.member.geschwisterkind = values.geschwisterkindControl;
    this.member.parentFirstName = values.parentFirstNameControl;
    this.member.parentLastName = values.parentLastNameControl;
    this.member.adres = values.adresControl;
    this.member.houseNumber = values.houseNumberControl;
    this.member.plz = values.plzControl;
    this.member.ort = values.ortControl;
    this.member.telefon = values.telefonControl;
    this.member.email = values.emailControl;
    console.log('created: ' + this.member);
    this.mS.create(this.member);
    this.form.reset();
    this.alert = true;
  }

  closeAlert(): void {
    this.alert = false;
  }
}
