'use client';

import {motion} from 'framer-motion';
import React, { useState } from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function WorkPage() {
    const projects = [
        {
            num: '01',
            category: 'frontend',
            title: 'project 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magname modi.',
            stack: [{name: 'HTML 5'}, {name: 'Css 3'}, {name: 'Javascript'}],
            image: 'https://cdn.pixabay.com/photo/2022/07/31/04/42/seat-7354939_1280.png',
            live: '',
            github: ''
        },
        {
            num: '02',
            category: 'fullstack',
            title: 'Course Management',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magname modi.',
            stack: [{name: 'HTML 5'}, {name: 'Css 3'}, {name: 'Javascript'}],
            image: 'https://cdn.pixabay.com/photo/2022/03/16/09/19/virtual-7071998_1280.png',
            live: '',
            github: ''
        },
        {
            num: '03',
            category: 'fullstack',
            title: 'Online Voting',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magname modi.',
            stack: [{name: 'HTML 5'}, {name: 'Css 3'}, {name: 'Javascript'}],
            image: 'https://cdn.pixabay.com/photo/2022/03/16/09/19/virtual-7071998_1280.png',
            live: '',
            github: ''
        }
        
    ];

    const [project, setProjects] = useState(projects[0]);

    return (
        <motion.div initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
            <div className='container mx-auto'>
                <div className='flex flex-con xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px]'>
                            {/* Outline num */}
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className='text-[42px] font-bold leading-none text-white 
                                group-hover:text-accent-hover transition-all duration-500 capitalize'>
                                {project.category} Project
                            </h2>
                            {/* Project description */}
                            <p className='text-white/60'> {project.description}</p>

                            {/* stack */}
                            <ul className='flex gap-4'>
                                {project.stack.map((item, index) => (
                                    <li key={index} className='text-xl text-accent-hover'>
                                        {item.name}
                                        {/* remove the last coma */}
                                        {index !== project.stack.length - 1 && ','}
                                    </li>
                                ))}
                            </ul>
                            {/* border */}
                            <div className='border border-white/20'></div>
                            {/* buttons */}
                            <div className='flex items-center gap-4'>
                                {/* live project button*/}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex 
                                                justify-center items-center group'>
                                                <BsArrowUpRight className='text-white text-3xl group-hover:text-accent-hover' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github project button*/}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex 
                                                justify-center items-center group'>
                                                <BsGithub className='text-white text-3xl group-hover:text-accent-hover' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        Slider
                    </div>
                </div>
            </div>
        </motion.div>
    )
}