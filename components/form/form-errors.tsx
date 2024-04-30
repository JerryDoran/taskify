import { XCircle } from 'lucide-react';

type FormErrorsProps = {
  id: string;
  errors?: Record<string, string[] | undefined>;
};

export default function FormErrors({ id, errors }: FormErrorsProps) {
  if (!errors) return null;

  return (
    <div
      id={`${id}-error`}
      aria-live='polite'
      className='text-rose-500 mt-2 text-xs'
    >
      {errors?.[id]?.map((error: string) => (
        <div
          key={error}
          className='flex items-center font-medium p-2 border border-rose-500 bg-rose-500/10 rounded-sm'
        >
          <XCircle className='h-4 w-4 mr-2' />
          {error}
        </div>
      ))}
    </div>
  );
}
