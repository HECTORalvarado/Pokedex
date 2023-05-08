import { Component, OnInit} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemons : any [] = [];
  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.pokeService.getPokemons(1).subscribe(
      (response:any) => {
        //console.log(response);
        response.results.forEach(result => {
          this.pokeService.getMorePokemons(result.name).subscribe(
            (uniqueResponse:any) => {
              this.pokemons.push(uniqueResponse);
            }
          );
        });
      }
    );
  }
  
  obtenerPokemons (event?:PageEvent) {
    this.pokemons = [];
    console.log(event.pageIndex + 1);
    this.pokeService.getPokemons(event.pageIndex+1).subscribe(
      (response:any) => {
        //console.log(response);
        response.results.forEach(result => {
          this.pokeService.getMorePokemons(result.name).subscribe(
            (uniqueResponse:any) => {
              this.pokemons.push(uniqueResponse);
            }
          );
        });
      }
    );
  }

}
