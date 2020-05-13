import {Controller, Get} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {ServiceType} from '../logs/enum/service-type';
import {ActionType} from '../logs/enum/action-type';
import {MessagePatternType} from '../logs/enum/message-pattern-type';

@ApiTags('enums')
@Controller('enums')
export class EnumsController {

    @Get('/services')
    getServices(): any {
        return {
            types: Object.keys(ServiceType)
        };
    }

    @Get('/actions')
    getActions(): any {
        return {
            types: Object.keys(ActionType)
        };
    }

    @Get('/message-patterns')
    getMessagePatterns(): any {
        return {
            types: Object.keys(MessagePatternType)
        };
    }
}