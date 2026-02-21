import Image from "next/image";
import type { GithubUser } from "@/lib/data";
import { Code2, Mountain, Users, GitFork } from "lucide-react";

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-card-foreground">{value}</p>
        <p className="text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

export function About({ user }: { user: GithubUser | null }) {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">01.</span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            About
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-5">
          {/* Text content */}
          <div className="lg:col-span-3">
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I'm a <strong className="text-foreground">CTO</strong> and
                software engineer who thrives at the intersection of leadership
                and code. I build high-performing engineering teams and scalable
                systems, guided by the same discipline I bring to the trails.
              </p>
              <p>
                When I'm not architecting software or leading product strategy,
                you'll find me logging miles on{" "}
                <a
                  href="https://www.strava.com/athletes/25682473"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent/80"
                >
                  Strava
                </a>
                . Running isn't just a hobby - it's how I think, reset, and push
                past limits. The parallels between endurance running and
                building great software are endless: patience, consistency, and
                the willingness to be uncomfortable.
              </p>
              <p>
                I write about engineering, leadership, and the things I learn
                along the way on my{" "}
                <a
                  href="https://blog.kasperdue.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-accent/80"
                >
                  blog
                </a>
                .
              </p>
            </div>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatCard
                icon={<Code2 className="h-4 w-4" />}
                label="Public Repos"
                value={user?.public_repos?.toString() ?? "30+"}
              />
              <StatCard
                icon={<Users className="h-4 w-4" />}
                label="Followers"
                value={user?.followers?.toString() ?? "50+"}
              />
              <StatCard
                icon={<Mountain className="h-4 w-4" />}
                label="Passion"
                value="Trail Running"
              />
              <StatCard
                icon={<GitFork className="h-4 w-4" />}
                label="Role"
                value="CTO"
              />
            </div>
          </div>

          {/* Profile image */}
          <div className="flex justify-center lg:col-span-2">
            <div className="group relative">
              <div className="absolute -inset-1.5 rounded-2xl border border-accent/20 transition-all group-hover:border-accent/40" />
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/profile-picture.jpg"
                  alt="Kasper Due"
                  width={380}
                  height={380}
                  className="aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accent/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
