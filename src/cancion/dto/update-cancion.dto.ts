import { PartialType } from '@nestjs/mapped-types';
import { CreateCancionDto } from './create-cancion.dto';
import { Artista } from 'src/artista/entities/artista.entity';

export class UpdateCancionDto extends PartialType(CreateCancionDto) {
    nombre: string;
    duracion: number;
    reproducciones: number;
    generoMusical: string[];
    artista: Artista;
    album: string;
}
