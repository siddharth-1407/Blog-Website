'use client';
import { MouseEvent } from 'react';
import { toast } from 'react-hot-toast';

export function handleBold(e: MouseEvent, textarea: HTMLTextAreaElement | null) {
	e.preventDefault();
	if (textarea) {
		const selectionStart = textarea.selectionStart;
		const selectionEnd = textarea.selectionEnd;
		const selectedText = textarea.value.slice(selectionStart, selectionEnd);
		textarea.setRangeText(`**${selectedText}**`, selectionStart, selectionEnd);
		textarea.setSelectionRange(selectionStart + 2, selectionEnd + 2);
		textarea.focus();
	} else {
		console.log('Error: Textarea not provided!');
		toast.error('Textarea not provided!');
	}
}
export function handleItalic(e: MouseEvent, textarea: HTMLTextAreaElement | null) {
	e.preventDefault();
	if (textarea) {
		const selectionStart = textarea.selectionStart;
		const selectionEnd = textarea.selectionEnd;
		const selectedText = textarea.value.slice(selectionStart, selectionEnd);
		textarea.setRangeText(`*${selectedText}*`, selectionStart, selectionEnd);
		textarea.setSelectionRange(selectionStart + 1, selectionEnd + 1);
		textarea.focus();
	} else {
		console.log('Error: Textarea not provided!');
		toast.error('Textarea not provided!');
	}
}
export function AddYoutubeVideo(textarea: HTMLTextAreaElement | null, id: string, dialog: HTMLDialogElement | null) {
	if (!id) return console.error('Video ID not provided!');
	if (!dialog) return console.error('Error: Dialog is undefined!');
	if (!textarea) {
		// if Textarea ref is empty then show error and return
		console.log('Error: Textarea not provided!');
		return toast.error('Textarea not provided!');
	} else {
		// if Textarea ref is valid, select the textarea string and replace it with custom component.
		const selectionStart = textarea.selectionStart;
		const selectionEnd = textarea.selectionEnd;
		textarea.setRangeText(`\n<YoutubeVideo id='${id}' />\n`, selectionStart, selectionEnd);
		const EndOfString = textarea.value.length;
		textarea.setSelectionRange(EndOfString, EndOfString, 'forward');
		dialog.close();
		textarea.focus();
	}
}
export function AddLink(textarea: HTMLTextAreaElement | null, values: { title: string; link: string }, dialog: HTMLDialogElement | null) {
	const { title, link } = values;
	if (!title || !link) return console.error('Required field not provided!');
	if (!dialog) return console.error('Error: Dialog is undefined!');
	if (!textarea) {
		// if Textarea ref is empty then show error and return
		console.log('Error: Textarea not provided!');
		return toast.error('Textarea not provided!');
	} else {
		// if Textarea ref is valid, select the textarea string and replace it with custom component.
		const selectionStart = textarea.selectionStart;
		const selectionEnd = textarea.selectionEnd;
		textarea.setRangeText(`<NormalLink title='${title}' link='${link}' />`, selectionStart, selectionEnd);
		const EndOfString = textarea.value.length;
		textarea.setSelectionRange(selectionStart, EndOfString, 'forward');
		dialog.close();
		textarea.focus();
	}
}
export function AddImage(
	textarea: HTMLTextAreaElement | null,
	values: { link: string; alt: string; type: 'full' | 'half' },
	dialog: HTMLDialogElement | null
) {
	const { link, alt, type } = values;
	if (!link || !alt || !type) return console.error('Required field not provided!');
	if (!dialog) return console.error('Error: Dialog is undefined!');
	if (!textarea) {
		// if Textarea ref is empty then show error and return
		console.log('Error: Textarea not provided!');
		return toast.error('Textarea not provided!');
	} else {
		// if Textarea ref is valid, select the textarea string and replace it with custom component.
		const selectionStart = textarea.selectionStart;
		const selectionEnd = textarea.selectionEnd;
		if (type === 'full') {
			textarea.setRangeText(`<ImageFull link='${link}' alt='${alt}' />`, selectionStart, selectionEnd);
		} else if (type === 'half') {
			textarea.setRangeText(`<ImageHalf link='${link}' alt='${alt}' />`, selectionStart, selectionEnd);
		} else {
			console.error('Error: invalid Image type');
		}
		const EndOfString = textarea.value.length;
		textarea.setSelectionRange(selectionStart, EndOfString, 'forward');
		dialog.close();
		textarea.focus();
	}
}
export function AddHeading(textarea: HTMLTextAreaElement | null, headingType: number) {
	if (!textarea) throw Error('Error: textarea is undefined!');
	if (!headingType) throw Error('Error: Required field not provided!');
	if (headingType > 6 || headingType < 1) throw Error('Error: Invalid Heading type');
	let prefix: string = '';
	let i = 0;
	do {
		if (i === headingType - 1) {
			prefix = prefix.concat('# ');
		} else {
			prefix = prefix.concat('#');
		}
		i++;
	} while (i < headingType);
	const selectionStart = textarea.selectionStart;
	const selectionEnd = selectionStart + headingType + 2;
	textarea.setRangeText(prefix, selectionStart, selectionStart);
	textarea.setSelectionRange(selectionEnd, selectionEnd, 'forward');
	textarea.focus();
}
export function HandleScroll(e: MouseEvent, textarea: HTMLTextAreaElement | null, direction: number) {
	e.preventDefault();
	if (textarea) {
		if (direction === -1) {
			return textarea.scrollTo({ top: 0, behavior: 'smooth' });
		} else if (direction === 1) {
			return textarea.scrollTo({ top: textarea.scrollHeight, behavior: 'smooth' });
		} else {
			return console.error('Error: Invalid directoin value, can either be 1 or -1');
		}
	}
	console.error('Error: textarea is undefined!');
}
