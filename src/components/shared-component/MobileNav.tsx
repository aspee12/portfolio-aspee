'use client';

import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import {CiMenuFries} from 'react-icons/ci'
import Link from 'next/link';

export default function MobileNav() {
    const links = [
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'services',
            path: '/services'
        }, 
        {
            name: 'resume',
            path: '/resume'
        }, 
        {
            name: 'work',
            path: '/work'
        },
        {
            name: 'contact',
            path: '/contact'
        }
    ];

    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent-hover' />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                {/* Logo */}
                <div>logo</div>
                {/* nav */}
                <div className='mt-32 mb-40 text-center text-2xl'>

                </div>
                <nav className='flex flex-col justify-center items-center gap-8'>
                    {links.map((link, index) =>{
                        return (
                        <Link href={link.path} key={index} className={`${link.path === pathname && 'text-accent-hover border-b-2 border-accent-hover'} 
                            text-xl capitalize hover:text-accent-hover transition-all`}>
                            {link.name}
                        </Link>)
                    } )}
                </nav>
            </SheetContent>
        </Sheet>
    )
}