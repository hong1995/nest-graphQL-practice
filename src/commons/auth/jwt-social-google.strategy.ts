import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '680008447863-bfngeoch311o0o9q8o2b7io138fjum0o.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/login/google',
      scope: ['email', 'profile'],
    });
  }

  validate(accessToken, refreshToken, profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    return {
      email: profile.email[0].value,
      password: '120931312414',
      name: profile.displayname,
      age: 0,
    };
  }
}
