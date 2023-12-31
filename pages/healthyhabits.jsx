import Image from 'next/image';
import React from 'react';
import healthyImg from '../public/assets/projects/healthy_habits.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={healthyImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-[#BB86FC] z-10 p-2'>
          <h2 className='py-2'>Healthy Habits</h2>
          <h3>Reflex / OpenCV / HumeAI</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Healthy Habits was a project developed by 3 colleagues and I for CalHack 10.0. Our project was a web app that was meant to be run in people&#39;s 
            background as they worked. The goal was to create a tool that would help students and workers who spend prolonged periods of time on the computer 
            better manage when they should take breaks. We would take in facial data through their webcam with OpenCV and would send this data through HumeAI&#39;s API to 
            get different scores for each emotions. If certain emotions were too high for prolonged periods of time, we would notify the user and suggest them
            to take a break. We also included a feature for users to email themselves either the raw data from each session or a report that was generated through
            processing their data through OpenAI&#39;s LLM. My responsibility was to develop the computer vision portion as well as a majority of the backend to ensure the
            data was properly collected and processed. I also assisted with some of the front-end as well with webcam integration and formatting.
          </p>
          <a
            href='https://github.com/jspnguyen/HealthyHabits'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 shadow-[#BB86FC] text-[#03DAC6] hover:scale-105 ease-in duration-300'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-[#BB86FC] rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Reflex
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenCV
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HumeAI API
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenAI API
              </p>
              <p className='text-[#BB86FC] py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Smtplib 
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
