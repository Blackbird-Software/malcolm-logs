import {Module} from '@nestjs/common';
import {HealthModule} from './health/health.module';
import {DatabaseOrmModule} from './database-orm.module';
import {EnumsModule} from './enum/enums.module';
import {LogsModule} from './logs/logs.module';

@Module({
    imports: [
        DatabaseOrmModule(),
        HealthModule,
        EnumsModule,
        LogsModule
    ],
})

export class AppModule {
}
