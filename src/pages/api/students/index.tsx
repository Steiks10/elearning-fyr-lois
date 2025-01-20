import { NextApiRequest, NextApiResponse } from "next";
import {StudentService} from "@/core/application/StudentService"
import {StudentController} from "@/interface/controllers/StudentController"
import {StudentRepositoryImpl} from '@/infrastructure/StudentRepositoryImp'

const studentRepository = new StudentRepositoryImpl();
const studentService = new StudentService(studentRepository);
const studentController = new StudentController(studentService);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    switch (req.method) {
      // case "POST":
      //   // Crear usuario
      //   await studentController.handleCreateUser(req, res);
      //   break;
      case "GET":
        // Obtener todos los usuarios
        await studentController.handleGetAllUsers(req, res);
        break;
      default:
        res.status(405).json({ message: "Method not allowed" });
    }
  }