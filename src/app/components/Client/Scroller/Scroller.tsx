'use client';
import React from 'react';
import { motion, useScroll } from 'framer-motion';

const Scroller = () => {
	const { scrollYProgress } = useScroll({ offset: ['start start', 'end end'] });
	return <motion.div className='bg-[#ff0055] origin-left top-0 left-0 w fixed w-full h-1 z-40' style={{ scaleX: scrollYProgress }}></motion.div>;
};

export default Scroller;
