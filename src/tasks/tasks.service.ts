import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTasksDto } from './dto/create-tasks-dto';

@Injectable()
export class TasksService {
    
    constructor(@InjectModel(Tasks) private tasksRepository: typeof Tasks){}
    async createTasks(dto: CreateTasksDto){
         const task = await this.tasksRepository.create(dto);
         return task
    }

    async getAllTasks(){
        const tasks = await this.tasksRepository.findAll();
       return tasks; 
    }
}
