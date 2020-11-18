import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateClassDto {
    @IsString()
    description: string;

    @IsNumber()
    @Min(1)
    @Max(999)
    order: number;

    @IsString()
    started: string;

    @IsString()
    closed: string;

    @IsNumber({}, { each: true })
    lessons: number[];

    @IsNumber({}, { each: true })
    users: number[];
}
