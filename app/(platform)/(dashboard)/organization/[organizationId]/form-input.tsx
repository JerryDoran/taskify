'use client';

import { Input } from '@/components/ui/input';
import { useFormStatus } from 'react-dom';

type FormInputProps = {
  errors?: {
    title?: string[];
  };
};

export default function FormInput({ errors }: FormInputProps) {
  const { pending } = useFormStatus();
  return (
    <div className='flex flex-col space-y-2'>
      <Input
        type='text'
        id='title'
        name='title'
        required
        placeholder='Title'
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className='text-rose-500'>
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
