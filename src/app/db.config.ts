import { InjectionToken } from '@angular/core';


export interface DBConfig {
  name: string;
  version: number;
}

export const DB_CONFIG = new InjectionToken<DBConfig>('db.config');

export const databaseSettings: DBConfig = {
  name: 'MongoDB',
  version: 2.0
};
