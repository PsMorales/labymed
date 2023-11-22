export interface IPokemon {
    url: string;
    name: string;
}

export class Pokemon implements IPokemon{
    url!: string;
    name!: string;

    constructor(pokemon: Pokemon | undefined){
        if(pokemon){
            this.url = pokemon.url;
            this.name = pokemon.name;
        }
        else{
            this.url = '';
            this.name = '';
        }
    }
}

export interface IResultPokemon{
    count: number;
    next: string;
    previous: string;
    results: Array<Pokemon>
}

export class ResultPokemon implements IResultPokemon{
    count!: number;
    next!: string;
    previous!: string;
    results!: Array<Pokemon>

    constructor(resultPokemon: ResultPokemon | undefined){
        if(resultPokemon){
            this.count = resultPokemon.count;
            this.next = resultPokemon.next;
            this.previous = resultPokemon.previous;
            this.results = resultPokemon.results;
        }
        else{
            this.count = 0;
            this.next = '';
            this.previous = '';
            this.results = new Array<Pokemon>;
        }
    }
}