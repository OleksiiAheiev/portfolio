import { ILogosProps } from "@/lib/types";

export default function Logos({ logos, className }: ILogosProps) {
  return (
    <>
      {logos.map(({ name, icon }) => (
        <span key={name} className={className}>
          {icon}
        </span>
      ))}
    </>
  );
}
