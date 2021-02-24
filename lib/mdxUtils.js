import fs from 'fs'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

// Fetch 1 file from Notes folder
 export const NOTES_PATH = path.join(process.cwd(), 'notes')

 // Fetch all mdx files inside the NOTES_PATH directory
export const notesFilePaths = fs
.readdirSync(NOTES_PATH)
// Only include md(x) files
.filter((path) => /\.mdx?$/.test(path))