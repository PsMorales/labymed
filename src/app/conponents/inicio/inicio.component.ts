import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../servicess/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from '../cards/cards.component';

import { ResultPokemon } from '../../models/pokemon.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CardsComponent],
  providers: [PokemonService],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent{
  valores: ResultPokemon = new ResultPokemon(undefined);
  

  constructor(
    private _PokemonService: PokemonService
    ){
    this.getAllPokemons();
  }
  getAllPokemons(){
    this._PokemonService.getPokemon().subscribe((data: any) => {
      this.valores = data;
    }, error => {
      Swal.fire({
        title: "Error!",
        text: "No se obtuvo información de los Pokémons",
        icon: "error"
      });
    });
  }
}
