import React from 'react';
import FaqData from '@/Lib/FAQs/Faqs.json';
import FaqComponent from './FaqComponent';

export default function Faqs() {
	return (
		<div className='flex flex-col gap-4 md:gap-6 5xl:gap-12 '>
			{FaqData.map((faq) => {
				const { id, question, answer } = faq;
				return (
					<React.Fragment key={id}>
						<FaqComponent question={question} answer={answer} />
					</React.Fragment>
				);
			})}
		</div>
	);
}
