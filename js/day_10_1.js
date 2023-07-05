function createTaskPlanner() {
  let tasks = [];
  return {
    addTask(task) {
      tasks.push({
        id: task.id,
        name: task.name,
        priority: task.priority,
        tags: task.tags,
        completed: false,
      });
    },
    removeTask(value) {
      tasks = tasks.filter((t) => t.id != value && t.name != value);
    },
    getTasks() {
      return tasks;
    },
    getPendingTasks() {
      return tasks.filter((task) => !task.completed);
    },
    getCompletedTasks() {
      return tasks.filter((task) => task.completed);
    },
    markTaskAsCompleted(value) {
      let index = tasks.findIndex(
        (task) => task.id == value || task.name == value
      );
      tasks[index].completed = true;
    },
    getSortedTasksByPriority() {
      let tasksCopy = [...tasks];
      return tasksCopy.sort((a, b) => a.priority - b.priority);
    },
    filterTasksByTag(tag) {
      return tasks.filter((task) => task.tags.includes(tag));
    },
    updateTask(taskId, updates) {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks[index] = { ...tasks[index], ...updates };
    },
  };
}

const planner = createTaskPlanner();

planner.addTask({
  id: 1,
  name: "Comprar leche",
  priority: 1,
  tags: ["shopping", "home"],
});

planner.addTask({
  id: 2,
  name: "Llamar a Juan",
  priority: 3,
  tags: ["personal"],
});

console.log(JSON.stringify(planner.getSortedTasksByPriority()));

// planner.removeTask(2);

// planner.markTaskAsCompleted(1);

document.write(JSON.stringify(planner.filterTasksByTag("personal")));
