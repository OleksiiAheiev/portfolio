import { useTheme } from "next-themes";
import { Check } from "../../../icons";
import { IAppearanceButtonProps } from "@/lib/types";

export default function AppearanceButton({
  theme,
  icon,
  currentTheme,
}: IAppearanceButtonProps) {
  const { setTheme } = useTheme();

  return (
    <button
      className={`flex items-center py-2 pl-6 pr-3 space-x-5 text-sm font-semibold leading-7 duration-1000 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-100 ${
        currentTheme === theme.toLowerCase() &&
        "text-zinc-950 dark:text-zinc-100"
      }`}
      onClick={() => {
        setTheme(theme.toLowerCase());
      }}
    >
      <div className="flex items-center space-x-2">
        <div className="p-1 border rounded-sm border-zinc-500 hover:border-zinc-400/50">
          {icon}
        </div>
        <span>{theme}</span>
      </div>
      {currentTheme === theme.toLowerCase() && <Check className="w-4 h-4" />}
    </button>
  );
}
