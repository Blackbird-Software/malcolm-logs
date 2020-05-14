import {IsInt, IsNotEmpty, IsString} from 'class-validator';

export default class GetLogByEntityAndActionTypeDto {
    @IsNotEmpty()
    @IsString()
    readonly entity: string;

    @IsNotEmpty()
    @IsInt()
    readonly action: number;
}