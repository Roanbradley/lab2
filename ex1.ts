//  Create an array of strings
let tasks: string[] = [];

// Create an addTask function
function addTask(task: string): number {
    tasks.push(task); // Add task to the array
    console.log("Task '" + task + "' added to the list.");
    return tasks.length; // Return the number of elements after the insertion
}

// Create a listAllTasks function
function listAllTasks(): void {
    console.log("All tasks:");
    tasks.forEach(function (task, index) {
        console.log((index + 1) + ". " + task);
    });
}

//  Create a deleteTask function
function deleteTask(task: string): number {
    const taskIndex = tasks.indexOf(task);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1); // Remove the task from the array
        console.log("Task '" + task + "' removed from the list.");
    } else {
        console.log("Task '" + task + "' not found.");
    }

    return tasks.length; // Return the number of elements after the deletion
}

// Testing the functions
addTask("Buy groceries");
addTask("Finish homework");
listAllTasks();
deleteTask("Buy groceries");
listAllTasks();
