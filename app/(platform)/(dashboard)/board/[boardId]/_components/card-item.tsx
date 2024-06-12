'use client';

import { Card } from '@prisma/client';
import { Draggable } from '@hello-pangea/dnd';

type CardItemProps = {
  data: Card;
  index: number;
};

export default function CardItem({ data, index }: CardItemProps) {
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role='button'
          className='truncate border-2 border-transparent hover:border-black transition py-2 px-3 text-sm bg-white rounded-md shadow-md'
        >
          {data.title}
        </div>
      )}
    </Draggable>
  );
}
