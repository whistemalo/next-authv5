"use client";
import React from "react";
import { Button, Input, ModalFooter, Textarea } from "@nextui-org/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AnswerSchema } from "@/schemas";
import { Question } from "@/types/checklistType";

type Props = {
  question: Question;
  onClose: () => void;
};

function CommentForm({ question, onClose }: Props) {
  

  const form = useForm<z.infer<typeof AnswerSchema>>({
    resolver: zodResolver(AnswerSchema),
    defaultValues: {
      comment:question?.comment || "", 
    },
  });

  const onSubmit = (values: z.infer<typeof AnswerSchema>) => {
    if (form.formState.isValid) {

      console.log(values);
    } else {
      onClose();
    }
  };

  const sendComment = async (values: z.infer<typeof AnswerSchema>) => {
    try {
      // post request to 


      // await client.mutate({
      //   mutation: CREATE_ANSWER,
      //   variables: {
      //     input: {
      //       comment: values.comment,
      //       questionId: question.id,
      //       answerId: null,
      //     },
      //   },
      // });
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => {
            const { error } = useFormField();
            return (
              <Textarea
                label="Comentario"
                type="text"
                errorMessage={error?.message}
                isInvalid={!!error?.message}
                {...field}
              />
            );
          }}
        />
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          <Button type="submit" color="primary">
            Enviar
          </Button>
        </ModalFooter>
      </form>
    </Form>
  );
}

export default CommentForm;
