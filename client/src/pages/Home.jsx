import {motion , AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';
 
import state from '../store';

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
                        LET'S <br className='xl:block hidden'/> DO  IT.
                     </h1>

                   </motion.div>
                </motion.div>

            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home
