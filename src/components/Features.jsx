import { useGSAP } from '@gsap/react'
import React from 'react'
import { animateWithGsap } from '../utils/animations';
import { exploreVideo } from '../utils';
const Features = () => {
    useGSAP( ()=> {
        animateWithGsap('#features_title',{ y:0,opacity:1})
    },[]);
  return (
    <section className='h-full common-padding relative overflow-hidden'>
        <div className='screen-max-width'>
        <div className='mb-12 w-full'>
            <h1 className='section-heading'
            id='features_title' >Explore the Full Story.</h1>
        </div>
        <div className='flex flex-col justify-center items-center overflow-hidden'>
            <div className='mt-32 mb-24 pl-24'>
                <h2 className='text-5xl  lg:text-7xl font-semibold'>iPhone</h2>
                <h2 className='text-5xl  lg:text-7xl font-semibold'>Forged in titanium.</h2>
            </div>

            <div className='flex-center flex-col sm:px-10'>
                <div className='relative h-[50vh] w-full flex items-center'>
                    <video playsInline id="exploreVideo" className='w-full h-full object-cover object-center' preload="none" muted autoPlay>
                        <source  src={exploreVideo} type="video/mp4" />
                    </video>
                </div>

            </div>
        </div>

        </div>
        </section>
  )
}

export default Features