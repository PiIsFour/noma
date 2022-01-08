import { randomItemFromArray } from './rngUtil'

describe('random item from array', () => {
	it('pick the one item', () => {
		const rng = () => 0
		expect(randomItemFromArray(rng)(['single item'])).toBe('single item')
	})

	it('pick the first item if rng is low', () => {
		const rng = () => 0
		const array = ['first item', 'last item']
		expect(randomItemFromArray(rng)(array)).toBe('first item')
	})

	it('pick the last item if rng is high', () => {
		const rng = () => .99
		const array = ['first item', 'last item']
		expect(randomItemFromArray(rng)(array)).toBe('last item')
	})
})
