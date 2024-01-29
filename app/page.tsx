import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/Auth/LoginButton";

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
    from-sky-950 to-slate-950
    "
    >
      <div className="space-y-6 text-center text-white">
        <h1
          className={cn(
            "text-6xl font-semibold  drop-shadow-md",
            fonts.className
          )}
        >
          🔏AUTH
        </h1>
        <p>A Simple, Secure, and Open Source Authentication Service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg" className="mr-4">
              Get Started
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
