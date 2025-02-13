import Link from 'next/link';
import Nav from './Nav';
import { Button } from '../ui/button';

export default function Header() {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href='/'>
                    <h1 className='text-4xl font-semibold font-primary'>
                        Sonam<span className='text-accent-hover'>.</span>
                    </h1>
                </Link>

                {/* Desktop Nav & hire me button*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href={'/contact'}>
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">mobile nav</div>
            </div>
        </header>
    )
}