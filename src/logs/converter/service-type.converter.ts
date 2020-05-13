import {NotImplementedException} from '@nestjs/common';
import {ServiceType} from '../enum/service-type';

export default class ServiceTypeConverter {
    static fromInt(value: number): keyof typeof ServiceType {
        switch (value) {
            case 0:
                return ServiceType.USERS;
            case 1:
                return ServiceType.BOOKS;
            case 2:
                return ServiceType.MOVIES;
            default:
                throw new NotImplementedException('Unknown ServiceType given. ');
        }
    }
}