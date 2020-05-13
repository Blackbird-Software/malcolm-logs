import {Module} from '@nestjs/common';
import {ClientsModule} from '@nestjs/microservices';
import {TypeOrmModule} from '@nestjs/typeorm';
import {grpcClientOptions} from '../config/option/grpc-client.options';
import {LogsService} from './logs.service';
import {LogsController} from './logs.controller';
import {LogRepository} from './log.repository';
import {rmqClientOptions} from '../config/option/rmq-client.options';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'LOGS_PACKAGE',
                ...grpcClientOptions,
            },
        ]),
        ClientsModule.register([
            {
                name: 'QUEUE_SERVICE',
                ...rmqClientOptions,
            },
        ]),
        TypeOrmModule.forFeature([LogRepository]),
        LogRepository
    ],
    controllers: [LogsController],
    providers: [LogsService]
})

export class LogsModule {
}