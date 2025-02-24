import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Social from '@/components/shared-component/Social';
import Photo from '@/components/shared-component/Photo';
import Stats from '@/components/shared-component/Stats';

export default function Home() {
  return (
    <section className='full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
              <span>Software Developer </span>
              <h1 className='h1 mb-6'>
                Hello I'm <br /> <span className='text-accent-hover'>Sonam Phuntsho</span> </h1>
              <p className='max-w-[500px] mb-9 text-white/80'>
                  To be dedicated to my profession and to carry out my duties with the utmost care, sincerity and to show self-initiative in
                  discharging routine responsibilities productively.
              </p>
              {/* Btn and social media */}
              <div className='flex flex-col xl:flex-row items-center gap-8'>
                  <Button variant='outline' size='lg' className='uppercase flex items-center'>
                    <span>Get CV</span>
                    <FiDownload className='text-xl ml-2' />
                  </Button>
                  <div className='mb-8 xl:mb-0'>
                    <Social containerStyles={'flex gap-6'} 
                      iconStyles='w-9 h-9 border border-accent-hover rounded-full flex justify-center items-center
                      text-accent-hover text-base hover:bg-accent-hover hover:text-primary 
                      hover:transition-all duration-500' />
                  </div>
              </div>
          </div>
          
          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
