import Card from "./card";
import Link from "next/link";
import { IContactList } from "@/lib/types";
import { LinkIkon } from "../icons";

export default function ContactItems({ contacts }: IContactList) {
  return (
    <>
      {contacts.map(({ icon, label, href, handle }) => (
        <Card key={label}>
          <Link href={href} target="_blank" className="flex flex-col gap-3">
            <span className="flex gap-2 font-bold items-left justify-left">
              {icon}
              {label}
            </span>
            <span className="flex items-center gap-2 text-md">
              <LinkIkon className="inline-block w-4 h-4" />
              {handle}
            </span>
          </Link>
        </Card>
      ))}
    </>
  );
}
