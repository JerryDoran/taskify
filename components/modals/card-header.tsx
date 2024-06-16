'use client';

import { useState, useRef, ElementRef } from 'react';
import { useParams } from 'next/navigation';
import { CardWithList } from '@/types';
import { FormInput } from '@/components/form/form-input';
import { useQueryClient } from '@tanstack/react-query';

import { Layout } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

type CardHeaderProps = {
  data: CardWithList;
};

export default function CardHeader({ data }: CardHeaderProps) {
  const inputRef = useRef<ElementRef<'input'>>(null);
  const params = useParams();
  const [title, setTitle] = useState(data.title);

  const queryClient = useQueryClient();

  function onBlur() {
    inputRef.current?.form?.requestSubmit();
  }

  function handleSubmit(formData: FormData) {
    console.log(formData.get('title'));
  }

  return (
    <div className='flex items-start gap-x-3 mb-6 w-full'>
      <Layout className='h-5 w-5 mt-1 text-neutral-700' />
      <div className='w-full'>
        <form action={handleSubmit}>
          <FormInput
            id='title'
            defaultValue={title}
            ref={inputRef}
            onBlur={onBlur}
            className='font-semibold text-xl px-1 text-neutral-700 bg-transparent border-transparent relative -left-1.5 w-[95%] focus-visible:bg-white focus-visible:border-input mb-.5 truncate'
          />
        </form>
        <p className='text-sm text-muted-foreground mt-1'>
          in list <span className='underline'>{data.list.title}</span>
        </p>
      </div>
    </div>
  );
}

CardHeader.Skeleton = function CardHeaderSkeleton() {
  return (
    <div className='flex items-start gap-x-3 mb-6'>
      <Skeleton className='h-6 w-6 mt-1 bg-neutral-200' />
      <div>
        <Skeleton className='w-24 h-6 mb-1 bg-neutral-200' />
        <Skeleton className='w-12 h-4 bg-neutral-200' />
      </div>
    </div>
  );
};
