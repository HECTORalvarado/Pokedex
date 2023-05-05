import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = `${environment.HOST}pokemon?limit=10`

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get(this.url)
  }
}
