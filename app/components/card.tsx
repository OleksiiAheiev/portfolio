import { IReactNode } from "@/lib/types";

export default function Card({ children }: IReactNode) {
  return (
    <div className="overflow-hidden duration-1000 bg-transparent border rounded-lg dark:hover:fill-zinc-100 dark:fill-zinc-500 text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-100 border-zinc-500 hover:border-zinc-400/50 dark:hover:border-zinc-400/50 dark:border-zinc-600">
      <div className="p-7 sm:p-9 md:p-8 xl:p-9">{children}</div>
    </div>
  );
}
