import {BaseEntity, Column, CreateDateColumn, Entity, Index, ObjectIdColumn} from 'typeorm';
import {LogInterface} from './interface/log.interface';

@Entity('logs')
export class Log extends BaseEntity implements LogInterface {
    @ObjectIdColumn()
    id: string;

    @Column({type: 'text'})
    object: string;

    @Index()
    @Column()
    service: string;

    @Index()
    @Column()
    action: string;

    @Index()
    @Column()
    objectId: string;

    @CreateDateColumn()
    createdAt: Date;
}