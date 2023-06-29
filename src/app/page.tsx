
import Image from 'next/image'
import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import PreviewSuspense from '../componants/PreviewSuspense'


import { client } from '../lib/sanity.client'



const query = groq`
*[_type == "post"] {
 ...,
  author->,
  categories[]->,
} | order(_createdAt desc)`

export default async function Index() {
  // if (previewData()) {
  //   return (
  //     <PreviewSuspense fallback={<div>Loading preview data...</div>}>
  //       <div>1</div>
  //     </PreviewSuspense>
  //   )
  // }
  // const posts = await client.fetch(query)

  return (
    <>
 home
    </>
  )
}

