import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import PreviewSuspense from '../../../../componants/PreviewSuspense'
import { client } from '../../../../lib/sanity.client'
import PreviewBlogList from '../../../../componants/blog/PreviewBlogList'
import Bloglist from '../../../../componants/blog/BlogList'
const query = groq`
*[_type == "post"] {
 name,
...,
  author->,
  // categories[]->,
} | order(_createdAt desc)`

export default async function Blog() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<div>Loading preview data...</div>}>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)

  return (
    <>
      <Bloglist posts={posts} />
    </>
  )
}

{
  /* <Bloglist posts={posts} */
}
