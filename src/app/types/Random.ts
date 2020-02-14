export class Random {
	public static getRandomInteger(minimum: number, maximum: number): number {
		minimum = Math.ceil(minimum);
		maximum = Math.floor(maximum);

		return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	}

	public static shuffle<T>(array: T[]): T[] {
		const newArray = array.slice();

		for (let outerIndex = newArray.length - 1; outerIndex > 0; outerIndex--) {
			const innerIndex = Math.floor(Math.random() * (outerIndex + 1));
			[newArray[outerIndex], newArray[innerIndex]] = [newArray[innerIndex], newArray[outerIndex]];
		}
		return newArray;
	}
}
