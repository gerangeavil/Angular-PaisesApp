import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<any> {
    const url = this.apiUrl + '/name/' + termino;
    return this.http.get(url);
  }
}
