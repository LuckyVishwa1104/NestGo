import {IsString, MinLength} from 'class-validator';
import {Transform} from 'class-transformer';
export class BookDto{
    
    @Transform(({value}) => {
        if(value == "abd") return "xyz";
        return value;

    })
    @MinLength(3)
    @IsString()
    title: string;

    @IsString()
    author: string;
}