import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface FiltersBody<T> {
  search?: string;
  filters?: Partial<T>;
}

interface Pagination {
  page_number?: number;
  page_size?: number;
}

interface ListingResult<T> {
  pagination: {
    count: number;
  } & Pagination;
  results: T[];
}

export class EntityService<T = any> {
  constructor(private entity: string, private http: HttpClient) {}

  findOne(id: string) {
    return this.http.get<T>(this.resolveRoute(id));
  }

  updateOne(id: string, body: T | Partial<T>) {
    return this.http.patch<T>(this.resolveRoute(id), body);
  }

  deleteOne(id: string) {
    return this.http.delete(this.resolveRoute(id));
  }

  create(body: T) {
    return this.http.post<T>(this.resolveRoute(), body);
  }

  listing(filters?: FiltersBody<T> & Pagination) {
    return this.http.post<ListingResult<T>>(this.resolveRoute(), filters);
  }

  private resolveRoute(path: string = '') {
    return new URL(`${this.entity}/${path}`, environment.baseURL).href;
  }
}
