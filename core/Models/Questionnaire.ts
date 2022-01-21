export type Answer = {
    id: number;
    title: string;
    type: string;
    multiple: boolean;
    possibleAnswers: any;
};

export type Question = {
    id: number;
    title: string;
    type: string;
    multiple: boolean;
    possibleAnswers: Answer[];
};

export type Questionnaire = {
    id: number;
    priority: number;
    title: string;
    description: string;

    questions: Question[];
};