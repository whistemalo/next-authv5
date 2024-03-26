import { Question } from "@/types/checklistType";
import React from "react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import QuestionAnswersGroup from "./QuestionAnswersGroup";

type Props = {
  question: Question[];
};

export default function QuestionCard({ question }: Props) {
  return (
    <div>
      {question.map((question, index) => (
        <div key={question.id}>
          <h3
            // style this with tailwind to be a question card
            className={"rounded-md  mx-4 py-2 text-md"}
          > {question.question}</h3>
          <QuestionAnswersGroup answers={question.answers} />
          <Separator />
        </div>
      ))}
    </div>
  );
}
