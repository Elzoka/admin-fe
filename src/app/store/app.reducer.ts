import { ActionReducerMap } from '@ngrx/store';
import * as fromAdmin from '../admin/store/admin.reducer';

export interface State {
  admins: fromAdmin.State;
}

export const reducers: ActionReducerMap<State> = {
  admins: fromAdmin.adminReducer,
};
