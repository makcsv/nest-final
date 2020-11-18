import { IsEnum, IsString } from 'class-validator';
import { Sex } from "../../common/types/enum.type";

export class CreateUserDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly email: string;

    @IsString()
    readonly phone: string;

    @IsString()
    readonly password: string;

    @IsEnum(Sex)
    readonly sex: Sex;

    @IsString()
    readonly role: string;
}
