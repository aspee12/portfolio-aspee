'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname();

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
    
    return(
        <nav className='flex gap-8'>
            {links.map((link, index) => {
                return (
                <Link href={link.path} key={index} className={`${link.path === pathname && 'text-accent-hover border-b-2 border-accent-hover'}
                capitalize font-medium hover:text-accent-hover transition-all`}>
                    {link.name}
                </Link>
                );
            })}
        </nav>
    )
}