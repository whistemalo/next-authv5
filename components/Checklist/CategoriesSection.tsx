import React from "react";
import CategorieCard from "./CategorieCard";
import { QuestionCategory } from "@/types/checklistType";

type Props = {
  questionCategories: QuestionCategory[];
};

export default async function CategoriesSection({ questionCategories }: Props) {
  return (
    <div className=" flex flex-wrap items-center justify-center ">
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
