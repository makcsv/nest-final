import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateLessonDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsNumber()
    order: number;

    @IsNumber({}, { each: true })
    videos: number[];

    @IsNumber({}, { each: true })
    keynotes: number[];
}
