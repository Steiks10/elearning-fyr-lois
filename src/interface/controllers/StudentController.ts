import { NextApiRequest, NextApiResponse } from "next";
import {StudentUseCase} from "@/core/useCases/StudentUseCase"

export class StudentController{
    constructor(private readonly StudentService: StudentUseCase){}

    async handleGetAllUsers(req: NextApiRequest, res: NextApiResponse) {
        try {
            const students = await this.StudentService.getAllStudent();
            res.status(200).json(students);
        }   catch (error) {
            res.status(500).json({ message: "Error fetching users", error: error });
        }
    }
}