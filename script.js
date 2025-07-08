const theme = document.getElementById('theme');

const saved = localStorage.getItem('lightMode');
const isLightMode = saved === 'true';

theme.checked = isLightMode;

function applyTheme(isLight) {
	if (isLight) {
		document.documentElement.style.setProperty('--mantle', '#FFFBEF');
		document.documentElement.style.setProperty('--foreground', '#1e2326');
		document.documentElement.style.setProperty('--crust', '#F2EFDF');
		document.documentElement.style.setProperty('--mauve', '#8DA101');
	} else {
		document.documentElement.style.setProperty('--mantle', '#272e33');
		document.documentElement.style.setProperty('--foreground', '#d3c6aa');
		document.documentElement.style.setProperty('--crust', '#1e2326');
		document.documentElement.style.setProperty('--mauve', '#a7c080');
	}
}

applyTheme(isLightMode);

theme.addEventListener('change', () => {
	localStorage.setItem('lightMode', theme.checked ? 'true' : 'false');
	applyTheme(theme.checked);
});

