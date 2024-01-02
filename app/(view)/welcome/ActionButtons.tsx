"use client";

import { Airplay, BookOpen } from "lucide-react";
import { HomeButton } from "@/components";
import { cn } from "@/utils";
import { useRouter } from "next/navigation";

export function ActionButtons({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <div className={cn("flex gap-x-4", className)}>
      <HomeButton
        backgroundColor="purple"
        label="Estudar"
        Icon={Airplay}
        onClick={() => router.push("/proffies")}
      />
      <HomeButton
        backgroundColor="pink"
        label="Dar aulas"
        Icon={BookOpen}
        onClick={() => router.push("/proffy-form")}
      />
    </div>
  );
}
