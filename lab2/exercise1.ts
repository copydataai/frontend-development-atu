// a
let tasks: string[] = [];

// b
function addTask(task: string): number {
    tasks.push(task);
    console.log(`Task "${task}" added to the list.`);
    return tasks.length;
}

// c
function listAllTasks() {
    console.log("Tasks in the list:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
}

// d
function deleteTask(task: string): number {
    let index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Task "${task}" removed from the list.`);
    } else {
        console.log(`Task "${task}" not found in the list.`);
    }

    return tasks.length;
}

addTask("Complete Typescript exercise");
addTask("Review coding concepts");

listAllTasks();

deleteTask("Complete JavaScript exercise");

listAllTasks();
