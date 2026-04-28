import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const page = () => {
  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt="Logo" width={32} height={32} className="rounded-full" />
          <h1>SnapCast</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image src="/assets/icons/star.svg" alt="Star" width={20} height={20} key={index} />
              ))}
            </figure>
            <p className="">
              SnapCast makes screen recording easy. From quick walkthroughs to full presentations, it's fast, smoot, and shareable in seconds.
            </p>
            <article>
              <Image src="/assets/images/jason.png" alt="Jason" width={64} height={64} className='rounded-full' />
            </article>
          </section>
        </div>
        <div className="">
          <h2>
            Jason Noobra
          </h2>
          <p>Prooduct Designer, NovaByte</p>
        </div>
        <p>SnapCast {(new Date()).getFullYear()}</p>
      </aside>
      <aside className='google-sign-in'>
        <section>
          <Link href="/" className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-100 transition">
            <Image
              src="/assets/icons/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="shrink-0"
            />

            <h1 className="text-lg font-semibold leading-tight text-gray-800">
              Create and share your very first{" "}
              <span className="text-pink-500 font-bold">
                SnapCast video
              </span>{" "}
              in no time!
            </h1>
          </Link>  
          <button>
            <Image src="/assets/icons/logo.svg" alt="Logo" width={40} height={40} />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay"></div>
    </main>
  )
}

export default page
