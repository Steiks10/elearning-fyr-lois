import { Student } from "@/core/domain/entities/Student";

export interface CreateStudentDTO {
  name: string;
  email: string;
}

export interface StudentDTO {
  id: string;
  name: string;
  email: string;
}

export interface StudentUseCase {
  createStudent(data: CreateStudentDTO): Promise<void>;
  getStudent(id: number): Promise<StudentDTO | null>;
  getAllStudent(): Promise<CreateStudentDTO[]>;
}
