import { Loader2 } from "lucide-react";

export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex items-center justify-center gap-2 text-blue-600 animate-pulse">
      <Loader2 className="animate-spin w-5 h-5" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
