import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultPokemon } from '../models/pokemon.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  constructor(
    public http: HttpClient
    ) { }

  getPokemon(): Observable<ResultPokemon>{
    return this.http.get<ResultPokemon>(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`);
  }

  getPokemonName(name: string): Observable<any>{
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getData(url: string): Observable<any>{
    return this.http.get<any>(url);
  }

  getTipes(idOrName: string): Observable<any>{
    return this.http.get<any>(`https://pokeapi.co/api/v2/item/${idOrName}/`);
  }
}
