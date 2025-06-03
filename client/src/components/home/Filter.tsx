import type { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

export default function Filter({
  className,
  children,
  active,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        'text-20 border-b-3 p-14',
        {
          'border-b-main text-main font-semibold': active,
          'border-b-transparent text-gray500 font-medium': !active,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
