import React from 'react';
import PrivacyPolicyData from '@/Lib/PrivacyPolicy/privacyPolicy.json';
import PrivacyPolicy from './PrivacyPolicy';

export default function PrivacyPolicyWrapper() {
	return (
		<div className='flex flex-col gap-4 5xl:gap-12'>
			{PrivacyPolicyData.map((policy) => {
				const { id, heading, content } = policy;
				return (
					<React.Fragment key={id}>
						<PrivacyPolicy heading={heading} context={content} />
					</React.Fragment>
				);
			})}
		</div>
	);
}
