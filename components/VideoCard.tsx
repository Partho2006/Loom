"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const VideoCard = ({
    id, title, thumbnail, userImg, username, createdAt, views, visibility, duration
}: VideoCardProps) => {
    return (
        <Link href={`/video/${id}`} className="video-card max-w-[350px]">
            <Image
                src={thumbnail}
                alt="thumbnail"
                width={300}
                height={160}
                className="w-full h-[160px] object-cover rounded-lg"
            />        <article>
                <div>
                    <figure>
                        <Image src={userImg} alt="avatar" width={34} height={34} className="rounded-full aspect-square" />
                        <figcaption>
                            <h3>{username}</h3>
                            <p>{visibility}</p>
                        </figcaption>
                        <aside>
                            <Image src="/assets/icons/eye.svg" alt="views" width={16} height={16} />
                            <span>{views}</span>
                        </aside>
                    </figure>
                </div>
                <h2>
                    {title}-{" "} {createdAt.toLocaleDateString("en-In", {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                    })}
                </h2>
            </article>

            <button onClick={() => { }} className='copy-btn'>
                <Image src="/assets/icons/link.svg" alt="copy" width={18} height={18} />
            </button>
            {duration && (
                <div className="duration">
                    {Math.ceil(duration / 60)}min
                </div>
            )}
        </Link>
    )
}

export default VideoCard