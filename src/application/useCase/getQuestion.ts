import { pipe } from 'fp-ts/function'
import { ap, Option, some } from 'fp-ts/Option'
import { ga, Sentence, verb } from '../../domain/sentence'
import { PartsOfSpeech, Word } from '../../domain/word'
import { WordRepo } from '../ports/wordsRepo'

export interface Question {
	kanji: string,
	sentence: Sentence
}

export const getQuestion = (wordRepo: WordRepo) => (): Option<Question> => {
	return pipe(
		some((noun: Word) => (v: Word): Question => ({
			kanji: 'さくらが歩く。',
			sentence: {
				parts: [ga(noun)],
				end: verb(v),
			},
		})),
		ap(wordRepo.getWord(part => part.includes(PartsOfSpeech.noun))),
		ap(wordRepo.getWord(part => part.includes(PartsOfSpeech.verb))),
	)
}
