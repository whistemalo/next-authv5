import React from "react";
import CategorieCard from "./CategorieCard";
import { QuestionCategory } from "@/types/checklistType";

type Props = {
  questionCategories: QuestionCategory[];
};

export default function CategoriesSection({ questionCategories }: Props) {
  return (
    <div className="p-24 flex flex-wrap ">
      {questionCategories.map((questionCategory) => (
        <div className="m-2">
          <CategorieCard
            key={questionCategory.id}
            questionCategory={questionCategory}
          />
        </div>
      ))}
    </div>
  );
}
