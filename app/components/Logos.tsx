import { ILogos } from "@/lib/types";

interface ILogosProps {
  logos: ILogos[];
  className: string;
}

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
