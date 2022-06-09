import showdown from 'showdown';

export default function markdown2html (text: string) {
	const converter = new showdown.Converter();

	return converter.makeHtml(text);
};
