import { Routes } from '@angular/router';
import { InicioComponent } from './conponents/inicio/inicio.component';
import { CardComponent } from './conponents/card/card.component';
import { PokemonService } from './servicess/pokemon.service';

export const routes: Routes = [
    {
        path: '', redirectTo: 'inicio', pathMatch: 'full'
    },
    {
        path: 'inicio', component: InicioComponent, providers: [PokemonService]
    },
    {
        path: 'card/:id', component: CardComponent
    },
    {
        path: '**', redirectTo: 'inicio', pathMatch: 'full'
    }
];