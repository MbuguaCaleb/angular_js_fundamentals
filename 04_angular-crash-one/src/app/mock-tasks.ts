/**Learn about Intefaces */
import { Task } from './Task';

/**In Typescript i always must have types */
//Type of this tasks array will be Task but now an array of them... nowonder the []
export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'May 5th at 2.30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'May 6th at 1.30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'May 7th at 12.30pm',
    reminder: true,
  },
];
