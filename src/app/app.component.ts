import { Component, Inject } from '@angular/core';
import { DB_CONFIG, databaseSettings, DBConfig } from './db.config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: DB_CONFIG,
    useValue: databaseSettings
  }]
})
export class AppComponent {
  name: string;
  version: number;
  constructor(@Inject(DB_CONFIG) config: DBConfig) {
    this.name = config.name;
    this.version = config.version;
  }
}
