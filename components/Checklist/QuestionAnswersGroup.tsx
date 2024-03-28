"use client";
import { Answer, Question } from "@/types/checklistType";
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { cn } from "@/lib/utils";
import CommentForm from "./CommentForm";

type Props = {
  question: Question;
};

export default function QuestionAnswersGroup({ question }: Props) {
  const [selected, setSelected] = React.useState<number | null>(
    question?.last_answer?.id || null
  );
  const handleSelect = (id: number) => {
    setSelected(id);
  };
  console.log(question);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="w-full flex space-x-3">
      {question?.answers?.map((answer) => (
        <div key={answer.id}>
          <Button
            key={answer.id}
            className={cn(
              "w-full font-semibold",
              answer.id === selected
                ? "bg-primary text-secondary"
                : "bg-secondary "
            )}
            onClick={() => setSelected(answer.id)}
          >
            {answer.answer}
          </Button>
        </div>
      ))}
      <div>
        <Button className="w-full" onPress={onOpen}>
          Otro
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Adjuntar imagen ó comentario
              </ModalHeader>
              <ModalBody>
                <CommentForm
                  question={question}
                  onClose={onClose}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
