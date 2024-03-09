import {IsNumber, IsPositive, IsString, IsNotEmpty, IsOptional} from "class-validator";
import { ReportType } from "src/data";
import { Exclude, Expose} from "class-transformer";

export class CreateReportDto{
    @IsNumber()
    @IsPositive()
    ammount: number;

    @IsString()
    @IsNotEmpty()
    source: string;
}

export class UpdateReportDto{
    @IsOptional()
    @IsNumber()
    @IsPositive()
    ammount: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source: string; 
}


export class ReportResponseDto{
    id: string;
    source: string;
    ammount: number;

    @Expose({name: "createdAt"})
    transformCreatedAt(){
        return this.created_at;
    }
    
    @Exclude()
    created_at: Date;

    @Exclude()
    updated_at: Date;
    type: ReportType;

    constructor(partial: Partial<ReportResponseDto>){
        Object.assign(this, partial);
    }
}