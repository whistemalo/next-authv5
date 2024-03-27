import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight, FileDown, MoveRight } from "lucide-react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
          <Link href="/checklist">
            <Button variant="outline" className="ml-auto">
              Completar <ArrowUpRight />
            </Button>
          </Link>
        </div>

        <AlertDialog>
          <div className=" items-center flex justify-center w-full">
            <AlertDialogTrigger asChild>
              <Button variant="outline">Finlizar turno</Button>
            </AlertDialogTrigger>
          </div>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
}
