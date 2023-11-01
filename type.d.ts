import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type BlogPost = {
	_id?: string;
	slug: string;
	date: string;
	title: string;
	desc: string;
	markdown: string;
	imageMain: string;
	author?: string;
	tags?: string[];
	keywords?: string[];
	og_type?: string;
};

type BlogPostCard = {
	_id: string;
	slug: string;
	date: string;
	title: string;
	desc: string;
	imageMain: string;
	keywords?: string[];
};

type BlogFormInitialValuesType = {
	slug: string;
	title: string;
	desc: string;
	imageMain: string;
	tags: string | undefined;
	keywords: string | undefined;
	author: string | undefined;
	markdown: string;
};

type ImageSize = 'full' | 'contained';

type WorkImage = {
	src: StaticImport | string;
	alt: string;
	type: ImageSize;
};

type WorkSliderImage = {
	id: number;
	src: StaticImport | string;
	alt: string;
};

type Project = {
	id: number;
	title: string;
	link: string;
	filter: filterProjects[];
	description: string;
	card_Image: StaticImport | string;
	tags: string[];
	keywords: string[];
	content: ProjectContent;
};

type ProjectContent = {
	heroImage: StaticImport | string;
	sections: ProjectContent_Section[];
	images: WorkSliderImage[];
};

type ProjectContent_Section = {
	id: number;
	title: string;
	content: string;
	images: WorkImage[];
	index?: number;
};
type filterProjects = 'game-dev' | 'design' | 'marketing' | null;
