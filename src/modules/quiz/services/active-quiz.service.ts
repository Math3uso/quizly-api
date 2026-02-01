import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { ParticipanCachetService } from "src/modules/redis/cache/participante.cache.service";
import { QuizCacheService } from "src/modules/redis/cache/quiz.cache.service";
import { DetailtQuiz } from "../quiz.repository";

@Injectable()
export class ActiveQuizService {
    constructor(
        private readonly quizCache: QuizCacheService,
        private readonly participantCache: ParticipanCachetService
    ) { }

    async execute(userId: string, quizId: string) {
        const user = await this.participantCache.getParticipantById({ quizId, userId });
        if (!user) throw new BadRequestException("quiz not started");

        const quiz: DetailtQuiz = await this.quizCache.getQuizById(quizId);

        return {
            quiz
        }
    }
}