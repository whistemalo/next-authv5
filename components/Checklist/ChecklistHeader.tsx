import React from "react";
import Percentage from "./Percentage";
import { Badge } from "../ui/badge";
import NavButton from "../nav/NavButton";
import { ArrowLeftFromLine } from "lucide-react";

type Props = {};

function ChecklistHeader({}: Props) {
  return (
    <div className="w-fit flex flex-col ">
      <NavButton href="/home" icon={<ArrowLeftFromLine />} 
      text="Regresar al Inicio"
      />

      <div className="flex w-full items-center m-4 justify-around ">
        <div className=" flex flex-col pl-8">
          <h1 className="text-3xl md:text-5xl font-bold text-secondary">
            Checklist
          </h1>
          <Badge className="text-md w-fit">
            Inicio de Turno
          </Badge>
        </div>
        <Percentage />
      </div>
    </div>
  );
}

export default ChecklistHeader;
