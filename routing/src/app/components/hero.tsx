import React from 'react'
import SceneImage from 'public/pexels-pamanjoe-19577082.jpg'
import Image from 'next/image'

const HeroPage = () => {
    return (
        <div className='relative h-screen'>
            <div className='absolute inset-0 -z-10'>
                <Image
                    src={SceneImage}
                    fill
                    alt='Scene'
                    style={{ objectFit: 'cover' }}
                />
                <div className='absolute inset-0 bg-gradient-to-r from-slate-700'/>
            </div>
            <div className='flex justify-center pt-24'>
                <h1 className='font-bold text-6xl'>Scenery</h1>
            </div>
        </div>
    )
}

export default HeroPage