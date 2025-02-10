// Define the interface
interface TaskManager {
    tasks: string[];
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;
}

// Implement the interface using a class
class TaskManagerClass implements TaskManager {
    tasks: string[] = [];

    // Implement addTask function
    addTask(task: string): number {
        this.tasks.push(task); // Add task to the array
        console.log("Task '" + task + "' added to the list.");
        return this.tasks.length; // Return the number of elements after the insertion
    }

    // Implement listAllTasks function
    listAllTasks(): void {
        console.log("All tasks:");
        this.tasks.forEach(function (task, index) {
            console.log((index + 1) + ". " + task);
        });
    }

    // Implement deleteTask function
    deleteTask(task: string): number {
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
taskManager.addTask("eat");
taskManager.addTask("homework");
taskManager.listAllTasks();
taskManager.deleteTask("eat");
taskManager.listAllTasks();
