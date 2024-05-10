import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
}) 
export class ContactsComponent {
  test:boolean=false;
  submitForm() {
this.test=true;
console.log("form sublitted");
  }   
}
