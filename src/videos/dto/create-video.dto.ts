import { IsInt, IsString, Max, Min } from "class-validator";

export class CreateKeynoteDto {
    @IsString()
    title: string;

    @IsInt()
    @Min(1)
    @Max(999)
    order: number;

    @IsString()
    uri: string;
}
