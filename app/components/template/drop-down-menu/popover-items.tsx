import { useTheme } from "next-themes";
import { appearances } from "../navigation/mobile-menu-disclosure";
import AppearanceButton from "./appearance-button";

export default function PopoverItems() {
  const { theme: currentTheme } = useTheme();

  return (
    <div className="p-4">
      {appearances.map(({ theme, icon }) => (
        <AppearanceButton
          key={theme}
          theme={theme}
          icon={icon}
          currentTheme={currentTheme}
        />
      ))}
    </div>
  );
}
