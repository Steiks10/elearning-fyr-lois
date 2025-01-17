import { GetServerSideProps } from "next";
import Link from "next/link";

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//     const userRepository = new UserRepositoryImpl();
//     const userService = new UserService(userRepository);
//     const users = await userService.getAllUsers();
  
//     return {
//       props: {
//         users,
//       },
//     };
//   };

export default function HomePage(){
    return <h1>Hello World</h1>
}