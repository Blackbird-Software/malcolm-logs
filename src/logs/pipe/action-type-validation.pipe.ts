import {PipeTransform, BadRequestException, ArgumentMetadata, Injectable} from '@nestjs/common';
import {ActionType} from '../enum/action-type';
import ActionTypeConverter from '../converter/action-type.converter';

@Injectable()
export class ActionTypeValidationPipe implements PipeTransform {

    transform(value: number, metadata: ArgumentMetadata) {

        if (!ActionTypeValidationPipe.isValid(value)) {
            throw new BadRequestException('Invalid service type provided. ');
        }

        return ActionTypeConverter.fromInt(value);
    }

    public static isValid(value: number): boolean {
        const keys = Object.keys(ActionType);
        const converted = ActionTypeConverter.fromInt(value);

        return keys.includes(converted);
    }
}