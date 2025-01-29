// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { DataTablesModule } from "angular-datatables";
// import { BrowserModule } from "@angular/platform-browser";
// import { Config } from 'datatables.net';
// @Component({
//   selector: 'app-product-list',
//   imports: [CommonModule, DataTablesModule],
//   templateUrl: './product-list.component.html',
//   styleUrl: './product-list.component.css'
// })
// export class ProductListComponent {
//   dtOptions: Config = {};

//   ngOnInit(): void {
//     this.dtOptions = {
//       ajax: 'data/data.json',
//       columns: [{
//         title: 'ID',
//         data: 'id'
//       }, {
//         title: 'First name',
//         data: 'firstName'
//       }, {
//         title: 'Last name',
//         data: 'lastName'
//       }]
//     };
//   }
// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';  // Correct import

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, DataTablesModule],  // Make sure DataTablesModule is included
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  dtOptions: any = {};  // Define dtOptions as 'any' to avoid type error

  ngOnInit(): void {
    this.dtOptions = {
      ajax: {
        url: 'assets/data/data.json',
        dataSrc: '',
        error: (err: any) => {
          console.error('Ajax Error:', err);
        }
      },
      columns: [
        { title: 'ID', data: 'id' },
        { title: 'First name', data: 'firstName' },
        { title: 'Last name', data: 'lastName' }
      ]
    };
  }
}
