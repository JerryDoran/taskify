import { deleteBoard } from '@/actions/delete-board';
import FormDelete from './form-delete';

type BoardProps = {
  title: string;
  id: string;
};

export default function Board({ title, id }: BoardProps) {
  // creates a bound function that has the same body as the original function (my server action).
  const delteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form action={delteBoardWithId} className='flex gap-x-2 items-center'>
      <p>{title}</p>
      <p>{id}</p>
      <FormDelete />
    </form>
  );
}
