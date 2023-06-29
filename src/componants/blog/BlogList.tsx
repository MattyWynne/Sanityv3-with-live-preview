// import Link from 'next/link'
// import urlFor from '../../lib/urlFor'
// import Image from 'next/image'

export default function BlogList({ posts }) {
  console.log(posts)
  return (
    <>
      {posts.map((post, index) => {
        return (
          <>
            <div>{post.title}</div>
          </>
        )
      })}
    </>
  )
}

//  <section className=" bg-royal font-inerr -8 p-4 text-black">
//       <div className="bg-body-dark container mt-24 grid-cols-2 gap-3   lg:grid ">
//         {posts.map((post, index) =>
//           index === 0 ? (
//             <div className="col-span-2 items-center sm:w-full  lg:flex ">
//               <div className="">
//                 <Link
//                   key={post._id}
//                   href={`/post/${post.slug.current}`}
//                   passHref
//                 >
//                   <Image
//                     src={urlFor(post?.mainImage).url()}
//                     alt=""
//                     width={700}
//                     height={700}
//                     className="rounded-xl"
//                   />
//                 </Link>
//               </div>
//               <div className="mb-6 flex h-full w-full flex-col items-start justify-center py-6 md:mb-0 md:w-1/2">
//                 <div className="flex h-full transform flex-col items-start justify-center space-y-3 md:space-y-5 md:pl-10 lg:pl-16">
//                   <div className="text-xs text-blacvk inline-block flex items-center rounded-full bg-blue-500 py-1.5 pl-2 pr-3 font-medium uppercase leading-none">
//                     <svg
//                       className="mr-1 h-3.5 w-3.5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                     </svg>
//                     <span>Featured</span>
//                   </div>
//                   <Link
//                     key={post._id}
//                     href={`/blog/${post.slug.current}`}
//                     passHref
//                   >
//                     <h1 className="py-2 text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
//                       <a href="#_">{post.title}.</a>
//                     </h1>
//                   </Link>
//                   <p className="pt-2 text-sm font-medium">
//                     by{' '}
//                     <a href="#_" className="mr-1 underline">
//                       {post.author.name}
//                     </a>{' '}
//                     · <span className="mx-1">April 23rd, 2021</span> ·{' '}
//                     <span className="mx-1 text-gray-600">5 min. read</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="w-full  py-12 sm:p-12 ">
//               <Link key={post._id} href={`/blog/${post.slug.current}`} passHref>
//                 <Image
//                   src={urlFor(post.mainImage).url()}
//                   alt=""
//                   className="mb-8 flex rounded-t-xl "
//                   height={500}
//                   width={500}
//                 />
//               </Link>
//               <div className="text-xs  inline-block items-center  rounded-full bg-blue-500 px-3 py-1.5 font-medium uppercase leading-none text-white">
//                 <span>SEO</span>
//               </div>
//               <h2 className="text-lg py-1.5 font-bold sm:text-xl md:text-2xl">
//                 {post.title}
//               </h2>
//               <p className="text-sm text-gray-500">{post.description}</p>
//               <p className="text-xs pt-2 font-medium">
//                 <a href="#_" className="mr-1 underline">
//                   {post.author.name}
//                 </a>{' '}
//                 · <span className="mx-1">April 20th, 2022</span> ·{' '}
//                 <span className="mx-1 text-gray-200">3 min. read</span>
//               </p>
//             </div>
//           )
//         )}
//       </div>
//     </section>
