import { ApiProperty } from "@nestjs/swagger";
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";



interface TasksCreationAttrs{
   text: string

}

@Table({tableName: 'Tasks'})
export class Tasks extends Model<Tasks, TasksCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique:true, primaryKey: true, autoIncrement: true})
    id: number;
    @ApiProperty({example: 'Помыть посуду', description: 'Текст задачи'})
    @Column({type: DataType.STRING, unique:true})
    text: string;
    @ApiProperty({example: 'true', description: 'Выполнена задача или нет'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isComplete: boolean;
}