import { Body, Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';
import { CreateTasksDto } from './dto/create-tasks-dto';
import { TasksService } from './tasks.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Tasks } from './tasks.model';
import { UpdateTasksDto } from './dto/update-tasks-dto';

@ApiTags('Задачи')
@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }

    @ApiOperation({ summary: 'Создание задачи' })
    @ApiResponse({ status: 200, type: Tasks })

    @Post()
    create(@Body() taskDto: CreateTasksDto) {
        console.log(taskDto)
        return this.tasksService.createTasks(taskDto);
    }

    @ApiOperation({ summary: 'Получение всех задач' })
    @ApiResponse({ status: 200, type: [Tasks] })
    @Get()
    getAll() {
        return this.tasksService.getAllTasks();
    }

    @ApiOperation({ summary: 'Удаление задачи' })
    @ApiResponse({ status: 200, description: 'Задача успешно удалена' })
    @ApiResponse({ status: 404, description: 'Задача не найдена' })
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.tasksService.deleteTask(Number(id));
    }

    @ApiOperation({ summary: 'Обновление задачи' })
    @ApiResponse({ status: 200, description: 'Задача успешно обновлена' })
    @ApiResponse({ status: 404, description: 'Задача не найдена' })
    @Put(':id')
    update(@Param('id') id: string, @Body() taskDto: CreateTasksDto) {
        return this.tasksService.updateTask(Number(id), taskDto);
    }

    // @ApiOperation({ summary: 'Обновление нескольких задач' })
    // @ApiResponse({ status: 200, description: 'Задачи успешно обновлены' })
    // @ApiResponse({ status: 404, description: 'Одна или несколько задач не найдены' })
    // @Put()
    // updateBatch(@Body() tasksDto: UpdateTasksDto[]) {
    //     return this.tasksService.updateTasks(tasksDto);
    // }
}
