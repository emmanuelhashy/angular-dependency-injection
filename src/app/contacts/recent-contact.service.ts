import { Injectable } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class RecentContactService extends ContactService {

  constructor() {
    super();
  }

  getContacts(): Contact[] {
    return super.getContacts().slice(Math.max(super.getContacts().length - 3, 0))
  }
}
