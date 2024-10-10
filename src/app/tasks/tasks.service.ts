import {DUMMY_TASKS} from "../dummy-tasks";
import {NewTask} from "./task/task.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn:'root'})
export class TasksService{
  private tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId:string){
    return this.tasks.filter(
      (task)=> task.userId === userId
    );
  }

  addTask(taskData: NewTask, userId:string){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    });
    this.saveTestks();
  }

  removeTask(id: string){
    this.tasks = this.tasks.filter(
      (task)=> task.id !== id
    );
    this.saveTestks();
  }

  private saveTestks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
}
