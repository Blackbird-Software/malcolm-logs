import {IsInt, IsNotEmpty} from 'class-validator';

export default class GetLogByActionTypeDto {
    @IsNotEmpty()
    @IsInt()
    readonly action: number;
}