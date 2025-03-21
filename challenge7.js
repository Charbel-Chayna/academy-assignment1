class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }
    addTask(name) {
        this.tasks.push({ id: this.currentId, name, status: "Pending" });
        this.currentId++;
    }
    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.status = "Completed";
        }
        else {
            console.log(`Task with ID ${id} not found.`);
        }
    }
    displayTasks() {
        this.tasks.forEach(task => {
            console.log(`Task ID: ${task.id}, Name: "${task.name}", Status: ${task.status}`);
        });
    }
}
const taskManager = new TaskManager();
taskManager.addTask("Learn TypeScript");
taskManager.completeTask(1);
taskManager.displayTasks();
