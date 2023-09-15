class Task {
  constructor(id, description) {
    // Tu código aquí 👈
    this.id = id;
    this.description = description;
    this.completed = false;
    this.users = [];
  }

  assignUser(user) {
    // Tu código aquí 👈
    if (user instanceof User) {
      this.users.push(user);
    } else {
      throw new Error("Usuario no válido");
    }
  }

  completeTask() {
    // Tu código aquí 👈
    this.completed = true;
    this.notifyUsers();
  }

  notifyUsers() {
    // Tu código aquí 👈
    this.users.forEach((user) => {
      user.notify(this);
    });
  }
}

class TaskDecorator {
  constructor(task, options) {
    // Tu código aquí 👈
    this.task = task;
    this.deadline = options.deadline;
    this.priority = options.priority;
  }

  assignUser(user) {
    // Tu código aquí 👈
    if (user instanceof User) {
      this.task.users.push(user);
    } else {
      throw new Error("Usuario no válido");
    }
  }

  completeTask() {
    // Tu código aquí 👈
    this.task.completed = true;
    this.notifyUsers();
  }

  notifyUsers() {
    // Tu código aquí 👈
    this.task.users.forEach((user) => {
      user.notify(this);
    });
  }
}

class User {
  constructor(name) {
    // Tu código aquí 👈
    this.name = name;
  }

  notify(task) {
    // Tu código aquí 👈
    console.log(`Tarea ${task.id} ha sido completada`);
  }
}

class Authorization {
  checkAuthorization(user, task) {
    // Tu código aquí 👈
    const userFound = task.users.find((u) => u.name === user.name);
    if (!userFound) {
      throw new Error("No autorizado");
    }
  }
}

export class TaskBuilder {
  constructor() {
    this.task = new Task(0, "");
  }

  setId(id) {
    this.task.id = id;
    return this;
  }

  setDescription(description) {
    this.task.description = description;
    return this;
  }

  setCompleted(completed) {
    this.task.completed = completed;
    return this;
  }

  setUsers(users) {
    this.task.users.push(...users);
    return this;
  }

  setDeadline(deadline) {
    this.task.deadline = deadline;
    return this;
  }

  setPriority(priority) {
    this.task.priority = priority;
    return this;
  }

  build() {
    return this.task;
  }
}

class TaskManager {
  static instance = undefined;
  constructor() {
    // Tu código aquí 👈
    this.tasks = [];
  }

  static getInstance() {
    // Tu código aquí 👈
    if (!TaskManager.instance) {
      TaskManager.instance = new TaskManager();
    }

    return TaskManager.instance;
  }

  addTask(task) {
    // Tu código aquí 👈
    if (task instanceof Task) {
      this.tasks.push(task);
    } else {
      throw new Error("Tarea no válida");
    }
  }

  getTasks() {
    // Tu código aquí 👈
    return this.tasks;
  }

  getTaskById(id) {
    // Tu código aquí 👈
    const task = this.tasks.find((task) => task.id === id);
    return task ? task : null;
  }
}

// Example 1
// const taskManager1 = TaskManager.getInstance();
// const taskManager2 = TaskManager.getInstance();

// console.log(taskManager1 === taskManager2);

// Example 2
// const taskManager = TaskManager.getInstance();
// const mockTask = new Task(1, "Mock task");

// taskManager.addTask(mockTask);
// console.log(taskManager.getTasks());

// Example 3
// const authorization = new Authorization();
// const user1 = new User("Juan");
// const user2 = new User("Maria");
// const task = new Task("4", "Comprar pan");
// task.assignUser(user1);

// authorization.checkAuthorization(user2, task);

// Example 4

const task = new Task("5", "Pasear al perro");
const taskDecorator = new TaskDecorator(task, {
  deadline: "2023-03-31",
  priority: "alta",
});

console.log(taskDecorator);
