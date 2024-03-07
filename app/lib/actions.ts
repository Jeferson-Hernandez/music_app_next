'use server'

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { SearchSongsType } from './definitions';

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

export async function searchSongs(query: string) {
  try {
    if (!query) {
      return null
    }

    const data = await sql<SearchSongsType>`
      SELECT song_table.id, song_table.title, song_table.cover_img_sm, artist_table.name AS artist_name
      FROM song_table
      JOIN artist_table ON song_table.artist_id = artist_table.id
      WHERE song_table.title ILIKE ${`${query}%`}
      LIMIT 5
    `
    return data.rows
  } catch (error) {
    throw new Error('Failed to get the songs')
  }
}
