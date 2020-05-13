import {GrpcOptions, Transport} from '@nestjs/microservices';
import {join} from 'path';

export const grpcClientOptions: GrpcOptions = {
    transport: Transport.GRPC,
    options: {
        url: '0.0.0.0:5000',
        package: ['logs', 'health'],
        protoPath: [
            join(__dirname, './../../logs/logs.proto'),
            join(__dirname, './../../health/health.proto'),
        ]
    },
};