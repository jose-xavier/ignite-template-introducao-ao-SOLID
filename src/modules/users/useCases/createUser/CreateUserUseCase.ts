import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    
    const emailArealdyExists = this.usersRepository.findByEmail(email);

    if(emailArealdyExists){
      throw new Error("email already exists");
    }

    return this.usersRepository.create({
      name, 
      email
    });

  }
}

export { CreateUserUseCase };
