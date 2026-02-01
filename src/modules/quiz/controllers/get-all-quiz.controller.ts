import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/modules/auth/jwt-auth.guard";
import { QuizGetAllService } from "../services/quiz-get-all.service";

@Controller("quiz")
export class GetAllQuizController {
    constructor(
        private readonly quizGetAll: QuizGetAllService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get("list")
    async execute() {
        const { list } = await this.quizGetAll.execute();
        return { list }
    }
}