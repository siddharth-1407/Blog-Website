import WorkProjectLayout from '@/app/components/Client/WorkProjectLayout/WorkProjectLayout';
import React from 'react';
import projects from '@/Lib/Projects';
import { Project } from '../../../../../../type';

const page = async ({ params }: { params: { slug: string } }) => {
	const slug = params.slug;
	const AllProjects: Project[] = projects.filter((project) => project.link === `/${slug}`);
	let data: Project;
	if (AllProjects.length > 0) {
		data = AllProjects[0];
	} else {
	}
	return (
		<main className='w-full min-h-screen mt-24 md:mt-0 py-6 sm:py-12 md:py-16 md:pt-8 lg:pt-0 xl:py-12 xl:pt-0 flex-1 flex flex-col gap-16 md:gap-24'>
			<WorkProjectLayout data={data!} />
		</main>
	);
};

export default page;
