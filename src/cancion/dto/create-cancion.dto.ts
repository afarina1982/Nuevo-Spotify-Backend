import { Artista } from "src/artista/entities/artista.entity";

export class CreateCancionDto {
  nombre: string;
  duracion: number;
  reproducciones: number;
  generoMusical: string[];
  artista: Artista;
  album: string;
}
