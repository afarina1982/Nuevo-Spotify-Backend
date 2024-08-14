import { Injectable } from '@nestjs/common';
import { CreateCancionDto } from './dto/create-cancion.dto';
import { UpdateCancionDto } from './dto/update-cancion.dto';
import { Cancion } from './entities/cancion.entity';
import { Artista } from 'src/artista/entities/artista.entity';

@Injectable()
export class CancionService {
  cancion: Cancion[] = [];
  artista: Artista[] = [];
  constructor() {
    const shakira = new Artista(1, 'Shakira', 'Shakira Isabel Mebarak Ripoll es una cantante, compositora, productora discográfica, bailarina, modelo, empresaria, actriz, embajadora de buena voluntad de la UNICEF y filántropa colombiana.', 'Colombia', ['Pop', 'Rock', 'Latino'], 1000000, 'Solista', true);
    this.artista.push(shakira);

    const ricardoArjona = new Artista(2, 'Ricardo Arjona', 'Edgar Ricardo Arjona Morales es un cantautor guatemalteco de música latinoamericana.', 'Guatemala', ['Pop', 'Rock', 'Latino'], 500000, 'Solista', true);
    this.artista.push(ricardoArjona);

    const juanes = new Artista(3, 'Juanes', 'Juan Esteban Aristizábal Vásquez, conocido como Juanes, es un cantante, compositor, músico y activista colombiano que fusiona diversos géneros musicales.', 'Colombia', ['Pop', 'Rock', 'Latino'], 800000, 'Solista y Banda', true);
    this.artista.push(juanes);

    this.cancion.push(new Cancion(1, 'La Tortura', 180, 130000, ['Pop', 'Rock'], shakira, 'Fijacion Oral)'));
    this.cancion.push(new Cancion(2, 'El Amor', 200, 150000, ['Pop', 'Rock'], ricardoArjona, 'Adentro'))
    this.cancion.push(new Cancion(3, 'La Camisa Negra', 190, 140000, ['Pop', 'Rock'], juanes, 'Mi Sangre'))
  }


  create(createCancionDto: CreateCancionDto) {
    this.cancion.push(new Cancion(this.cancion.length + 1, createCancionDto.nombre, createCancionDto.duracion, createCancionDto.reproducciones, createCancionDto.generoMusical, createCancionDto.artista, createCancionDto.album));
  }

  findAll(): Cancion[] {
    return this.cancion;
  }

  findOne(id: number): Cancion {
    return this.cancion.find((cancion) => cancion.id == id);
  }

  update(id: number, updateCancionDto: UpdateCancionDto): void {
    for (let i = 0; i < this.cancion.length; i++) {
      if (this.cancion[i].id == id) {
        this.cancion[i].nombre = updateCancionDto.nombre;
        this.cancion[i].duracion = updateCancionDto.duracion;
        this.cancion[i].reproducciones = updateCancionDto.reproducciones;
        this.cancion[i].generoMusical = updateCancionDto.generoMusical;
        this.cancion[i].artista = updateCancionDto.artista;
        this.cancion[i].album = updateCancionDto.album;
      }
    }
  }

  remove(id: number):void {
    for (let i = 0; i < this.cancion.length; i++) {
      if (this.cancion[i].id == id) {
        this.cancion.splice(i, 1);
      }
    }
  }
}
