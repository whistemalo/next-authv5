import CategoriesSection from "@/components/Checklist/CategoriesSection";
import ChecklistHeader from "@/components/Checklist/ChecklistHeader";
import Percentage from "@/components/Checklist/Percentage";
import { getQuestionCategories } from "@/lib/api/Questions.service";

type Props = {};

export default async function Checklist({}: Props) {
  const questionCategories = await getQuestionCategories();
  return (
    <div className=" max-w-7xl items-start mx-auto h-full text-secondary w-full ">
      <div className="text-secondary">
        <div className="flex w-full ">
        <ChecklistHeader/>

        </div>
        <CategoriesSection questionCategories={questionCategories} />
      </div>
    </div>
  );
}
