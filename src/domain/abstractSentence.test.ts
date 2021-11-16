import { createFakeWordRepo, sakura, walk } from '../application/ports/fakeWordRepo'
import { NounGaVerbLesson } from '../application/ports/fakeLessonRepo'
import { some } from 'fp-ts/lib/Option'

import { calculateConcreteSentence } from './abstractSentence'
import { ga, verb } from './sentence'

describe('calculateConcreteSentence', () => {
	it('can fill in the words of a [noun]が[verb] sentence', () => {
		const wordRepo = createFakeWordRepo([sakura, walk])
		const abstractSentence = NounGaVerbLesson.sentence

		expect(calculateConcreteSentence(wordRepo)(abstractSentence)).toEqual(some({
			parts: [ga(sakura)],
			end: verb(walk),
		}))
	})
})
