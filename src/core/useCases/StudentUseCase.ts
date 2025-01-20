export interface CreateStudentDTO {
  name: string;
  email: string;
}

export interface StudentDTO {
  id: number;
  name: string;
  email: string;
}

export interface StudentUseCase {
  createStudent(data: CreateStudentDTO): Promise<void>;
  getStudent(id: number): Promise<StudentDTO | null>;
  getAllStudent(): Promise<StudentDTO[]>;
}
