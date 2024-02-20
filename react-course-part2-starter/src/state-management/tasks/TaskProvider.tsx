import { ReactNode, useReducer } from "react";
import TaskContext from "./taskContext";

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

interface Props {
  children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
