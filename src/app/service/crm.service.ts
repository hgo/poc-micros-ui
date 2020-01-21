import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Customer } from 'app/model/customer';
@Injectable({
  providedIn: 'root'
})
export class CrmService {
  constructor(private http: HttpClient) {
  }
  findCustomer(tckn: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.customerService}?filter=nationalId%${tckn}`);
  }
  saveCustomer(customer: Customer) {
    return this.http.put(environment.customerService, customer, { headers: { 'Content-Type': 'application/json' } });
  }
  searchLog(query: string) {
    return this.http.get(`${environment.elasticSearchService}q=${query}`)
  }
}
