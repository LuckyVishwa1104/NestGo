import {IsString, MinLength} from 'class-validator';
import {Transform} from 'class-transformer';
export class BookDto{
    
    
    @MinLength(3)
    @IsString()
    title: string;

    @IsString()
    author: string;
}