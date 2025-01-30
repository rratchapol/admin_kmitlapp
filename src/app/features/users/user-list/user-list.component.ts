import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesModule } from "angular-datatables";
import { BrowserModule } from "@angular/platform-browser";
import { Config } from 'datatables.net';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, DataTablesModule],
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  dtOptions: Config = {};

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'data/data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
  }
}
