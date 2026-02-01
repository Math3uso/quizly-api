import { Injectable } from "@nestjs/common";
import { QuizRepository } from "../quiz.repository";

@Injectable()
export class QuizGetAllService {
    constructor(
        private readonly quizRepository: QuizRepository
    ) { }

    async execute() {
        const list = await this.quizRepository.getAll();
        return {
            list
        }
    }
}
