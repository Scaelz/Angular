export interface Task {
  id: number;
  title: string;
  description: string;
  create_date: Date;
  deadline: Date;
  isDone: boolean;
}
