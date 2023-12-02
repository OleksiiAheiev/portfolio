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
      className="flex items-center py-2 pl-6 pr-3 space-x-5 text-sm font-semibold leading-7"
      onClick={() => {
        setTheme(theme.toLowerCase());
      }}
    >
      <div className="flex items-center space-x-2">
        <div className="p-1 border rounded-sm border-zinc-500 hover:border-zinc-400/50">
          {icon}
        </div>
        <span className="text-gray-900 dark:text-gray-100">{theme}</span>
      </div>
      {currentTheme === theme.toLowerCase() && <Check className="w-4 h-4" />}
    </button>
  );
}
