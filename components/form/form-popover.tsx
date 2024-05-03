'use client';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from '@/components/ui/popover';
import { useAction } from '@/hooks/use-action';
import { createBoard } from '@/actions/create-board/index';
import { FormInput } from '@/components/form/form-input';
import FormSubmit from './form-submit';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

type FormPopoverProps = {
  children: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
};

export default function FormPopover({
  children,
  side = 'bottom',
  align,
  sideOffset = 0,
}: FormPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        side={side}
        align={align}
        sideOffset={sideOffset}
        className='w-80 pt-3'
      >
        <div className='text-sm font-medium text-center pb-4 text-neutral-600'>
          Create board
        </div>
        <PopoverClose asChild>
          <Button
            className='h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600'
            variant='ghost'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
