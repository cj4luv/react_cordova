import { injectGlobal } from 'styled-components';

injectGlobal`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	div, ul, li h1, h2, h3, h4, button {
		box-sizing:border-box;
	}
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section, label {
		display: block;
	}
	body {
		line-height: 1;
		font-size:14px;
	}
	html {
		font-family: 'Noto Sans', sans-serif;
	}
	li {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	::-webkit-scrollbar {
	    display: none;
	}
	button {
		appearance:none;
	  background-color:transparent;
	  border:none;
	}
`;
