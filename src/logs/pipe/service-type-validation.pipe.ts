import {PipeTransform, BadRequestException, ArgumentMetadata, Injectable} from '@nestjs/common';
import {ServiceType} from '../enum/service-type';
import ServiceTypeConverter from '../converter/service-type.converter';

@Injectable()
export class ServiceTypeValidationPipe implements PipeTransform {

    transform(value: number, metadata: ArgumentMetadata) {

        if (!ServiceTypeValidationPipe.isValid(value)) {
            throw new BadRequestException('Invalid service type provided. ');
        }

        return ServiceTypeConverter.fromInt(value);
    }

    public static isValid(value: number): boolean {
        const keys = Object.keys(ServiceType);
        const converted = ServiceTypeConverter.fromInt(value);

        return keys.includes(converted);
    }
}