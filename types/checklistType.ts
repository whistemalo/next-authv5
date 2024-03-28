export type Answer = {
    id: number;
    answer: string;
};

export type Question = {
    id: number;
    question: string;
    answers: Answer[];
    last_answer?: Answer;
    comment?: string;
};

export type QuestionCategory = {
    id: number;
    name: string;
    img: string;
};

export type Checklist = {
    id: number;
    name: string;
    categories: QuestionCategory[];
};
