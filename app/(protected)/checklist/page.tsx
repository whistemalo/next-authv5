import CategoriesSection from '@/components/Checklist/CategoriesSection';
import { getQuestionCategories } from '@/lib/api/Questions.service'


type Props = {};

export default async function Checklist({}: Props) {
  const questionCategories = await getQuestionCategories();
  return (
    <div className=" max-w-7xl items-start mx-auto h-full text-secondary w-full ">
     <div className='text-secondary'>
       <h1>Checklist</h1>
       {/* <Percentage /> */}
       <CategoriesSection 
          
          questionCategories={questionCategories}
       />
     </div>
    </div>
  );
}

