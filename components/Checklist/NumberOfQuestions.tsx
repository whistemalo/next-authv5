import React from "react";
import { Badge } from "../ui/badge";

type Props = {
  numberOfQuestions: number;
  answeredQuestions: number;
};

function NumberOfQuestions({ numberOfQuestions, answeredQuestions }: Props) {
  return (
    <Badge className="w-fit">
      <div className="w-fll items-center justify-center text-center">
        <span className="text-md font-bold ">{answeredQuestions} /</span>
        {numberOfQuestions}
      </div>
    </Badge>
  );
}

export default NumberOfQuestions;
