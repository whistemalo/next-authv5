import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

async function ProfilePicture({}: Props) {
  return (
    <Avatar className="h-24 w-24">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default ProfilePicture;
