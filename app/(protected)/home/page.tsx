import { PendingChecklist } from "@/components/Landing/PendingChecklist";
import ProfilePicture from "@/components/Landing/ProfilePicture";
import ShiftInfo from "@/components/Landing/ShiftInfo";
import { Badge } from "@/components/ui/badge";
import { ListChecks, MoonStar } from "lucide-react";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className=" max-w-7xl items-start mx-auto h-full text-secondary w-full ">
      <div className="flex flex-row  w-full p-8 space-x-3">
        <ProfilePicture />
        <ShiftInfo />
      </div>

      <div className="px-4">
        <PendingChecklist />
      </div>
    </div>
  );
}
