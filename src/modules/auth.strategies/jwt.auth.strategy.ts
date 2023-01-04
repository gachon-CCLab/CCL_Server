import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // passport에 토큰 검증을 위임하지 않고 직접 검증할 것인지? fasle는 passport에 검증 위임
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY
    });
  }

  async validate(payload: any) {
    console.log("jwt.auth.strategy - validate 실행");
    console.log(payload.account)
    return true ;
  }
}