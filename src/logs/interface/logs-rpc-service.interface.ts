import {LogDto} from '../dto/log.dto';
import {LogInterface} from './log.interface';
import GetLogByServiceTypeDto from '../dto/get-log-by-service-type.dto';
import GetLogByActionTypeDto from '../dto/get-log-by-action-type.dto';
import {GetLogDto} from '../dto/get-log.dto';
import LogsResponseInterface from './logs-response.interface';

export default interface LogsRpcService {
    create(dto: LogDto): Promise<LogInterface>;
    findById(dto: GetLogDto): Promise<LogInterface>;
    listAllStream(req: {}): Promise<LogsResponseInterface>;
    listAllByServiceTypeStream(dto: GetLogByServiceTypeDto): Promise<LogsResponseInterface>;
    listAllByActionTypeStream(dto: GetLogByActionTypeDto): Promise<LogsResponseInterface>;
}