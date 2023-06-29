'use client'
import React from 'react'
import { Disclosure } from '@headlessui/react'

const data = [
  { question: 'question about eco', answer: 'answer' },
  { question: 'question about eco', answer: 'answer' },
  { question: 't', answer: 't' },
  { question: 't', answer: 't' },
  ,
]
function FAQ() {
  // const [schema, setSchema] = useState({
  //   "@context": "http://schema.org",
  //   "@type": "FAQPage",
  //   mainEntity: [],
  // });
  return (
    <div className="bg-ppr bg-contain bg-no-repeat ">
      <section className="h-full bg-[#F5F5F5] pb-16 ">
        <h3 className="p-8 text-center text-4xl font-bold lg:text-6xl">
          Frequently Asked Questions {'\uD83E\uDD14'}
        </h3>
        <div className="text-center">
          {data.map((d) => (
            <div key={d.question} className="">
              <div className="w-full px-4 pt-8 ">
                <div className="container w-full  max-w-5xl   ">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-between bg-[#F5F5F5]
                          px-4 py-2 text-left text-sm font-medium text-black
                          hover:bg-orange-200 focus:outline-none
                          focus-visible:ring focus-visible:ring-orange-500
                          focus-visible:ring-opacity-75 ${open ? '' : ''} `}
                        >
                          <span className="text-xl text-black">
                            {d.question}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel
                          className={`px-4 pt-4 pb-2 text-left text-xl text-gray-500 lg:text-2xl ${
                            open ? '' : ''
                          } `}
                        >
                          {d.answer}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section />
      </section>
    </div>
  )
}

export default FAQ

// return (
//   <div className="bg-ppr bg-contain bg-no-repeat ">
//     <section className="h-full bg-[#F5F5F5] pb-16 ">
//       <h3 className="text-center font-bold text-4xl lg:text-6xl p-8">
//         Frequently Asked Questions {"\uD83E\uDD14"}
//       </h3>
//       <div className="text-center">
//         {data.map((d) => {
//           schema.mainEntity.push({
//             "@type": "Question",
//             name: d.question,
//             acceptedAnswer: {
//               "@type": "Answer",
//               text: d.answer,
//             },
//           });
//           return (
//             <div key={d.q} className="">
//               <Disclosure>// your component here</Disclosure>
//             </div>
//           );
//         })}
//       </div>
//       <script type="application/ld+json">{JSON.stringify(schema)}</script>
//       <section />
//     </section>
//   </div>
// );
