import { Component, Input, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Pokemon } from '../../models/pokemon.models';
import { PokemonService } from '../../servicess/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PokemonService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{
 @Input() data: Pokemon = new Pokemon(undefined);
 @Input() pokemons: any;
 @Input() type: any;

 imagen: string = '';

 habilidades: string[] = [];

  constructor(
    private router: Router
  ){
    setTimeout(() => {
      if(this.pokemons){
        this.imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemons.id}.png`
        this.gethabilidades();
      }
    }, 800);
  }

  ngOnInit(): void {
  }

  getPokemon(id: string){
    this.router.navigate(['card', id]);
  }

  gethabilidades(){
    setTimeout(() => {
      this.type.names.forEach((element: any) => {
        if(element.language.name === 'es' || element.language.name === 'en'){
          this.habilidades.push(element.name);
        }
      });
    }, 800);
  }
}
