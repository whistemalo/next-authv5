import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  getQuestions
} from "@/lib/api/Questions.service";
import CategoriesAccordion from "@/components/Checklist/CategoriesAccordion";


async function page() {
  const session = await auth();
  const questions = await getQuestions();


  session?.user.role;

  return (
    <div>
      <h1>Settings</h1>
      <p>Protected page</p>
      <CategoriesAccordion QuestionsCategories={questions}/>
      {/* <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form> */}
    </div>
  );
}

export default page;
