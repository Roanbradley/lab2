// Implement the interface using a class
class TaskManagerClass {
    constructor() {
        this.tasks = [];
    }

    // Implement addTask function
    addTask(task) {
        this.tasks.push(task); // Add task to the array
        console.log("Task '" + task + "' added to the list.");
        return this.tasks.length; // Return the number of elements after the insertion
    }

    // Implement listAllTasks function
    listAllTasks() {
        console.log("All tasks:");
        this.tasks.forEach(function (task, index) {
            console.log((index + 1) + ". " + task);
        });
    }

    // Implement deleteTask function
    deleteTask(task) {
        const taskIndex = this.tasks.indexOf(task);

        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1); // Remove the task from the array
            console.log("Task '" + task + "' removed from the list.");
        } else {
            console.log("Task '" + task + "' not found.");
        }

        return this.tasks.length; // Return the number of elements after the deletion
    }
}

// Testing the class
const taskManager = new TaskManagerClass();
taskManager.addTask("Food");
taskManager.addTask("Work");
taskManager.listAllTasks();
taskManager.deleteTask("sleep");
taskManager.listAllTasks();


