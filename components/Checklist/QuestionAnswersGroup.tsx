import { Answer } from "@/types/checklistType";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  answers: Answer[];
};

export default function QuestionAnswersGroup({ answers }: Props) {
  return (
    <RadioGroup defaultValue="option-one">
      {answers.map((answer, index) => (
        <div key={index} className="flex items-center space-x-2">
          <RadioGroupItem value={answer.answer} id={answer.answer} />
          <Label htmlFor={answer.answer}>{answer.answer}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
