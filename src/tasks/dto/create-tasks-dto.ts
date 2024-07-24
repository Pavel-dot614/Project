import { ApiProperty } from "@nestjs/swagger";

export class CreateTasksDto {
    @ApiProperty({ example: 'Купить молоко', description: 'Текст задачи' })
    readonly text: string;

    @ApiProperty({ example: false, description: 'Статус выполнения задачи' })
    readonly isComplete: boolean;
}