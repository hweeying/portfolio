import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  decoration?: 'tape' | 'tack' | 'none';
  rotate?: 'left' | 'right' | 'none';
}

export const Card = ({ children, className, decoration = 'none', rotate = 'none' }: CardProps) => {
  // Logic to tilt cards slightly for realism
  const rotation = rotate === 'left' ? '-rotate-1' : rotate === 'right' ? 'rotate-1' : '';

  return (
    <div className={cn(
      "relative bg-white border-[3px] border-pencil rounded-wobbly-md p-8 shadow-hard transition-transform duration-300 hover:-translate-y-1 hover:shadow-hard-lg",
      rotation,
      className
    )}>
      {/* Tape Decoration (Translucent Gray Strip) */}
      {decoration === 'tape' && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-pencil/20 -rotate-2 backdrop-blur-[1px] border-l border-r border-white/30" />
      )}
      
      {/* Thumbtack Decoration (Red Circle) */}
      {decoration === 'tack' && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
          <div className="w-4 h-4 rounded-full bg-correction border-2 border-pencil shadow-sm" />
          <div className="w-[2px] h-2 bg-pencil/50" />
        </div>
      )}

      {children}
    </div>
  );
};