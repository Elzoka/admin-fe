import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityService } from '../entity.service';
import { Admin } from './Admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService extends EntityService<Admin> {
  constructor(http: HttpClient) {
    super('admin', http);
  }
}
