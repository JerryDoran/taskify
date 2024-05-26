'use client';

import { ListWithCards } from '@/types';
import ListHeader from './list-header';

type ListItemProps = {
  data: ListWithCards;
  index: number;
};

export default function ListItem({ data, index }: ListItemProps) {
  return (
    <li className='shrink-0 h-full w-[272px] select-none'>
      <div className='w-full rounded-md shadow-md pb-2 bg-[#f1f2f4]'>
        <ListHeader data={data} />
      </div>
    </li>
  );
}
