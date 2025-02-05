var TaskList = /** @class */ (function () {
    function TaskList() {
        // a
        this.tasks = [];
    }
    // b
    TaskList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Task \"".concat(task, "\" added to the list."));
        return this.tasks.length;
    };
    // c
    TaskList.prototype.listAllTasks = function () {
        console.log("Tasks in the list:");
        this.tasks.forEach(function (task, index) {
            console.log("".concat(index + 1, ": ").concat(task));
        });
    };
    //d
    TaskList.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            console.log("Task \"".concat(task, "\" removed from the list."));
        }
        else {
            console.log("Task \"".concat(task, "\" not found in the list."));
        }
        return this.tasks.length;
    };
    return TaskList;
}());
var myTaskList = new TaskList();
myTaskList.addTask("Complete TypeScript exercise");
myTaskList.addTask("Read about interfaces");
myTaskList.listAllTasks();
myTaskList.deleteTask("Complete TypeScript exercise");
myTaskList.listAllTasks();
