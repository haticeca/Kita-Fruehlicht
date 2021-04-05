import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadComponent } from './members/read/read.component';
import {CreateMemberComponent} from "./create-member/create-member.component";
import {RegisterMemberComponent} from "./register-member/register-member.component";
import {FormComponent} from "./members/read/form/form.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  { path: 'form/:id', component: FormComponent },
  { path: 'read', component: ReadComponent },
  { path: 'read/:id', component: ReadComponent },
  { path: 'create-member', component: CreateMemberComponent },
  { path: 'register-member', component: RegisterMemberComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
