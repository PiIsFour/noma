import { pipe } from 'fp-ts/function'
import { map, Option } from 'fp-ts/Option'
import { renderSentence, Sentence } from '../../domain/sentence'
import { LessonRepo } from '../ports/lessonRepo'
import { WordRepo } from '../ports/wordsRepo'
import { calculateConcreteSentence } from '../../domain/abstractSentence'

export interface Question {
	kanji: string,
	sentence: Sentence
}

export const getQuestion = (wordRepo: WordRepo, lessonRepo: LessonRepo) => (): Option<Question> => {
	return pipe(
		// TODO: select lesson in some way
		lessonRepo.getLessons()[0].sentence,
		calculateConcreteSentence(wordRepo),
		map(sentence => ({
			kanji: renderSentence(sentence),
			sentence,
		})),
	)
}
