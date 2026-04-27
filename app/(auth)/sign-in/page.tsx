import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const page = () => {
  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt="Logo" width={32} height={32} className="rounded-full" />
        </Link>
      </aside>
    </main>
  )
}

export default page
