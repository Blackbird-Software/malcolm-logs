import {Module} from '@nestjs/common';
import {HealthController} from './controller/health.controller';
import {TerminusModule} from '@nestjs/terminus';
import {DatabaseOrmModule} from '../database-orm.module';
import {ClientsModule} from '@nestjs/microservices';
import {HealthCheckController} from './controller/health-check.controller';
import {grpcClientOptions} from '../config/options/grpc-client.options';
import {rmqClientOptions} from '../config/options/rmq-client.options';

@Module({
    controllers: [HealthController, HealthCheckController],
    imports: [
        ClientsModule.register([
            {
                name: 'HEALTH_PACKAGE',
                ...grpcClientOptions,
            },
        ]),
        DatabaseOrmModule(),
        TerminusModule,
    ],
})

export class HealthModule {
}
