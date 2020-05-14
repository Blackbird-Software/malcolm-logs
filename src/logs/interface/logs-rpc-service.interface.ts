import {LogDto} from '../dto/log.dto';
import {LogInterface} from './log.interface';
import GetLogByServiceTypeDto from '../dto/get-log-by-service-type.dto';
import GetLogByActionTypeDto from '../dto/get-log-by-action-type.dto';
import {GetLogDto} from '../dto/get-log.dto';
import LogsResponseInterface from './logs-response.interface';
import GetLogByEntityAndActionTypeDto from "../dto/get-log-by-entity-and-action-type.dto";

export default interface LogsRpcService {
    create(dto: LogDto): Promise<LogInterface>;
    findById(dto: GetLogDto): Promise<LogInterface>;
    listAll(req: {}): Promise<LogsResponseInterface>;
    listAllByServiceType(dto: GetLogByServiceTypeDto): Promise<LogsResponseInterface>;
    listAllByActionType(dto: GetLogByActionTypeDto): Promise<LogsResponseInterface>;
    listAllByEntityAndActionType(dto: GetLogByEntityAndActionTypeDto): Promise<LogsResponseInterface>;
}