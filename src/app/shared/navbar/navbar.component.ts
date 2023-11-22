import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { PokemonService } from '../../servicess/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [PokemonService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  formulario: FormGroup = new FormGroup('');

  constructor(
    private fb: FormBuilder,
    private _PokemonService: PokemonService,
    private router: Router
    ){
    this.formulario = fb.group({
      nombre: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  buscarPokemon(){
    const data = this.formulario.value;
    this._PokemonService.getPokemonName(data.nombre).subscribe(data => {
      this.router.navigate(['card', data.name]);
    }, error => {
      Swal.fire({
        title: "Error!",
        text: "No se obtuvo información del Pokémon",
        icon: "error"
      });
    });
  }
}
