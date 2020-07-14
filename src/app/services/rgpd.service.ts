import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class RgpdService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any>(`${environment.apiUrl}/rgpd/all`);
    }

    getById(id) {
        return this.http.get<any>(`${environment.apiUrl}/rgpd/${id}`);
    }

    create(company) {
        return this.http.post<any>(`${environment.apiUrl}/rgpd/new`, company);
    }

    delete(id) {
        return this.http.delete<any>(`${environment.apiUrl}/rgpd/${id}`);
    }

    update(company, id) {
        return this.http.put<any>(`${environment.apiUrl}/rgpd/${id}`, company);
    }
}