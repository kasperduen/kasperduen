import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-running.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="animate-fade-in mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent">
          CTO & Distance Runner
        </p>
        <h1 className="animate-fade-in-delay-1 mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          <span className="text-balance">Kasper Due</span>
        </h1>
        <p className="animate-fade-in-delay-2 mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Building technology that scales. Running distances that challenge.
          Always pushing the pace.
        </p>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="animate-fade-in-delay-3 mt-16 inline-flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            Explore
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
