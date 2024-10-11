import { Component, inject } from '@angular/core';
import { ListsService } from '../../Services/lists-service.service';
import {
  FormControl,
  FormControlName,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService } from '../../Services/contact.service';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css',
})
export class AddContactComponent {
  listService = inject(ListsService);
  contactService = inject(ContactService);

  form = new FormGroup({
    Name: new FormControl(''),
    Title: new FormControl(''),
    Image: new FormControl(''),
    Phone: new FormControl(''),
    Secondary_Phone: new FormControl(''),
    Personal_Email: new FormControl('', [Validators.email]),
    Company_Email: new FormControl(''),
    Address: new FormControl(''),
    Website: new FormControl(''),
  });

  onSubmit() {
    this.contactService.createNewContact(
      this.form.controls.Name.value!,
      this.form.controls.Title.value!,
      this.form.controls.Image.value!,
      this.form.controls.Phone.value!,
      this.form.controls.Secondary_Phone.value!,
      this.form.controls.Personal_Email.value!,
      this.form.controls.Company_Email.value!,
      this.form.controls.Address.value!,
      this.form.controls.Website.value!
    );
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
