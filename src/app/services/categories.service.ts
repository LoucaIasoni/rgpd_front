import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class CategoriesService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>(`${environment.apiUrl}/categories`);
    }

    getById(id) {
        return this.http.get<any>(`${environment.apiUrl}/categories/${id}`);
    }

    create(company) {
        return this.http.post<any>(`${environment.apiUrl}/categories/new`, company);
    }

    delete(id) {
        return this.http.delete<any>(`${environment.apiUrl}/categories/delete/${id}`);
    }

    update(company, id) {
        return this.http.put<any>(`${environment.apiUrl}/categories/edit`, company);
    }
}