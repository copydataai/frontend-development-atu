// a
var tasks = [];
// b
function addTask(task) {
    tasks.push(task);
    console.log("Task \"".concat(task, "\" added to the list."));
    return tasks.length;
}
// c
function listAllTasks() {
    console.log("Tasks in the list:");
    tasks.forEach(function (task, index) {
        console.log("".concat(index + 1, ": ").concat(task));
    });
}
// d
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log("Task \"".concat(task, "\" removed from the list."));
    }
    else {
        console.log("Task \"".concat(task, "\" not found in the list."));
    }
    return tasks.length;
}
addTask("Complete Typescript exercise");
addTask("Review coding concepts");
listAllTasks();
deleteTask("Complete JavaScript exercise");
listAllTasks();
