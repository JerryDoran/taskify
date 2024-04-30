'use client';

import { useFormStatus } from 'react-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type FormSubmitProps = {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | 'default'
    | 'primary'
    | 'outline'
    | 'secondary'
    | 'destructive'
    | 'ghost'
    | 'link';
};

export default function FormSubmit({
  children,
  className,
  disabled,
  variant = 'default',
}: FormSubmitProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending || disabled}
      type='submit'
      variant={variant}
      size='sm'
      className={cn(className)}
    >
      {children}
    </Button>
  );
}
