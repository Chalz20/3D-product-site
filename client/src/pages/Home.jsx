import {motion , AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';
 
import state from '../store';
import { CustomButton } from '../components';

export const Home = () => {
  const snap = useSnapshot(state);
    
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img 
                     src='./threejs.png'
                     alt='logo'
                     className='w-8 h-8 object-contain'
                    />
                </motion.header>

                <motion.div className='home-content' {...headContainerAnimation}>
                   <motion.div {...headTextAnimation}>
                     <h1 className='head-text'>
                        eXpress <br className='xl:block hidden'/> YoU.
                     </h1>

                   </motion.div>

                   <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                    <p className='max-w-md font-normal text-gray-600 text-base'>
                      Create your own unique and exclusive shirt with our brand new 3D customization tool. <strong> Unleash your imagination</strong>{" "} and define your style.
                    </p>

                    <CustomButton
                     type="filled"
                     title="Customize your shirt"
                     handleClick={()=> state.intro = false}
                     customStyles="w-fit px-5 py-2.5 font-bold font-sm"
                    >

                    </CustomButton>
                   </motion.div>
                </motion.div>

            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home
