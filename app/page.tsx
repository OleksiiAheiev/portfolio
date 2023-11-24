import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-t dark:from-black from-white dark:via-zinc-700/60 via-zinc-600/20 dark:to-black to-white">
      <Nav />
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="mb-10 text-center animate-fade-in">
          <h2 className="text-zinc-500">Hey I&apos;m Oleksii</h2>
        </div>
        <div className="w-screen h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-900/0 dark:from-zinc-300/0 via-black dark:via-zinc-300/50 to-zinc-900/0 dark:to-zinc-300/0" />
        <div className="w-screen h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-900/0 dark:from-zinc-300/0 via-black dark:via-zinc-300/50 to-zinc-900/0 dark:to-zinc-300/0" />
        <div className="mt-10 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500">
            I&apos;m a strongly motivated Junior Frontend Developer, Actively
            seeking opportunities to apply coding skills.
          </h2>
        </div>
      </div>
    </div>
  );
}
