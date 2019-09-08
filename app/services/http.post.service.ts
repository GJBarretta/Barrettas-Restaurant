import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../item.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' }) 

export class HttpPostService {
    specialsUrl = './api/create.php';

    constructor(private http: HttpClient) { }

    putSpecials(items:Item[]): Observable<Item[]>{
        return this.http.post<Item[]>(this.specialsUrl, items);
    }
}