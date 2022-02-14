import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as fromApp from 'src/app/store/app.reducer';
import { Admin } from 'src/app/services/admin/Admin.model';
import * as adminActions from './admin.actions';

export interface State extends EntityState<Admin> {}

export const adaptor = createEntityAdapter<Admin>({
  selectId: (el) => el._id,
});

export const initialState: State = adaptor.getInitialState();

export const adminReducer = createReducer(
  initialState,
  on(adminActions.loadAdmins, (state, { admins }) => {
    return adaptor.setAll(admins, state);
  }),
  on(adminActions.setAdmins, (state, { admins }) => {
    return adaptor.setMany(admins, state);
  }),
  on(adminActions.addAdmin, (state, { admin }) => {
    return adaptor.addOne(admin, state);
  }),
  on(adminActions.setAdmin, (state, { admin }) => {
    return adaptor.setOne(admin, state);
  }),
  on(adminActions.upsertAdmin, (state, { admin }) => {
    return adaptor.upsertOne(admin, state);
  }),
  on(adminActions.addAdmins, (state, { admins }) => {
    return adaptor.addMany(admins, state);
  }),
  on(adminActions.upsertAdmins, (state, { admins }) => {
    return adaptor.upsertMany(admins, state);
  }),
  on(adminActions.updateAdmin, (state, { update }) => {
    return adaptor.updateOne(update, state);
  }),
  on(adminActions.updateAdmins, (state, { updates }) => {
    return adaptor.updateMany(updates, state);
  }),
  on(adminActions.mapAdmin, (state, { entityMap }) => {
    return adaptor.mapOne(entityMap, state);
  }),
  on(adminActions.mapAdmins, (state, { entityMap }) => {
    return adaptor.map(entityMap, state);
  }),
  on(adminActions.deleteAdmin, (state, { id }) => {
    return adaptor.removeOne(id, state);
  }),
  on(adminActions.deleteAdmins, (state, { ids }) => {
    return adaptor.removeMany(ids, state);
  }),
  on(adminActions.deleteAdminsByPredicate, (state, { predicate }) => {
    return adaptor.removeMany(predicate, state);
  }),
  on(adminActions.clearAdmins, (state) => {
    return adaptor.removeAll(state);
  })
);

const { selectAll, selectEntities, selectIds, selectTotal } =
  adaptor.getSelectors();

export * as Actions from './admin.actions';

const selectAdminAll = selectAll;
const selectAdminEntities = selectEntities;
const selectAdminIds = selectIds;
const selectAdminTotal = selectTotal;

export const selectAdminState = createFeatureSelector<State>('admins');

export const selectAdmins = () =>
  createSelector(selectAdminState, selectAdminAll);
