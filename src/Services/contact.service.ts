import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contact, ContactByID, ContactData } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  httpCLient = inject(HttpClient);
  Contacts: ContactData[] = [];
  results!: number;
  ContactByID!: ContactData;
  isAddContact = false;

  constructor() {
    this.httpCLient.get<Contact>('http://localhost:3000/contact').subscribe({
      next: (val: Contact) => {
        this.results = val.results;
        val.data.map((el: ContactData) => {
          this.Contacts.push(el);
        });
      },
    });
  }

  AddContact() {
    this.isAddContact = !this.isAddContact;
  }

  getContactByID(id: string) {
    this.httpCLient
      .get<ContactByID>(`http://localhost:3000/contact/${id}`)
      .subscribe({
        next: (val) => {
          this.ContactByID = val.data;
        },
      });
  }

  get ContactLength() {
    return this.results;
  }
  get Contact() {
    return this.Contacts;
  }

  createNewContact(
    userName: string,
    Title: string,
    Image: string,
    Phone: string,
    Secondary_Phone: string,
    Personal_Email: string,
    Company_Email: string,
    Address: string,
    Website: string
  ) {
    this.httpCLient
      .post('http://localhost:3000/contact', {
        userName,
        Title,
        Image,
        Phone,
        Secondary_Phone,
        Personal_Email,
        Company_Email,
        Address,
        Website,
      })
      .subscribe({
        next: (val) => console.log(val),
      });
    window.location.reload();
  }
}
