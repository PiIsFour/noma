import { some } from 'fp-ts/Option'
import { ga, verb } from '../../domain/sentence'
import { createFakeLessonRepo, NounGaVerbLesson } from '../ports/fakeLessonRepo'
import { createFakeWordRepo, sakura, walk } from '../ports/fakeWordRepo'

import { getQuestion, Question } from './getQuestion'

describe('getQuestion', () => {
	it('returns さくらが歩く。', () => {
		const wordRepo = createFakeWordRepo([sakura, walk])
		const lessonRepo = createFakeLessonRepo([NounGaVerbLesson])

		expect(getQuestion(wordRepo)()).toEqual(some<Question>({
			kanji: 'さくらが歩く。',
			sentence: {
				parts: [ga(sakura)],
				end: verb(walk),
			},
		}))
	})
})
