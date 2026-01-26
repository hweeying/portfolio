import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ className, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button 
      className={cn(
        // Base: Wobbly shape, thick borders, handwritten font
        "relative inline-flex items-center justify-center px-8 py-3 font-body text-xl font-bold border-[3px] border-pencil rounded-wobbly transition-all duration-100 ease-out focus:outline-none focus:ring-2 focus:ring-ballpoint/50 focus:ring-offset-2 cursor-pointer",
        
        // Primary: White -> Red Hover
        variant === 'primary' && "bg-white text-pencil hover:bg-correction hover:text-white shadow-hard hover:shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        
        // Secondary: Muted -> Blue Hover
        variant === 'secondary' && "bg-paper-muted text-pencil hover:bg-ballpoint hover:text-white shadow-hard hover:shadow-hard-sm hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        
        className
      )} 
      {...props} 
    />
  );
};