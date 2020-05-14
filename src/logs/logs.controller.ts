import {
    ClientGrpc,
    ClientProxy,
    Ctx,
    GrpcMethod,
    MessagePattern,
    Payload,
    RmqContext,
    RpcException
} from '@nestjs/microservices';
import {
    Controller,
    Inject,
    OnModuleInit,
    UseFilters,
    UsePipes,
    ValidationError,
    ValidationPipe
} from '@nestjs/common';
import {GRpcExceptionFilter} from '../filter/grpc-exception.filter';
import LogsRpcService from './interface/logs-rpc-service.interface';
import {LogsService} from './logs.service';
import GetLogByServiceTypeDto from './dto/get-log-by-service-type.dto';
import ServiceTypeConverter from './converter/service-type.converter';
import GetLogByActionTypeDto from './dto/get-log-by-action-type.dto';
import ActionTypeConverter from './converter/action-type.converter';
import {GetLogDto} from './dto/get-log.dto';
import {LogInterface} from './interface/log.interface';
import {LogDto} from './dto/log.dto';
import {MessagePatternType} from './enum/message-pattern-type';
import LogsResponseInterface from './interface/logs-response.interface';

@Controller()
@UseFilters(new GRpcExceptionFilter())
@UsePipes(new ValidationPipe({
    exceptionFactory: (errors: ValidationError[]) =>
        new RpcException('Validation error occurred. ')
}))
export class LogsController implements OnModuleInit {

    private logsRpcService: LogsRpcService;

    constructor(
        @Inject('QUEUE_SERVICE') private readonly clientRmq: ClientProxy,
        @Inject('LOGS_PACKAGE') private readonly clientGRpc: ClientGrpc,
        private readonly logsService: LogsService
    ) {
    }

    async onModuleInit() {
        await this.clientRmq.connect();
        this.logsRpcService = this.clientGRpc.getService<LogsRpcService>('LogsRpcService');
    }

    @GrpcMethod('LogsRpcService')
    async create(dto: LogDto): Promise<LogInterface> {
        return this.logsService.create(dto);
    }

    @GrpcMethod('LogsRpcService')
    async findById(dto: GetLogDto, metadata: any): Promise<LogInterface> {
        return this.logsService.findById(dto.id);
    }

    @GrpcMethod('LogsRpcService')
    async listAll(): Promise<LogsResponseInterface> {
        const items = await this.logsService.findAll();
        return {items};
    }

    @GrpcMethod('LogsRpcService')
    async listAllByServiceType(dto: GetLogByServiceTypeDto, metadata: any): Promise<LogsResponseInterface> {
        const type = ServiceTypeConverter.fromInt(dto.service);
        const items = await this.logsService.findByServiceType(type);

        return {items};
    }

    @GrpcMethod('LogsRpcService')
    async listAllByActionType(dto: GetLogByActionTypeDto, metadata: any): Promise<LogsResponseInterface> {
        const type = ActionTypeConverter.fromInt(dto.action);
        const items = await this.logsService.findByActionType(type);

        return {items};
    }

    @MessagePattern({type: MessagePatternType.APP_LOGS})
    async fetchMessage(@Payload() dto: LogDto, @Ctx() context: RmqContext): Promise<LogInterface> {
        return await this.logsService.create(dto);
    }
}