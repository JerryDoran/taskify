'use client';

import { MoreHorizontal, X } from 'lucide-react';
import { useAction } from '@/hooks/use-action';
import { deleteBoard } from '@/actions/delete-board/index';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from '@/components/ui/popover';

type BoardOptionsProps = {
  id: string;
};

export default function BoardOptions({ id }: BoardOptionsProps) {
  const { execute, isLoading } = useAction(deleteBoard, {
    onError: (error) => {
      toast.error(error);
    },
  });

  function onDelete() {
    execute({
      id,
    });
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='h-auto w-auto p-2' variant='transparent'>
          <MoreHorizontal className='h-4 w-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='px-0 pt-3 pb-3' side='bottom' align='start'>
        <div className='text-sm font-medium text-center text-neutral-600 pb-4'>
          Board Actions
        </div>
        <PopoverClose asChild className='absolute top-2.5 right-2.5'>
          <Button
            className='h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600'
            variant='ghost'
          >
            <X className='h-4 w-4' />
          </Button>
        </PopoverClose>
        <Button
          className='ml-2'
          variant='ghost'
          disabled={isLoading}
          onClick={onDelete}
        >
          Delete this board
        </Button>
      </PopoverContent>
    </Popover>
  );
}
