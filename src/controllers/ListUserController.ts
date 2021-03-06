import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService"

class ListUserController {
    async handle(req: Request, res: Response) {
        const listUsersService = new ListUserService();

        const users = await listUsersService.execute();

        return res.json(users);
    }
}

export { ListUserController }