import {IsInt, IsJSON, IsNotEmpty, IsString, IsUUID, Max, Min} from 'class-validator';

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
}
