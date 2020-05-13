import {EntityRepository, Repository} from 'typeorm';
import {Log} from './log.entity';
import {LogDto} from './dto/log.dto';
import {LogInterface} from './interface/log.interface';
import ServiceTypeConverter from './converter/service-type.converter';
import ActionTypeConverter from './converter/action-type.converter';
import {ServiceType} from './enum/service-type';
import {ActionType} from './enum/action-type';

@EntityRepository(Log)
export class LogRepository extends Repository<Log> {

    async createLog(data: LogDto): Promise<LogInterface> {
        const log = new Log();
        log.object = JSON.parse(data.object);
        log.objectId = data.objectId;
        log.service = ServiceTypeConverter.fromInt(data.service);
        log.action = ActionTypeConverter.fromInt(data.action);
        await log.save();

        return log;
    }

    async findByServiceType(service: keyof typeof ServiceType): Promise<any> {
        return this.find({
            where: {
                service: {$eq: service},
            }
        });
    }

    async findByActionType(action: keyof typeof ActionType): Promise<any> {
        return this.find({
            where: {
                action: {$eq: action},
            }
        });
    }
}