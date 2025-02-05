// Lab2
interface TaskManager {
    // a
    tasks: string[];
    // b
    addTask(task: string): number;
    // c
    listAllTasks(): void;
    // d
    deleteTask(task: string): number;
}

class TaskList implements TaskManager {
    // a
    tasks: string[] = [];

    // b
    addTask(task: string): number {
        this.tasks.push(task);
        console.log(`Task "${task}" added to the list.`);
        return this.tasks.length;
    }

    // c
    listAllTasks(): void {
        console.log("Tasks in the list:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`);
        });
    }

    //d
    deleteTask(task: string): number {
        let index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log(`Task "${task}" removed from the list.`);
        } else {
            console.log(`Task "${task}" not found in the list.`);
        }
        return this.tasks.length;
    }
}

const myTaskList: TaskList = new TaskList();
myTaskList.addTask("Complete TypeScript exercise");
myTaskList.addTask("Read about interfaces");
myTaskList.listAllTasks();

myTaskList.deleteTask("Complete TypeScript exercise");

myTaskList.listAllTasks();
