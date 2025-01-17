import { Student } from "@/core/domain/entities/Student";
import { StudentRepository } from "@/core/ports/StudentRepository";

export class StudentRepositoryImpl implements StudentRepository {
  private students: Student[] = [];

  async findById(id: number): Promise<Student | null> {
    return this.students.find((student) => student.id === id) || null;
  }

  async save(student: Student): Promise<void> {
    this.students.push(student);
  }

  async getAll(): Promise<Student[]> {
    return this.students;
  }
}
