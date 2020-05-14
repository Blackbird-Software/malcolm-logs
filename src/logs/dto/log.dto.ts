import {IsInt, IsJSON, IsNotEmpty, IsString, IsUUID} from 'class-validator';

export class LogDto {
    @IsNotEmpty()
    @IsJSON()
    @IsString()
    readonly object: string;

    @IsNotEmpty()
    @IsString()
    @IsUUID()
    readonly objectId: string;

    @IsNotEmpty()
    @IsInt()
    readonly service: number;

    @IsNotEmpty()
    @IsInt()
    readonly action: number;

    @IsNotEmpty()
    @IsString()
    readonly entity: string;
}
