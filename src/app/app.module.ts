import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { Routes, RouterModule, Router } from '@angular/router';

// importamos HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// importamos ngx pagination
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'form/:id',
    component: FormComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
