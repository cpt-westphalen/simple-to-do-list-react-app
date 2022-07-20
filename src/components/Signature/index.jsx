export default function Signature() {
	const styling = {
		margin: '5rem auto 2rem auto',
		color: '#AAAAAA',
		fontSize: 'small',
		fontFamily: 'monospace',
	};

	return (
		<div style={styling}>
			Simple To-Do App @ by{' '}
			<a href="https://github.com/cpt-westphalen">cpt-westphalen</a>
		</div>
	);
}
