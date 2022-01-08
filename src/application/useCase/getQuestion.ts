import { pipe } from 'fp-ts/function'
import { map, Option } from 'fp-ts/Option'
import { renderSentence, Sentence } from '../../domain/sentence'
import { LessonRepo } from '../ports/lessonRepo'
import { WordRepo } from '../ports/wordsRepo'
import { calculateConcreteSentence } from '../../domain/abstractSentence'
import { randomItemFromArray } from '../services/rngUtil'

export interface Question {
	kanji: string,
	sentence: Sentence
}

const randomItem = randomItemFromArray(Math.random)

export const getQuestion = (wordRepo: WordRepo, lessonRepo: LessonRepo) => (): Option<Question> => {
	return pipe(
		// TODO: select lesson in some balanced way
		lessonRepo.getLessons(),
		randomItem,
		(lesson) => lesson.sentence,
		calculateConcreteSentence(wordRepo),
		map(sentence => ({
			kanji: renderSentence(sentence),
			sentence,
		})),
	)
}
