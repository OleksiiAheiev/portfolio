import Link from "next/link";
import Navigation from "../components/template/Navigation/Navigation";
import { Github, LinkIkon, LinkedIn, Mail, Telegram } from "../icons";
import Card from "../components/Card";
import { IContacts } from "@/lib/types";

const contacts: IContacts[] = [
  {
    icon: <Mail className="inline-block w-5 h-5" />,
    href: "mailto:aheiev.oleksii@gmail.com",
    label: "Email",
    handle: "aheiev.oleksii@gmail.com",
  },
  {
    icon: <LinkedIn className="inline-block w-5 h-5 dark:fill-white" />,
    href: "https://linkedin.com/in/oleksii-aheiev",
    label: "LinkedIn",
    handle: "linkedin.com/in/oleksii-aheiev",
  },
  {
    icon: <Github className="inline-block w-5 h-5" />,
    href: "https://github.com/OleksiiAheiev",
    label: "Github",
    handle: "OleksiiAheiev",
  },
  {
    icon: <Telegram className="inline-block w-5 h-5 dark:fill-white" />,
    href: "https://t.me/tryto_find",
    label: "Telegram",
    handle: "t.me/tryTo_Find",
  },
];

export default function Contact() {
  return (
    <main className="cursor-default bg-gradient-to-tl dark:from-black from-white dark:via-zinc-700/30 via-zinc-700/30 dark:to-black to-white">
      <div className="flex flex-col justify-center min-h-screen w-min-screen">
        <Navigation />
        <div className="container my-auto">
          <div className="h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-900/0 dark:from-zinc-300/0 via-black dark:via-zinc-300/50 to-zinc-900/0 dark:to-zinc-300/0" />
          <div className="mb-2">
            <h2 className="text-4xl text-transparent text-black duration-1000 bg-zinc-900 dark:bg-white text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
              Get in touch
            </h2>
          </div>
          <div className="h-px animate-fade-in bg-gradient-to-r from-zinc-900/0 dark:from-zinc-300/10 via-black dark:via-zinc-300/50 to-zinc-900/0 dark:to-zinc-300/0" />
          <div className="h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-900/0 dark:from-zinc-300/0 via-black dark:via-zinc-300/50 to-zinc-900/0 dark:to-zinc-300/0" />
          <div className="grid w-full grid-cols-1 gap-5 my-5 sm:grid-cols-2 animate-fade-in">
            {contacts.map(({ icon, label, href, handle }) => (
              <Card key={label}>
                <Link
                  href={href}
                  target="_blank"
                  className="flex flex-col gap-3"
                >
                  <span className="flex gap-2 font-bold items-left justify-left">
                    {icon}
                    {label}
                  </span>
                  <span className="flex items-center gap-2 duration-1000 text-md text-zinc-700 dark:text-white">
                    <LinkIkon className="inline-block w-4 h-4 dark:fill-white" />
                    {handle}
                  </span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
