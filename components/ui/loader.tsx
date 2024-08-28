import { Loader2 } from "lucide-react";

export const Loader = ({ size }: { size?: number }) => {
  return <Loader2 size={size} className="mr-2 h-4 w-4 animate-spin" />;
};
