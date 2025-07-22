import React from 'react'
import meter from '../assets/icons/meter.svg'
import meterRange from '../assets/icons/meter-range.svg'
import inner from '../assets/icons/inner.svg'
import meterCircle from '../assets/icons/meter-circle.svg'
import meterNeedle from '../assets/icons/meter-needle.svg'

const Meter = ({score=0}) => {
  
  return (
    <div className='bg-gradient-to-br from-gradient-left to-gradient-right w-full h-64 rounded-lg'>
        <div className='relative'>
            <div className='relative'>
                <div className='relative flex justify-center items-center pt-2 z-10'>
                    <img src={meter} alt="Meter Image" className='w-60 h-60 object-contain '/>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-1 mt-3'>
                        <img src={inner} alt="inner" className='w-[150px] h-[150px] object-contain z-20' />
                    </div>
                </div>
                <div className='absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 ml-1 mt-1'>
                    <img src={meterRange} alt="range" className='w-[200px] h-[200px] object-contain'/>
                </div>
            </div>
            <div className='absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 h-24 w-24 flex flex-col justify-center items-center gap-1 ml-1 mt-2'>
                <div>
                    <img src={meterNeedle} alt="needle" />
                </div>
                <div className='flex flex-col gap-0 items-center'>
                    <p className='text-xxs text-gray-500 mb-0'>My Credit Score</p>
                    <p className='text-3xl font-bold mb-0'>{score}%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Meter