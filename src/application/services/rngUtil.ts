import { RngSource } from '../ports/rngSource'

export const randomItemFromArray = (rng: RngSource) => <T>(array: T[]): T => {
	const index = Math.floor(rng() * array.length)
	return array[index]
}
