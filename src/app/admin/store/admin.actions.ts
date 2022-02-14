import { createAction, props } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
import { Admin } from 'src/app/services/admin/Admin.model';

export const loadAdmins = createAction(
  '[Admin/API] Load Admins',
  props<{ admins: Admin[] }>()
);
export const setAdmins = createAction(
  '[Admin/API] Set Admins',
  props<{ admins: Admin[] }>()
);
export const addAdmin = createAction(
  '[Admin/API] Add Admin',
  props<{ admin: Admin }>()
);
export const setAdmin = createAction(
  '[Admin/API] Set Admin',
  props<{ admin: Admin }>()
);
export const upsertAdmin = createAction(
  '[Admin/API] Upsert Admin',
  props<{ admin: Admin }>()
);
export const addAdmins = createAction(
  '[Admin/API] Add Admins',
  props<{ admins: Admin[] }>()
);
export const upsertAdmins = createAction(
  '[Admin/API] Upsert Admins',
  props<{ admins: Admin[] }>()
);
export const updateAdmin = createAction(
  '[Admin/API] Update Admin',
  props<{ update: Update<Admin> }>()
);
export const updateAdmins = createAction(
  '[Admin/API] Update Admins',
  props<{ updates: Update<Admin>[] }>()
);
export const mapAdmin = createAction(
  '[Admin/API] Map Admin',
  props<{ entityMap: EntityMapOne<Admin> }>()
);
export const mapAdmins = createAction(
  '[Admin/API] Map Admins',
  props<{ entityMap: EntityMap<Admin> }>()
);
export const deleteAdmin = createAction(
  '[Admin/API] Delete Admin',
  props<{ id: string }>()
);
export const deleteAdmins = createAction(
  '[Admin/API] Delete Admins',
  props<{ ids: string[] }>()
);
export const deleteAdminsByPredicate = createAction(
  '[Admin/API] Delete Admins By Predicate',
  props<{ predicate: Predicate<Admin> }>()
);
export const clearAdmins = createAction('[Admin/API] Clear Admins');
