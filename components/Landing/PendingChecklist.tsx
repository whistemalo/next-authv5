import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight, FileDown, MoveRight } from "lucide-react";

export function PendingChecklist() {
  return (
    <Card className=" w-full mx-auto backdrop-blur-sm bg-slate-900/30 shadow-lg rounded-lg overflow-hidden  ">
      <CardHeader className="text-secondary">
        <CardTitle>Evaluación de puntos críticos</CardTitle>
        <CardDescription>Listas de Control Pendientes</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/01.png" />
              <AvatarFallback className="bg-blue-500 ">OM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none text-secondary">
                Inicio de turno
              </p>
              <p className="text-sm text-muted-foreground">Completada</p>
            </div>
          </div>
          <Button variant="outline" className="ml-auto">
            Descargar <FileDown />
          </Button>
        </div>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/avatars/02.png" />
              <AvatarFallback className="bg-blue-500 text-white">
                OM
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none text-secondary">
                Final de turno
              </p>
              <p className="text-sm text-muted-foreground">Pendiente</p>
            </div>
          </div>
          <Button variant="outline" className="ml-auto">
            Completar <ArrowUpRight />
          </Button>
        </div>

        <div className=" items-center flex justify-center w-full">
            <Button variant="affirmative" className="w-48">
                Finalizar Turno 
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
