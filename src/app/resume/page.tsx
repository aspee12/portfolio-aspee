'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaJs, FaReact, FaAngular, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Resume() {
    const about = {
        title: 'About Me',
        description: 'To be dedicated to my profession and to carry out my duties with the utmost care, sincerity and to show self-initiative in discharging routine responsibilities productively.',
        info: [
            {
                fieldName: 'Name',
                fieldValue: 'Sonam Phuntsho'
            },
            {
                fieldName: 'Phone',
                fieldValue: '+9751768626'
            },
            {
                fieldName: 'Experience',
                fieldValue: '3+ Years'
            },
            {
                fieldName: 'Sktype',
                fieldValue: 'sonam.01'
            },
            {
                fieldName: 'Nationality',
                fieldValue: 'Bhutanese'
            },
            {
                fieldName: 'Email',
                fieldValue: 'sphuntsho900@gmail.com'
            },
            {
                fieldName: 'Freelance',
                fieldValue: 'Available'
            },
            {
                fieldName: 'Language',
                fieldValue: 'English, Dzongkha'
            }
        ]
    }

    // experience data
    const experience = {
        icons: '/assets/resume/badge.svg',
        title: 'My experience',
        description: 'To be dedicated to my profession and to carry out my duties with the utmost care, sincerity and to show self-initiative in discharging routine responsibilities productively.',
        items: [
            {
                company: 'Selise Degital Plageform',
                position: 'Font End Developer',
                duration: '2022 - Present'
            },
            {
                company: 'Refruit Singapour',
                position: 'Developer',
                duration: 'Part-Timer'
            },
            {
                company: 'iDruk Companin',
                position: 'Software Developer',
                duration: 'freelancer'
            },
            {
                company: 'iDruk Companin',
                position: 'Software Developer',
                duration: 'freelancer'
            },
            {
                company: 'iDruk Companin',
                position: 'Software Developer',
                duration: 'freelancer'
            },
            {
                company: 'iDruk Companin',
                position: 'Software Developer',
                duration: 'freelancer'
            },
            {
                company: 'iDruk Companin',
                position: 'Software Developer',
                duration: 'freelancer'
            }
        ]
    }

    const education = {
        icons: '/assets/resume/cap.svg',
        title: 'My Education',
        description: 'To be dedicated to my profession and to carry out my duties with the utmost care, sincerity and to show self-initiative in discharging routine responsibilities productively.',
        items: [
            {
                institution: 'Gyalpozhing College of Information Techonology',
                course: 'Bacholor of Computer Application',
                duration: '2018 - 2021'
            },
            {
                institution: 'Python Programming',
                course: 'RIM ',
                duration: '2021 - 2021'
            },
            {
                institution: 'Online Course',
                course: 'Programming Course',
                duration: '2022'
            },
            {
                institution: 'Google Coursera',
                course: 'Fornt-end development',
                duration: '2024'
            }
        ]
    }

    const skills = {
        title: 'My skills',
        description: 'To be dedicated to my profession and to carry out my duties with the utmost care, sincerity and to show self-initiative in discharging routine responsibilities productively.',
        skillList: [
            {
                icon: <FaHtml5 />,
                name: 'html 5'
            },
            {
                icon: <FaCss3 />,
                name: 'css 3'
            },
            {
                icon: <FaJs />,
                name: 'javascript'
            },
            {
                icon: <FaAngular />,
                name: 'angular'
            },
            {
                icon: <FaReact />,
                name: 'react.js'
            },
            {
                icon: <SiNextdotjs />,
                name: 'next.js'
            },
            {
                icon: <SiTailwindcss />,
                name: 'tailwind.css'
            },
            {
                icon: <FaNodeJs />,
                name: 'node.js'
            }
        ]
    }

    return (
       <motion.div initial={{opacity: 0}} 
            animate={{
                    opacity: 1,
                    transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
                }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
            <div className='container mx-auto'>
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex- flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='experience'>Experience</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about'>About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((data, index) =>{
                                            return(
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent-hover'>{data.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{data.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent-hover'></span>
                                                        <p className='text-white/60'>{data.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value='education' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) =>{
                                            return(
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span className='text-accent-hover'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.course}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent-hover'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value='skills' className='w-full h-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                               <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl group-hover:text-accent-hover'>
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                               </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* about me */}
                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {about.description}
                                </p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) =>{
                                        return(
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='text-xl'>{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
       </motion.div>
    )
}