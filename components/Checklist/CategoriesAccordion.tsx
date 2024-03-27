"use client";
import { Checklist } from "@/types/checklistType";
import React, { useState, useTransition } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import QuestionCard from "./QuestionCard";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../FormError";
import { FormSuccess } from "../FormSuccess";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AnswerSchema, LoginSchema } from "@/schemas";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "../ui/label";

type Props = {
  QuestionsCategories: Checklist[];
};

export default function CategoriesAccordion({ QuestionsCategories }: Props) {
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  
  const form = useForm<z.infer<typeof AnswerSchema>>({
    resolver: zodResolver(AnswerSchema),
  });
  const fileRef = form.register("file");
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof AnswerSchema>) => {
    // revalidate each question
    if (form.formState.isValid) {
      startTransition(() => {
        // send to the server
        console.log("sending to the server");
        console.log(values);
      });
    }
  };
  return (
    <div>
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <Accordion type="single" collapsible>
            {QuestionsCategories.map((category) => (
              <AccordionItem key={category.id} value={`item-${category.id}`}>
                <AccordionTrigger>{category.name}</AccordionTrigger>
                <AccordionContent>
                  {/* <QuestionCard question={category.questions} /> */}

                  {category.questions.map((question, index) => (
                    <div
                     key={question.id}>
                      <FormField
                        control={form.control}
                        name={`${question.id}.answer`}
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>
                              <Label
                              className="font-normal text-lg text-gray-700"
                              htmlFor={`${question.id}`}>{question.question}</Label>
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                // defaultValue={question.answers[0].answer}
                                className="flex flex-col space-y-1"
                              >
                                {question.answers.map((answer, index) => {
                                  return (
                                    <FormItem
                                      key={index}
                                      className="flex items-center space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <RadioGroupItem value={`${answer.answer}`} />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        {answer.answer}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }
                                )}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage/>
                          </FormItem>
                        )}
                      />
                      <FormField
                       
                        control={form.control}
                        name={`${question.id}.comment`}
                        render={({ field }) => (
                          <FormItem
                          className="pt-5"
                          >
                            <FormLabel>Comentario</FormLabel>
                            <FormControl>
                              <Textarea
                                disabled={isPending}
                                {...field}
                                value={
                                  typeof field.value === "string"
                                    ? field.value
                                    : ""
                                }
                              />
                            </FormControl>
                            <FormMessage>
                              {/* {form.formState.errors.message || ''} */}
                            </FormMessage>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`${question.id}.file`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Imagenes</FormLabel>
                            <FormControl>
                              <Input type="file" placeholder="shadcn" {...fileRef}
                                onChange={(e) => {
                                  field.onChange(e.target?.files?.[0] ?? undefined);
                                }}
                              />
                            </FormControl>
                            <FormMessage>
                            </FormMessage>
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <FormError message={
            error || form.formState.errors['25.answer']?.message
          } />
          <FormSuccess message={success} />

          <Button
            onClick={() => console.log(form.getValues())}
            type="submit"
            variant="default"
            size="lg"
            className="w-full"
          >
            Ingresar
          </Button>
        </form>
      </Form>
    </div>
  );
}
