import { Answer } from './answer.interface';

export interface Question {
  description?: string;
  answers?: Answer[];
}
