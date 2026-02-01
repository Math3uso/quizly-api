import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { ActiveQuizService } from "../services/active-quiz.service";
import { JwtAuthGuard } from "src/modules/auth/jwt-auth.guard";
import { User } from "src/decorators/user.decorator";
import type { JwtPayload } from "src/modules/auth/jwt.strategy";

@Controller("quiz")
export class ActiveQuizController {
    constructor(
        private readonly activeQuizService: ActiveQuizService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get("active/:quizId")
    async execute(@Param('quizId') quizId: string, @User() user: JwtPayload) {

        const { quiz } = await this.activeQuizService.execute(user.sub, quizId);

        quiz.questions.map(el => {
            el.correctAnswer = null;
        });

        return { quiz }
    }
}