import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../servicess/pokemon.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardsComponent, HttpClientModule],
  providers: [PokemonService],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  id: string = '';
  data: any;
  type: any;
  poke_id = '';

  constructor(
    private _PokemonService: PokemonService,
    private _activatedRoute: ActivatedRoute
  ){
    _activatedRoute.params.subscribe(parameter => {
      this.id = parameter['id'];
    })
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(){
    this._PokemonService.getPokemonName(this.id).subscribe(data => {
      this.data = data;
      this.poke_id = data.id;
      this.getType();
    }, err => {
      Swal.fire({
        title: "Error!",
        text: "No se obtuvo información del Pokémon",
        icon: "error"
      });
    });
  }


  getType(){
    this._PokemonService.getTipes(this.poke_id).subscribe(data => {
      this.type = data;
    }, err => {
      Swal.fire({
        title: "Error!",
        text: "No se obtuvo información del Pokémon",
        icon: "error"
      });
    });
  }
}
