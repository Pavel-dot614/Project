import { ApiProperty } from "@nestjs/swagger";

export class UpdateTasksBatchDto {
    @ApiProperty({ type: [Object], description: 'Array of task objects to update' })
    readonly tasks: {
        id: number;
        text?: string;
        isComplete?: boolean;
    }[];
}
