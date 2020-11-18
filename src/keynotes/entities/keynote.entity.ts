import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsInt, Max, Min } from "class-validator";

@Entity()
export class KeynotesEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @IsInt()
    @Min(1)
    @Max(999)
    @Column()
    order: number;

    @Column()
    uri: string;
}
