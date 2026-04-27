import Header from '@/components/Header';
import React from 'react'

const page = async ({params} : ParamsWithSearch) => {
    const {id} = await params;
  return (
    <div className="wrapper page">
        <Header subHeader='parthojotyroychowdhury@gmail.com' title='Partho' userImg='/assets/images/dummy.jpg'/>
        <div className="text-2xl font-karla">USER ID: {id}</div>
    </div>
  )
}

export default page