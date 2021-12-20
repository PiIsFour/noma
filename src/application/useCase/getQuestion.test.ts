import { some } from 'fp-ts/Option'
import { ga, iAdj, verb } from '../../domain/sentence'
import { createFakeLessonRepo, NounGaIAdjLesson, NounGaVerbLesson } from '../ports/fakeLessonRepo'
import { createFakeWordRepo, cute, sakura, walk } from '../ports/fakeWordRepo'

import { getQuestion, Question } from './getQuestion'

describe('getQuestion', () => {
	it('returns さくらが歩く', () => {
		const wordRepo = createFakeWordRepo([sakura, walk])
		const lessonRepo = createFakeLessonRepo([NounGaVerbLesson])

		expect(getQuestion(wordRepo, lessonRepo)()).toEqual(some<Question>({
			kanji: 'さくらが歩く',
			sentence: {
				parts: [ga(sakura)],
				end: verb(walk),
			},
		}))
	})

	it('returns さくらが可愛い', () => {
		const wordRepo = createFakeWordRepo([sakura, cute])
		const lessonRepo = createFakeLessonRepo([NounGaIAdjLesson])

		expect(getQuestion(wordRepo, lessonRepo)()).toEqual(some<Question>({
			kanji: 'さくらが可愛い',
			sentence: {
				parts: [ga(sakura)],
				end: iAdj(cute),
			},
		}))
	})
})
