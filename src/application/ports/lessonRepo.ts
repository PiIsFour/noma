import { AbstractSentence } from '../../domain/abstractSentence'

interface LessonBase {
	id: number
	level: number
}

export interface StandAloneLesson extends LessonBase {
	type: 'StandAloneLesson'
	sentence: AbstractSentence
}

export type Lesson = (StandAloneLesson)

export interface LessonRepo {
	getLessons(): Array<Lesson>
}
