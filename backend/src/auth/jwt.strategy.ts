// Importamos las estrategias necesarias desde `passport-jwt` y `@nestjs/passport`.
import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ExtractJwt } from 'passport-jwt';

// Decorador `@Injectable()` que marca esta clase como un proveedor que puede ser inyectado en otras partes de la aplicación.
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // Configuramos la estrategia JWT.
    super({
      // Especificamos cómo se debe extraer el JWT de la solicitud. En este caso, de la cabecera de autorización como un Bearer token.
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // Indicamos que no se debe ignorar la expiración del token.
      ignoreExpiration: false,
      // Clave secreta que se usará para verificar la firma del token. Debe ser la misma que se usó para firmar el token en el servidor.
      secretOrKey: 'your_jwt_secret_key',
    });
  }

  // Este método es llamado automáticamente por la estrategia una vez que el token ha sido validado.
  // El `payload` es el contenido del token JWT.
  async validate(payload: any) {
    // Retornamos un objeto que representa al usuario, basado en la información contenida en el token.
    // Aquí, `sub` es un campo estándar en el payload del JWT que suele representar el ID del usuario.
    // `username` es un campo adicional que hemos decidido incluir en el payload del JWT.
    return { userId: payload.sub, username: payload.username };
  }
}