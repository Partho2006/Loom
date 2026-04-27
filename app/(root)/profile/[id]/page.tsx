import Header from '@/components/Header';
import React from 'react'
import VideoCard from '@/components/VideoCard'

const page = async ({params} : ParamsWithSearch) => {
    const {id} = await params;
  return (
    <div className="wrapper page">
        <Header subHeader='parthojotyroychowdhury@gmail.com' title='Partho' userImg='/assets/images/dummy.jpg'/>
        <div className="text-2xl font-karla">USER ID: {id}</div>

        <div className="video-grid">
        <VideoCard
          id="1"
          title="Example1"
          thumbnail="/assets/samples/thumbnail (1).png"
          createdAt={new Date("2026-05-01")}
          userImg="/assets/images/jason.png"
          username="jason"
          views={69}
          visibility="public"
          duration={50}
        />

        <VideoCard
          id="2"
          title="Product Demo Walkthrough"
          thumbnail="/assets/samples/thumbnail (2).png"
          createdAt={new Date("2026-04-15")}
          userImg="/assets/images/sarah.png"
          username="sarah"
          views={245}
          visibility="public"
          duration={320}
        />

        <VideoCard
          id="3"
          title="Weekly Team Update"
          thumbnail="/assets/samples/thumbnail (3).png"
          createdAt={new Date("2026-04-22")}
          userImg="/assets/images/michael.png"
          username="michael"
          views={78}
          visibility="private"
          duration={412}
        />

        <VideoCard
          id="4"
          title="Bug Fix Explanation"
          thumbnail="/assets/samples/thumbnail (4).png"
          createdAt={new Date("2026-04-28")}
          userImg="/assets/images/emily.png"
          username="emily"
          views={32}
          visibility="public"
          duration={183}
        />

        <VideoCard
          id="5"
          title="New Feature Overview"
          thumbnail="/assets/samples/thumbnail (5).png"
          createdAt={new Date("2026-05-05")}
          userImg="/assets/images/david.png"
          username="david"
          views={156}
          visibility="public"
          duration={275}
        />

        <VideoCard
          id="6"
          title="Client Presentation Feedback"
          thumbnail="/assets/samples/thumbnail (6).png"
          createdAt={new Date("2026-05-10")}
          userImg="/assets/images/lisa.png"
          username="lisa"
          views={89}
          visibility="private"
          duration={198}
        />

        <VideoCard
          id="7"
          title="UI Design Review"
          thumbnail="/assets/samples/thumbnail (7).png"
          createdAt={new Date("2026-05-12")}
          userImg="/assets/images/alex.png"
          username="alex"
          views={124}
          visibility="public"
          duration={230}
        />

        <VideoCard
          id="8"
          title="Marketing Strategy Discussion"
          thumbnail="/assets/samples/thumbnail (8).png"
          createdAt={new Date("2026-05-18")}
          userImg="/assets/images/jessica.png"
          username="jessica"
          views={67}
          visibility="public"
          duration={345}
        />
      </div>
    </div>
  )
}

export default page