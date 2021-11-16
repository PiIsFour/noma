import { AbstractWord } from '../../domain/abstractSentence'
import { ga, iAdj, verb } from '../../domain/sentence'
import { PartsOfSpeech } from '../../domain/word'
import { Lesson, LessonRepo } from './lessonRepo'

const lessons: Lesson[] = []

export const fakeLessonRepo: LessonRepo = {
	getLessons: () => lessons,
}

export const createFakeLessonRepo = (lessons: Lesson[]): LessonRepo => ({
	getLessons: () => lessons,
})

const addLesson = (lesson: Omit<Lesson, 'id' | 'level'>): Lesson => {
	const newLesson = {
		...lesson,
		level: 0,
		id: lessons.length + 1,
	}
	lessons.push(newLesson)
	return newLesson
}

const aNoun: AbstractWord = {
	conditions: [PoS => PoS.includes(PartsOfSpeech.noun)],
}

const aVerb: AbstractWord = {
	conditions: [PoS => PoS.includes(PartsOfSpeech.verb)],
}

const aIAdj: AbstractWord = {
	conditions: [PoS => PoS.includes(PartsOfSpeech.iAdj)],
}

export const NounGaVerbLesson = addLesson({
	type: 'StandAloneLesson',
	sentence: {
		parts: [ga(aNoun)],
		end: verb(aVerb),
	},
})

export const NounGaIAdjLesson = addLesson({
	type: 'StandAloneLesson',
	sentence: {
		parts: [ga(aNoun)],
		end: iAdj(aIAdj),
	},
})
