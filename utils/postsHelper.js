import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsFolderPath = path.join(process.cwd(), "posts");

export const getPostDetails = (postIdentifier) => {
  const slug = postIdentifier.replace(".md", "");
  const filePath = path.join(postsFolderPath, `${slug}.md`);
  const file = fs.readFileSync(filePath);
  const { content, data } = matter(file);

  return {
    slug,
    ...data,
    content
  }
}

export const getAllPosts = () => {
  const postsPaths = getPostsFilesPaths()
  const posts = postsPaths.map((path) => getPostDetails(path))
  const sortedPosts = posts.sort((a, b) => a.date - b.date)
  return sortedPosts
}

export const getFeaturedPosts = () => {
  const posts = getAllPosts();
  const featuredPosts = posts.filter(post => post.isFeatured);

  return featuredPosts
}


export const getPostsFilesPaths = () => {
  return fs.readdirSync(postsFolderPath);
}