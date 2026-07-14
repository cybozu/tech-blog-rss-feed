const path = require('path');
const fs = require('fs/promises');

module.exports = async () => {
  try {
    const archivedBlogs = JSON.parse(
      await fs.readFile(path.join(__dirname, '../blog-feeds/archive-feeds.json'), 'utf-8'),
    );
    return archivedBlogs;
  } catch {
    console.warn('[archivedBlogs] archive-feeds.json not found, returning empty array');
    return [];
  }
};
