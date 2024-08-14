import { Playlist } from '../../playlist/entities/playlist.entity';

export class Usuario {
    id?: number;
    email: string;
    nombreUsuario: string;
    password: string;
    fechaCreacion: Date;
    isActive: boolean;
    playlists: Playlist[];

    constructor(id: number, email: string, nombreUsuario: string, password: string, fechaCreacion: Date, isActive: boolean, playlists: Playlist[]) {
        this.id = id;
        this.email = email;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.fechaCreacion = fechaCreacion;
        this.isActive = isActive;
        this.playlists = playlists;
    }
}

