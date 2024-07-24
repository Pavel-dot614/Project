import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTasksDto } from './dto/create-tasks-dto';
import { TasksService } from './tasks.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Tasks } from './tasks.model';

@ApiTags('Задачи')
@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){}

    @ApiOperation({summary: 'Создание задачи'})
    @ApiResponse({status: 200, type: Tasks})

    @Post()
    create(@Body() taskDto: CreateTasksDto){
        return this.tasksService.createTasks(taskDto);
    }
  
    @ApiOperation({summary: 'Получение всех задач'})
    @ApiResponse({status: 200, type: [Tasks]})
    @Get()
    getAll(){
        return this.tasksService.getAllTasks();
    }
}
