import { IsInt, IsString, Max, Min } from "class-validator";

export class CreateKeynotesDto {
    @IsString()
    title: string;

    @IsInt()
    @Min(1)
    @Max(999)
    order: number;

    @IsString()
    uri: string;
}
