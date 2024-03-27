import NavButton from "@/components/nav/NavButton";
import { Button } from "@/components/ui/button";
import { getQuestionsByCategory } from "@/lib/api/Questions.service";
import { ArrowLeftFromLine } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Answer({ params }: { params: { slug: number } }) {
  const { slug } = params;
  const Questions = await getQuestionsByCategory(slug);

  return (
    <div className=" max-w-7xl items-start mx-auto h-full text-secondary w-full ">
      <NavButton 
        icon={<ArrowLeftFromLine/>}
        text="Regresar"
        href="/checklist"
      />
      {Questions.map((question) => (
        <div key={question.id} className="flex flex-col w-full p-8 space-x-3">
          <h1 className="text-white">{question.question}</h1>
          <div className="flex flex-col space-y-3">
            {question.answers.map((answer) => (
              <Button key={answer.id} className="bg-primary">
                {answer.answer}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
