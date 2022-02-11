import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { take } from 'rxjs';
import { Admin } from '../services/admin/Admin.model';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css'],
})
export class AdminTableComponent implements OnInit {
  admins: Admin[] = [];
  totalRecords: number = 100;
  // sub: Subscription;
  // cols: any[] = [];
  loading: boolean = false;
  selectAll: boolean = false;
  editing: boolean = false;
  selectedAdmins: any[] = [];
  items: MenuItem[] = [
    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
    { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
  ];

  constructor(private adminService: AdminService) {}

  ngOnInit() {}

  loadAdmins(event: LazyLoadEvent) {
    console.log('loadCustomers', event);
    const page_size = event.rows || 10;
    const page_number = event.first! / page_size + 1;
    this.loading = true;
    this.adminService
      .listing({ page_number, page_size, search: event.globalFilter })
      .pipe(take(1))
      .subscribe((admins) => {
        this.loading = false;
        this.totalRecords = admins.pagination.count;
        this.admins = admins.results;
      });
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
