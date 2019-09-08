import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './../item.model';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' }) 

export class HttpGetService {
    specialsUrl = './api/read.php';

    constructor(private http: HttpClient) { }

    getSpecials(): Observable<Item[]>{
        return this.http.get<Item[]>(this.specialsUrl)
        .pipe(
          retry(3)
        );
    }
}