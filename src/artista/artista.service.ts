import { Injectable } from '@nestjs/common';
import { CreateArtistaDto } from './dto/create-artista.dto';
import { UpdateArtistaDto } from './dto/update-artista.dto';
import { Artista } from './entities/artista.entity';

@Injectable()
export class ArtistaService {
  artista: Artista[] = [];

  constructor() {
    this.artista.push(new Artista(1, 'Shakira', 'Shakira Isabel Mebarak Ripoll es una cantante, compositora, productora discográfica, bailarina, modelo, empresaria, actriz, embajadora de buena voluntad de la UNICEF y filántropa colombiana.', 'Colombia', ['Pop', 'Rock', 'Latino'], 1000000, 'Solista', true));
    this.artista.push(new Artista(2, 'Ricardo Arjona', 'Edgar Ricardo Arjona Morales es un cantautor guatemalteco de música latinoamericana.', 'Guatemala', ['Pop', 'Rock', 'Latino'], 500000, 'Solista', true));
    this.artista.push(new Artista(3, 'Juanes', 'Juan Esteban Aristizábal Vásquez, conocido como Juanes, es un cantante, compositor, músico y activista colombiano que fusiona diversos géneros musicales.', 'Colombia', ['Pop', 'Rock', 'Latino'], 800000, 'Solista y Banda', true));
  }

  create(createArtistaDto: CreateArtistaDto): void {
    this.artista.push(new Artista(this.artista.length + 1, createArtistaDto.nombre, createArtistaDto.biografia, createArtistaDto.pais, createArtistaDto.generoMusical, createArtistaDto.oyentesMensuales, createArtistaDto.tipo, createArtistaDto.verificado));

  }

  findAll(): Artista[] {
    return this.artista;
  }

  findOne(id: number): Artista {
    return this.artista.find((artista) => artista.id == id);
  }

  update(id: number, updateArtistaDto: UpdateArtistaDto): void {
    for (let i = 0; i < this.artista.length; i++) {
      if (this.artista[i].id == id) {
        this.artista[i].nombre = updateArtistaDto.nombre;
        this.artista[i].biografia = updateArtistaDto.biografia;
        this.artista[i].pais = updateArtistaDto.pais;
        this.artista[i].generoMusical = updateArtistaDto.generoMusical;
        this.artista[i].oyentesMensuales = updateArtistaDto.oyentesMensuales;
        this.artista[i].tipo = updateArtistaDto.tipo;
        this.artista[i].verificado = updateArtistaDto.verificado;
      }
    }
  }

  remove(id: number): void {
    for (let i = 0; i < this.artista.length; i++) {
      if (this.artista[i].id == id) {
        this.artista.splice(i, 1);
      }
    }
  }
}
