import { RecentContactService } from './recent-contact.service';
import { ContactService } from './contact.service';
export function contactFactory(isRecent: boolean) {
  return () => {
    if (isRecent) {
      return new RecentContactService();
    }
    return new ContactService();
  };
}
