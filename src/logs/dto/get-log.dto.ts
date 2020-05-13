import {IsMongoId, IsNotEmpty, IsString, IsUUID} from 'class-validator';

export class GetLogDto {
    @IsNotEmpty()
    @IsMongoId()
    @IsString()
    readonly id: string;
}