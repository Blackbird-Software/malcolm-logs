import {NotImplementedException} from '@nestjs/common';
import {ActionType} from '../enum/action-type';

export default class ActionTypeConverter {
    static fromInt(value: number): keyof typeof ActionType {
        switch (value) {
            case 0:
                return ActionType.CREATE;
            case 1:
                return ActionType.UPDATE;
            case 2:
                return ActionType.DELETE;
            default:
                throw new NotImplementedException('Unknown ActionType given. ');
        }
    }
}