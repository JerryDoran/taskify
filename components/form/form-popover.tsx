'use client';

import { ElementRef, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useAction } from '@/hooks/use-action';
import { createBoard } from '@/actions/create-board/index';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from '@/components/ui/popover';
import { FormInput } from '@/components/form/form-input';
import FormSubmit from './form-submit';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import FormPicker from './form-picker';

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
  const router = useRouter();
  const closeRef = useRef<ElementRef<'button'>>(null);

  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      toast.success('Board created');
      closeRef.current?.click();
      router.push(`/board/${data.id}`);
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  function onSubmit(formData: FormData) {
    const title = formData.get('title') as string;
    const image = formData.get('image') as string;

    if (typeof title !== 'string') return;
    execute({ title, image });
  }

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
        <PopoverClose ref={closeRef} asChild>
          <Button
            className='h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600'
            variant='ghost'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
        <form action={onSubmit} className='space-y-4'>
          <div className='space-y-4'>
            <FormPicker id='image' errors={fieldErrors} />
            <FormInput
              id='title'
              label='Board Name'
              type='text'
              errors={fieldErrors}
            />
          </div>
          <FormSubmit className='w-full'>Create</FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
}
