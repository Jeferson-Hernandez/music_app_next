'use server'

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function likedSongAction(id: string, pathname: string) {
  try {
    await sql`
      UPDATE song_table
      SET liked = CASE
              WHEN liked = false
              THEN true
              WHEN liked = true
              THEN false
              END
      WHERE id = ${id}
    `
    revalidatePath(pathname)
  } catch (error) {
    throw new Error('Failed to update liked song')
  }
}
