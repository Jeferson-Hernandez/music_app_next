import { sql } from '@vercel/postgres';
import { LikedSongsType, SongByAlbumType, SongByIdType, SongListType, TopChartsType } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';


export async function fetchSongs() {
  try {
    const data = await sql<SongListType>`
      SELECT song_table.id, song_table.title, artist_table.name AS artist_name, cover_img_sm 
      FROM song_table
      JOIN artist_table ON song_table.artist_id = artist_table.id
      LIMIT 15
    `
    return data.rows
  } catch (error) {
    throw new Error('Failed to fetch songs data')
  }
}

export async function fetchTopSongs() {
  try {
    const data = await sql<TopChartsType>`
      SELECT song_table.id, song_table.title, song_table.likes, song_table.liked, artist_table.name AS artist_name, cover_img_sm FROM song_table
      JOIN artist_table ON song_table.artist_id = artist_table.id
      ORDER BY likes DESC 
      LIMIT 3
    `
    return data.rows
  } catch (error) {
    throw new Error('Failed to fetch top songs data')
  }
}

export async function fetchSongById(id: string) {
  try {
    const data = await sql<SongByIdType>`
      SELECT song_table.id, song_table.title, song_table.likes, song_table.song_url, song_table.liked, song_table.cover_img_sm, song_table.cover_img_lg, artist_table.name AS artist_name, artist_table.follows AS artist_follows, album_table.title AS album_name, album_table.id AS album_id 
      FROM song_table
      JOIN artist_table ON song_table.artist_id = artist_table.id
      JOIN album_table ON song_table.album_id = album_table.id
      WHERE song_table.id = ${id}
    `
    return data.rows[0]
  } catch (error) {
    throw new Error('Failed to fetch song data')
  }
}

export async function fetchLikedSongs() {
  noStore()
  try {
    const data = await sql<LikedSongsType>`
      SELECT song_table.id, song_table.title, artist_table.name AS artist_name, cover_img_sm, song_table.song_url
      FROM song_table
      JOIN artist_table ON song_table.artist_id = artist_table.id
      WHERE song_table.liked = True
    `
    return data.rows
  } catch (error) {
    throw new Error('Failed to fetch album songs data')
  }
}

export async function fetchSongsByAlbum(songId: string, albumId: string) {
  try {
    const data = await sql<SongByAlbumType>`
      SELECT song_table.id, song_table.title, song_table.cover_img_sm, artist_table.name AS artist_name
      FROM song_table
      JOIN artist_table ON song_table.artist_id = artist_table.id
      WHERE song_table.album_id = ${albumId}
    `
    return data.rows
  } catch (error) {
    throw new Error('Failed to fetch album songs data')
  }
}