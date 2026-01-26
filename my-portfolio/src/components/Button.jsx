import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function Button({children, variant = 'primary', className, ...props}) {
  const baseStyles =
    'relative inline-flex items-center gap-2 uppercase tracking-wider font-semibold text-sm transition-all duration-150 active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer';

  const variants = {
    // Primary: Text with animated underline
    primary: 'text-accent hover:text-accent/90 py-3 px-0',

    // Outline: Sharp borders, hover inversion
    outline: 'border border-foreground text-foreground hover:bg-foreground hover:text-background py-3 px-6',

    // Ghost: Subtle
    ghost: 'text-muted-foreground hover:text-foreground py-3 px-4',
  };

  return (
    <button
      className={twMerge (baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {/* Primary Underline Animation */}
      {variant === 'primary' &&
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-accent transform scale-x-100 transition-transform duration-150 origin-left hover:scale-x-110" />}

      {/* Ghost Underline Reveal */}
      {variant === 'ghost' &&
        <span className="absolute bottom-2 left-4 right-4 h-px bg-foreground transform scale-x-0 transition-transform duration-150 origin-left group-hover:scale-x-100" />}
    </button>
  );
}
