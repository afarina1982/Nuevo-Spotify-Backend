import { Artista } from "src/artista/entities/artista.entity";

export class Cancion {
    id?: number;
    nombre: string;
    duracion: number;
    reproducciones: number;
    generoMusical: string[];
    artista: Artista;
    album: string;

    constructor(id: number, nombre: string, duracion: number, reproducciones: number, generoMusical: string[], artista: Artista, album: string) {
        this.id = id;
        this.nombre = nombre;
        this.duracion = duracion;
        this.reproducciones = reproducciones;
        this.generoMusical = generoMusical;
        this.artista = artista;
        this.album = album;
    }
}

