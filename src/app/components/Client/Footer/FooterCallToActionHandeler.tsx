'use client';
import React, { useRef } from 'react';
import Footer from './Footer';
import CallToAction from '../CallToAction/CallToAction';

const FooterCallToActionHandeler = () => {
	const footer = useRef<HTMLDivElement>(null);
	return (
		<>
			<CallToAction trigger={footer} />
			<div ref={footer}>
				<Footer />
			</div>
		</>
	);
};

export default FooterCallToActionHandeler;
