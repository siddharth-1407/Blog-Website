import { filterProjects } from '../../../type';

type FilterCategory = {
	title: string;
	filter: filterProjects;
	id: number;
};
const categories: FilterCategory[] = [
	{ title: 'All', filter: null, id: 0 },
	{ title: 'Game dev', filter: 'game-dev', id: 1 },
	{ title: 'Design', filter: 'design', id: 2 },
	{ title: 'Marketing', filter: 'marketing', id: 3 },
];
export default categories