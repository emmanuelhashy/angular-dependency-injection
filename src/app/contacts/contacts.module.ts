import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { RecentContactComponent } from './recent-contact/recent-contact.component';

@NgModule({
  declarations: [ContactListComponent, RecentContactComponent],
  imports: [
    CommonModule
  ],
  exports: [ContactListComponent]
})
export class ContactsModule { }
