import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class ProfessionService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>(`${environment.apiUrl}/professions`);
    }

    getById(id) {
        return this.http.get<any>(`${environment.apiUrl}/professions/${id}`);
    }

    create(company) {
        return this.http.post<any>(`${environment.apiUrl}/professions`, company);
    }

    delete(id) {
        return this.http.delete<any>(`${environment.apiUrl}/professions/${id}`);
    }

    update(company, id) {
        return this.http.put<any>(`${environment.apiUrl}/professions/${id}`, company);
    }
}