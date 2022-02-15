// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Admin } from './Admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService extends EntityCollectionServiceBase<Admin> {
  constructor(serviceElementFactory: EntityCollectionServiceElementsFactory) {
    super('admin', serviceElementFactory);
  }
}
