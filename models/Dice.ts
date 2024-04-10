export default class Dice {
	constructor() {}

	private throw(faces: number) {
		return Math.floor(Math.random() * faces) + 1;
	}

	public roll(command: string) {
		const c = command.toLowerCase().split('d');
		const throws: number[] = [];

		for (let i = 0; i < (isNaN(parseInt(c[0])) ? 1 : parseInt(c[0])); i++) {
			throws.push(this.throw(parseInt(c[1])));
		}

		return { throws: throws, total: throws.reduce((acc, cur) => acc + cur, 0) };
	}
}
