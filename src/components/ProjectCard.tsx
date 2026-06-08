import type { FC } from "react";

type ProjectCardProps = {
  title: string;
  description: string | string[];
  tech: string[];
  demo?: string;
  repo?: string;
  website?: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  demo,
  repo,
  website,
}) => (
  <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-brand-500/60 hover:bg-slate-900">
    <div className="flex items-center justify-between gap-4">
      <div>
        <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {website ? (
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:bg-brand-500/20 hover:text-white"
          >
            Website
          </a>
        ) : demo ? (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:bg-brand-500/20 hover:text-white"
          >
            Demo
          </a>
        ) : null}
        {repo ? (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-3 py-2 text-sm text-slate-200 transition hover:border-brand-500 hover:text-brand-300"
          >
            Repo
          </a>
        ) : null}
      </div>
    </div>

    {Array.isArray(description) ? (
      <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300 list-disc list-outside pl-5">
        {description.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    ) : (
      <p className="mt-5 text-sm leading-7 text-slate-300">{description}</p>
    )}

    <div className="mt-5 flex flex-wrap gap-2">
      {tech.map((item) => (
        <span
          key={item}
          className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-400"
        >
          {item}
        </span>
      ))}
    </div>
  </article>
);

export default ProjectCard;
