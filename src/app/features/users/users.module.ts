import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { Component } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesModule } from "angular-datatables";
import { BrowserModule } from "@angular/platform-browser";
import { Config } from 'datatables.net';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CommonModule, BrowserModule, DataTablesModule
  ]
})
export class UsersModule { }
