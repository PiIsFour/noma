import { getQuestion } from './getQuestion'

describe('getQuestion', () => {
	it('returns さくらが歩く。', () => {
		expect(getQuestion()).toEqual('さくらが歩く。')
	})
})
