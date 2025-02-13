import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className='container mx-auto'>
                <Link href='/'>
                    <h1 className='text-4xl font-semibold font-primary'>
                        Sonam<span className='text-accent-hover'>.</span>
                    </h1>
                </Link>
                <Nav />
            </div>
        </header>
    )
}