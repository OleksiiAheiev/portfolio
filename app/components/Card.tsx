import { IReactNode } from "@/lib/types";

export default function Card({ children }: IReactNode) {
  return (
    <div className="overflow-hidden duration-300 bg-transparent border rounded-lg border-zinc-500 hover:border-zinc-400/50 dark:hover:border-zinc-400/50 dark:border-zinc-600">
      <div className="p-7 sm:p-9 md:p-8 xl:p-9">{children}</div>
    </div>
  );
}
