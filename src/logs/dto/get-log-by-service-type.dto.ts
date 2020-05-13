import {IsInt, IsNotEmpty} from 'class-validator';

export default class GetLogByServiceTypeDto {
    @IsNotEmpty()
    @IsInt()
    readonly service: number;
}