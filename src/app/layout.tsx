import '../styles/tailwind.css'
import Navbar from '../componants/Header/Navbar'
import React from 'react'
// import Footer from '../componants/Footer'
import { Inter } from '@next/font/google'
import Providers from '../componants/providers'
// import { AnimatePresence } from 'framer-motion'
import { GlobalStatusContextProvider } from '../Context/status'
import { Toaster } from '../componants/ui/Toast'
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '600'],
  variable: '--font-mont',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body className={` ${inter.className}`}>
        {/* @ts-expect-error Server Component */}
        <Navbar />
        <Providers>
          <Toaster position="bottom-right" />

          <GlobalStatusContextProvider>{children}</GlobalStatusContextProvider>
        </Providers>

        {/* Allow for more height on mobile devices*/}
        <div className="h-40 md:hidden"> </div>
      </body>
    </html>
  )
}

{
  /* <React.Fragment>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){var s = document.createElement("script");s.setAttribute("data-account","CeglA0oqvN");s.setAttribute("src","https://cdn.userway.org/widget.js");document.body.appendChild(s);})();`,
            }}
          />
        </React.Fragment> */
}

//  <title></title>
//   <meta content="width=device-width, initial-scale=1" name="viewport" />
//   <link rel="icon" href="/favicon.ico" />
