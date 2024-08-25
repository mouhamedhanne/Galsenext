import { cn } from "@/lib/utils";
import { Loader2, LucideProps } from "lucide-react";

export const Loader = ({ className, ...props }: LucideProps) => {
  return <Loader2 className={cn("animate-spin", className)} {...props} />;
};
