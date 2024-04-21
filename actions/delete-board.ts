'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteBoard(id: string) {
  await db.board.delete({ where: { id } });

  // updates the information on the page in real time
  revalidatePath('/organization/org_2f5oWBfO6vr5KldBqbq07ESXpf8');
}
