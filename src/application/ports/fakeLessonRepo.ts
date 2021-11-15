import { CarriageType, EngineType } from '../../domain/sentence'
import { PartsOfSpeech } from '../../domain/word'
import { Lesson, LessonRepo } from './lessonRepo'

const lessons: Lesson[] = []

export const fakeLessonRepo: LessonRepo = {
	getLessons: () => lessons,
}

const addLesson = (lesson: Omit<Lesson, 'id' | 'level'>): Lesson => {
	const newLesson = {
		...lesson,
		level: 0,
		id: lessons.length + 1,
	}
	lessons.push(newLesson)
	return newLesson
}

addLesson({
	type: 'StandAloneLesson',
	sentence: {
		parts: [
			{
				type: CarriageType.ga,
				word: {
					conditions: [(PoS) => PoS.includes(PartsOfSpeech.noun)],
				},
			},
		],
		end: {
			type: EngineType.verb,
			word: {
				conditions: [PoS => PoS.includes(PartsOfSpeech.verb)],
			},
		},
	},
})
