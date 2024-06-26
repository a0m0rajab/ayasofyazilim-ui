import React from 'react';

import { cn } from '@/lib/utils';

export type CardImageProps = {
  ComponentAfterImage?: React.ReactNode;
  alt?: string;
  className?: string;
  containerClassName?: string;
  src: string;
};
export default function CardImage({
  src,
  alt,
  ComponentAfterImage,
  containerClassName,
  className,
}: CardImageProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-t-xl',
        containerClassName
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full hover:scale-105 hover:ease-in transition duration-150',
          className
        )}
      />
      {ComponentAfterImage}
    </div>
  );
}
