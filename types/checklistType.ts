export type Answer = {
    id: number;
    answer: string;
};

export type Question = {
    id: number;
    question: string;
    answers: Answer[];
};

export type QuestionCategory = {
    id: number;
    name: string;
    questions: Question[];
};