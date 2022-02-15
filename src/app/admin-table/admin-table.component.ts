import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { map, Observable, take, tap } from 'rxjs';
import { Admin } from '../services/admin/Admin.model';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css'],
})
export class AdminTableComponent {
  admins: Observable<any>;
  totalRecords: number = 100;
  // sub: Subscription;
  // cols: any[] = [];
  loading: Observable<boolean>;
  selectAll: boolean = false;
  editing: boolean = false;
  selectedAdmins: any[] = [];
  items: MenuItem[] = [
    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
    { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
  ];

  // loading$: Observable<boolean>;
  // admins$:
  constructor(private adminService: AdminService) {
    this.loading = adminService.loading$;
    this.admins = adminService.entities$;
  }

  loadAdmins(event: LazyLoadEvent) {
    console.log('loadCustomers', event);

    this.adminService.getAll();
  }

  onSelectionChange(value = []) {
    console.log('selection change', value);
  }

  onSelectAllChange(event: any) {
    console.log('onSelectAllChange', event);
  }

  search(dt: any, event: any) {
    dt.filterGlobal(event.target.value || '', 'contains');
  }
}
