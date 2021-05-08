import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}
  getContacts(): Contact[] {
    return [
      { id: 1, name: 'Peter', phone_no: '09033940948' },
      { id: 2, name: 'Sam', phone_no: '07033945948' },
      { id: 3, name: 'Bryce', phone_no: '08033740948' },
      { id: 4, name: 'Lee', phone_no: '090339409321' },
      { id: 5, name: 'Albert', phone_no: '09066894948' },
    ];
  }
}
