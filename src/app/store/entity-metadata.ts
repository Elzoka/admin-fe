import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  admin: { selectId: (val) => val._id, entityName: 'admin' },
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames: {
    admin: 'admin',
  },
};
