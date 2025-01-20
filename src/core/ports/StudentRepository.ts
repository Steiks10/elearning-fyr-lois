import { Student } from "../domain/entities/Student";


export interface StudentRepository {
  findById(id: number): Promise<Student | null>;
  save(student: Student): Promise<void>;
  getAll(): Promise<Student[]>;
}