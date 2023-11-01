'use client';
import type { Metadata } from 'next';

export default function NotFound() {
	return <h1>Requested post does not exist!</h1>;
}
export const metadata: Metadata = {
	title: '404 Not Bound',
	description: '404 REquest blog does not exist',
};
