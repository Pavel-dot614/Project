import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTasksDto } from './dto/create-tasks-dto';
import { UpdateTasksDto } from './dto/update-tasks-dto';
import { UpdateTasksBatchDto } from './dto/update-tasks-batch-dto';

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

    async deleteTask(id: number){
        const task = await this.tasksRepository.destroy({where: {id}});
        return task;
    }

    async updateTask(id: number, dto: UpdateTasksDto){
        const task = await this.tasksRepository.update(dto, {where: {id}});
        return task;
    }

    async updateTasks(dto: UpdateTasksBatchDto){
       const task = await this.tasksRepository.update({ isComplete: true },{ where:{isComplete:!true}});
        return task
    }

}