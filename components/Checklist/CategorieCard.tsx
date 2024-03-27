import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QuestionCategory } from "@/types/checklistType";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import NumberOfQuestions from "./NumberOfQuestions";

type Props = {
  questionCategory: QuestionCategory;
};

async function CategorieCard({ questionCategory }: Props) {
  const hadleClick = () => {
    // redirect to the questions page
    console.log("redirect to the questions page");
  };

  return (
    <Card className="max-w-[150px]">
      <CardHeader>
        <CardTitle className="w-full flex items-center  justify-center">
          <div className="flex flex-col items-center "> 
          <span className="font-bold text-lg">{questionCategory.name}</span>
          <NumberOfQuestions  numberOfQuestions={45}
          answeredQuestions={10} />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full flex items-center justify-center">
          <Image
            width={100}
            height={100}
            src={questionCategory.img}
            alt={questionCategory.name}
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex items-center justify-center flex-col">
          <Link href={`/checklist/${questionCategory.id}`}>
            <Button className="w-full">Contestar</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CategorieCard;
