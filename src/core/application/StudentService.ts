import { Student } from "@/core/domain/entities/Student";
import {
  CreateStudentDTO,
  StudentDTO,
  StudentUseCase,
} from "@/core/useCases/StudentUseCase";
import { StudentRepository } from "../ports/StudentRepository";

export class StudentService implements StudentUseCase {
  constructor(private readonly studentRepository: StudentRepository) {}

  async createStudent(data: CreateStudentDTO): Promise<void> {
    const student: Student = {
      id: 1,
      ...data,
    };
    await this.studentRepository.save(student);
  }

  async getStudent(id: number): Promise<StudentDTO | null> {
    return await this.studentRepository.findById(id);
  }

  async getAllStudent(): Promise<StudentDTO[]> {
    return await this.studentRepository.getAll();
  }
}
