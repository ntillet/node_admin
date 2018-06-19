import { Module } from '@nestjs/common';

import { CoreModule } from './modules/core/core.module';
import { UsersModule } from './modules/users/users.module';
import { FeaturesModule } from './modules/features/features.module';
import { RolesModule } from './modules/roles/roles.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { JwtStrategy } from './modules/authentication/passport/jwt.strategy';

/**
 * App Module
 *
 * @export
 * @class AppModule
 */
@Module({
    imports: [
        CoreModule,
        UsersModule,
        FeaturesModule,
        AuthenticationModule,
        RolesModule,
        ProjectsModule
    ],
    providers: [
        JwtStrategy
    ]
})
export class AppModule { }
