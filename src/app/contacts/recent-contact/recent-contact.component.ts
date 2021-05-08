import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
import { RecentContactService } from '../recent-contact.service';

@Component({
  selector: 'app-recent-contact',
  templateUrl: './recent-contact.component.html',
  styleUrls: ['./recent-contact.component.css'],

  providers: [
    {
      provide: ContactService,
      useClass: RecentContactService,
    },
  ],
})
export class RecentContactComponent implements OnInit {
  contacts: Contact[];

  constructor(private recentContactService: RecentContactService) {}

  ngOnInit(): void {
    this.contacts = this.recentContactService.getContacts();
  }
}
