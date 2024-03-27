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

type Props = {
  questionCategory: QuestionCategory;
};

function CategorieCard({ questionCategory }: Props) {

  const hadleClick = () => {
    // redirect to the questions page
    console.log('redirect to the questions page');

  }

  return (
    <Card className="max-w-[150px]">
      <CardHeader>
        <CardTitle className="w-full flex items-center  justify-center">
          <span className="font-bold text-lg">{questionCategory.name}</span>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full flex items-center justify-center">
          <Image
            width={150}
            height={150}
            src={questionCategory.img}
            alt={questionCategory.name}
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex items-center justify-center">
          <Link href={`/checklist/${questionCategory.id}`}>
            <Button className="w-full">
              Start
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CategorieCard;
