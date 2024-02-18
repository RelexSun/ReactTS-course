export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DelteTask {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTask | DelteTask;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  // TYPE SAFTEY: TS automatically knows what type we should use when action + (.)
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

export default tasksReducer;
