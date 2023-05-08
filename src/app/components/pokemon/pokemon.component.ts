import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemons : any [] = [];
  pageEvent: PageEvent;
  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe(
      (response:any) => {
        //console.log(response);
        response.results.forEach(result => {
          console.log(result.name);
          this.pokeService.getMorePokemons(result.name).subscribe(
            (uniqueResponse:any) => {
              this.pokemons.push(uniqueResponse);
              console.log(this.pokemons);
            }
          );
        });
      }
    );
  }

}
