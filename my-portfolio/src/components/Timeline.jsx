// src/components/Timeline.tsx
import React from 'react';

export function Timeline ({items}) {
  return (
    <div className="relative">
      {/* rail */}
      <div className="absolute left-[6.25rem] top-0 bottom-0 w-px bg-border" />

      <div className="space-y-8">
        {items.map((item, i) => (
          <TimelineRow key={`${item.date}-${item.title}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function TimelineRow ({item}) {
  return (
    <div className="grid grid-cols-[6rem_1.75rem_1fr] gap-4">
      {/* date */}
      <div className="pt-1 font-mono text-xs tracking-widest text-muted-foreground">
        {item.date}
      </div>

      {/* node */}
      <div className="relative">
      </div>

      {/* content */}
      <div className="group border-b border-border pb-6 last:border-none">
        <div className="flex flex-col gap-1">
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tighter leading-tight group-hover:text-accent transition-colors duration-150">
            {item.title}
          </h3>

          {(item.org || item.meta) && (
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-muted-foreground">
              {item.org && <span className="text-base font-medium">{item.org}</span>}
              {item.meta && item.meta !== '—' && (
                <span className="font-mono text-xs tracking-widest text-muted-foreground/70 uppercase">
                  {item.meta}
                </span>
              )}
            </div>
          )}
        </div>

        {item.details?.length ? (
          <ul className="mt-3 space-y-1.5">
            {item.details.map(d => (
              <li key={d} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                <span className="mr-2 text-muted-foreground/60">—</span>
                {d}
              </li>
            ))}
          </ul>
        ) : null}

        {item.stack?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.stack.map(tech => (
              <span
                key={tech}
                className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground/70 border border-border px-2 py-1 group-hover:border-accent/30 group-hover:text-accent transition-colors duration-150"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
