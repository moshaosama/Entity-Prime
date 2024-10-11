import { Component, inject } from '@angular/core';
import { ListsService } from '../Services/lists-service.service';
import { ContactService } from '../Services/contact.service';

import { AddContactComponent } from './add-contact/add-contact.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AddContactComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  listService = inject(ListsService);
  contactService = inject(ContactService);

  isActiveBtn!: string;

  setActive(btn: string) {
    this.isActiveBtn = btn;
  }

  getContactByID(id: string) {
    this.contactService.getContactByID(id);
  }

  get ContactByID() {
    return this.contactService.ContactByID;
  }

  get ContactLength() {
    return this.contactService.results;
  }

  get Contact() {
    return this.contactService.Contacts;
  }

  get Color() {
    return this.listService.backgroundColor;
  }
  get isAddContact() {
    return this.contactService.isAddContact;
  }
  AddContact() {
    this.contactService.AddContact();
  }
}
