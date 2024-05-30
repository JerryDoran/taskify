'use client';

import { Card } from '@prisma/client';

type CardItemProps = {
  data: Card;
  index: number;
};

export default function CardItem({ data, index }: CardItemProps) {
  return (
    <div className='truncate border-2 border-transparent hover:border-black transition py-2 px-3 text-sm bg-white rounded-md shadow-md'>
      {data.title}
    </div>
  );
}
