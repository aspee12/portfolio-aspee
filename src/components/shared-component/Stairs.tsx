import { animate, motion } from 'framer-motion'

export default function Stairs() {
    //variants
    const stairAnimation = {
        initial: {
            top: '0%'
        },
        animate: {
            top: '100%'
        },
        exit: {
            top: ['100%', '0%']
        }
    }

    const reverseIndex = (index: number) => {
        const totalSteps = 6;  // number of steps 
        return totalSteps - index -1;
    }

    return (
        <>
        {/* render 6 motion divs, each representing a step of the stairs.
            Each div have same animation defined by stairsAnimation object. 
            The delay for each div calculated sinamically based on it reserved index

         */}
        {[...Array(6)].map((_, index) => {
            return(
                <motion.div key={index} variants={stairAnimation} initial='initial'
                animate='animate' exit='exit' 
                transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                    delay: reverseIndex(index) * 0.1
                }} 
                className='h-full w-full bg-white relative' />
            )
        })}   
       </>  
    )
}