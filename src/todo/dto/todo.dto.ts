import { IsString, MinLength } from "class-validator";

export class TodoDto {
    @IsString()
    @MinLength(3)
    title: string;

    @IsString()
    body: string;

    @IsString()
    status: string;
}