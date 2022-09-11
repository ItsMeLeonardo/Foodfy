export function classMap(classObj: { [k: string]: boolean }): string {
	return Object.entries(classObj)
		.filter(([name, value]) => name !== '' && value)
		.map(([name]) => name)
		.join(' ')
}
