import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistaModule } from './artista/artista.module';
import { CancionModule } from './cancion/cancion.module';
import { PlaylistModule } from './playlist/playlist.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ArtistaModule, CancionModule, PlaylistModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
