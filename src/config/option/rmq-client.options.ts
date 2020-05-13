import {RmqOptions, Transport} from '@nestjs/microservices';
import config from 'config';

const queueConfig = config.queue;
const user = process.env.RABBITMQ_USER || queueConfig.user;
const password = process.env.RABBITMQ_PASSWORD || queueConfig.password;

export const rmqClientOptions: RmqOptions = {
    transport: Transport.RMQ,
    options: {
        urls: [
            `amqp://${user}:${password}@logs_rabbitmq:5672`
        ],
        queue: 'logs_queue',
        queueOptions: {
            durable: false
        },
    },
}