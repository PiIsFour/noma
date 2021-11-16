import { cute, sakura } from '../application/ports/fakeWordRepo'
import { ga, iAdj, Sentence } from './sentence'

import { renderSentence } from './sentence'

describe('renderSentence', () => {
	it('renders simple sentence', () => {
		const sentence: Sentence = {
			parts: [ga(sakura)],
			end: iAdj(cute),
		}
		expect(renderSentence(sentence)).toEqual('さくらが可愛い。')
	})
})
