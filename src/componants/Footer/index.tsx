import React from 'react'
import Link from 'next/link'
// import { useForm } from 'react-hook-form'

export default function Footer() {
  // const { register, handleSubmit, reset } = useForm()
  // const [formSubmitted, setFormSubmitted] = useState(false)
  //  const createANewContact = {
  //    contact: {
  //      email: email,
  //      firstName: "",
  //      lastName: "",
  //      phone: "",
  //    },
  //  };

  // async function onSubmitForm(values) {
  //   const email = values.Email
  //   console.log(email)
  //   setFormSubmitted(true)
  //   // const createANewContact = {
  //   //   contact: {
  //   //     email: email,
  //   //     firstName: "",
  //   //     lastName: "",
  //   //     phone: "",
  //   //   },
  //   // };
  //   reset()
  //   const config = {
  //     method: 'post',
  //     url: `/api/subscriber`,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },

  //     data: email,
  //   }

  //   try {
  //     const response = await axios(config)

  //     if (response) {
  //       setEmailStatus(true)
  //     }
  //   } catch (err) {}
  // }

  return (
    <section className="relative w-full border-b  bg-[#003A40]">
      <div className="text-xs relative space-y-4  text-black">
        <div className="relative mx-auto flex h-full max-w-7xl flex-col    py-6 px-10 sm:items-center sm:justify-between md:flex-row md:space-y-0">
          <p className="mb-1 md:mb-0">Your personal content writers.</p>
          <div className="flex">
            <div>
              {/* <Image src={'/Paymentmethods/Visa.svg'} width={50} height={50} sr /> */}
            </div>
            <div>
              {/* <Image
                src={'/Paymentmethods/Mastercard.svg'}
                width={50}
                height={50}
              /> */}
            </div>
            <div>
              {/* <Image
                src={'/Paymentmethods/Discover.svg'}
                width={50}
                height={50}
              /> */}
            </div>
            <div>
              {/* <Image
                src={'/Paymentmethods/AmericanExpress.svg'}
                width={50}
                height={50}
              /> */}
            </div>
          </div>
          <div className="flex flex-col items-start sm:flex-row sm:items-center">
            Visit our social channels
            <nav className="mt-3 flex items-center space-x-3 sm:ml-3 md:mt-0">
              <a
                href="https://twitter.com/mycontentpal"
                className="flex transition hover:text-gray-400"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/mycontentpal/"
                className="flex transition hover:text-gray-400"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/mycontentpal/"
                className="flex transition hover:text-gray-400"
              >
                <span className="sr-only">instagram</span>
                <svg
                  className="tails-selected-element h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                    className=""
                  ></path>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-full max-w-7xl flex-col-reverse items-stretch justify-center    md:flex-row md:space-x-10">
        <div className="flex w-full  flex-col justify-center space-y-5 p-10 sm:items-center md:w-1/2 md:items-start md:pr-0">
          <div className="">
            {/* <Link
              href="/"
              className="text- flex items-center font-extrabold uppercase text-white"
              passHref
            >
              <Image src="/MCPlogo.svg" height={85} width={85} className="" />
            </Link> */}
          </div>
          <nav className=" text-xs w-full justify-between py-2 font-medium text-black  md:flex md:grid md:grid-cols-2 lg:grid-cols-4 ">
            <div className="h-full  ">
              <ul>
                <li className="font-bold text-white ">Services</li>

                <li className="hover:text-gray-400">
                  <Link href={'/content-writing'}>SEO Content Writing</Link>
                </li>
                <li className="hover:text-gray-400">
                  {' '}
                  <a href={'/keyword-research'}>Keyword Research</a>
                </li>
                <li className="hover:text-gray-400">
                  {' '}
                  <Link href={'/done-for-you-affiliate-websites'}>
                    DFY Affiliate Sites
                  </Link>
                </li>
                <li className="hover:text-gray-400">
                  {' '}
                  <Link href={'/fully-managed-seo'}>Fully Managed SEO</Link>
                </li>
              </ul>
            </div>

            <div className=" h-full py-2 md:py-0 lg:py-0 ">
              <ul className="">
                <li className="font-bold text-white ">Resources</li>
                <li className="hover:text-gray-400">
                  <Link href={'/resources/how-to-12x-your-content-production'}>
                    12x your content
                  </Link>
                </li>
                <li className="hover:text-gray-400">
                  <Link
                    href={
                      '/resources/why-some-people-almost-always-make-money-in-affiliate-marketing'
                    }
                  >
                    Making money in affiliate
                  </Link>
                </li>
                <li className="hover:text-gray-400">
                  <Link
                    href={'/resources/the-ultimate-content-writers-checklist'}
                  >
                    Content writers checklist
                  </Link>
                </li>
              </ul>
            </div>

            <div className="h-full py-2 md:py-0 lg:py-0 ">
              <ul className="">
                <li className="font-bold text-white ">Other</li>
                {/* <li className="hover:text-gray-400">
                  <Link href={"/about"}>Affiliates</Link>
                </li>
                <li className="hover:text-gray-400">
                  <Link href={"/about"}>Resellers</Link>
                </li> */}
                <li className="hover:text-gray-400">
                  <Link href={'/about'}>About Energy</Link>
                </li>
              </ul>
            </div>
            <div className="h-">
              <ul className="">
                <li className="font-bold text-white ">Contact</li>
                <li className="hover:text-gray-400">
                  <Link href={'/contact'}>Talk To Us</Link>
                </li>
                {/* <li className="hover:text-gray-400">
                  <Link href={"/about"}>Talk to support</Link>
                </li> */}
              </ul>
            </div>
          </nav>
          <p className="text-xs leading-5 text-gray-600 sm:text-center md:text-left">
            Energy is a trading name for SmartMovementMarketing co no: PC061196A
          </p>
        </div>
        <div className="md: flex  w-full md:w-0"></div>
        <div className="flex w-full flex-col justify-center p-10 sm:items-center md:w-1/2 md:items-start md:pl-0">
          <h4 className="font-bold uppercase text-gray-100">Stay updated</h4>
          <p className="text-xs text-blacksm:text-center my-3 leading-5 md:text-left">
            If you want to get notified about our latest features and updates,
            fill out the form below and we promise to only send you updates once
            a week.
          </p>
          <form
            // onSubmit={handleSubmit(onSubmitForm)}
            className=" w-full"
            // style={emailStatus ? { display: "none" } : { display: "" }}
          >
            <div className="flex space-x-2  ">
              <input
                // {...register('Email', { required: true })}
                type="text"
                placeholder="Enter your email"
                className="block w-full rounded border  bg-white px-3 text-sm text-white placeholder-gray-400 transition"
              />
              <button
                type="submit"
                className="inline-flex w-auto flex-shrink-0 cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded bg-green-400 px-3 py-2 text-sm font-medium text-white transition focus:outline-none focus:ring-2 focus:ring-orange-100"
              >
                {/* {formSubmitted ? 'Thank you' : 'Signup'} */}
              </button>
            </div>
          </form>
          {/* <div style={formStatus ? { display: "" } : { display: "none" }}>
            <motion.h2
              className="text-white text-5xl font-bold flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.55 },
              }}
              viewport={{ once: true }}
            >
              Thankyou
            </motion.h2>
          </div> */}
        </div>
      </div>
      <div className="text-xs space-y-4 border-t  text-gray-400">
        <div className="mx-auto flex h-full max-w-7xl flex-col    py-6 px-10 sm:items-center sm:justify-between md:flex-row md:space-y-0">
          © {new Date().getFullYear()}, Energy
          <nav className="mt-4 flex flex-col space-y-1.5 sm:flex-row sm:space-y-0 sm:space-x-3 md:mt-0">
            <Link
              className="hover:text-gray-400"
              href={'/policy/terms-and-conditions'}
            >
              Terms of Service
            </Link>
            <Link
              className="hover:text-gray-400"
              href={'/policy/privacy-policy'}
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </section>
  )
}
