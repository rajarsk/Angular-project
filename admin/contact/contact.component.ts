import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/app/services/contactus.service'; 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts:any;

  constructor(private contactService: ContactusService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
}
