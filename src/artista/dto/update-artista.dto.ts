import { PartialType } from '@nestjs/mapped-types';
import { CreateArtistaDto } from './create-artista.dto';

export class UpdateArtistaDto extends PartialType(CreateArtistaDto) {
  nombre: string;
  biografia: string;
  pais: string;
  generoMusical: string[];
  oyentesMensuales: number;
  tipo: string;
  verificado: boolean;
}
