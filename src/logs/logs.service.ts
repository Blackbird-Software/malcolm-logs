import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {LogRepository} from './log.repository';
import {LogInterface} from './interface/log.interface';
import {LogDto} from './dto/log.dto';
import {LogsInterface} from './interface/logs.interface';
import {ServiceType} from './enum/service-type';
import {ActionType} from './enum/action-type';

@Injectable()
export class LogsService {

    constructor(
        @InjectRepository(LogRepository)
        private readonly logRepository: LogRepository,
    ) {
    }

    async create(data: LogDto): Promise<LogInterface> {
        return this.logRepository.createLog(data);
    }

    async findById(id: string): Promise<LogInterface> {
        const found = await this.logRepository.findOne(id);

        if (!found) {
            throw new NotFoundException('Log not found. ');
        }

        return found;
    }

    async findByServiceType(service: keyof typeof ServiceType): Promise<LogsInterface> {
        return this.logRepository.findByServiceType(service);
    }

    async findByActionType(action: keyof typeof ActionType): Promise<LogsInterface> {
        return this.logRepository.findByActionType(action);
    }

    async findByEntityAndActionType(entity: string, action: keyof typeof ActionType): Promise<LogsInterface> {
        return this.logRepository.findByEntityAndActionType(entity, action);
    }

    async findAll(): Promise<LogsInterface> {
        return this.logRepository.find();
    }
}