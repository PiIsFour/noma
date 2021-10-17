import { pipe } from 'fp-ts/function'
import { ap, Option, some } from 'fp-ts/Option'
import { CarriageType, Sentence } from '../../domain/sentence'
import { Word } from '../../domain/word'
import { WordRepo } from '../ports/wordsRepo'

interface Question {
	kanji: string,
	sentence: Sentence
}

export const getQuestion = (wordRepo: WordRepo) => (): Option<Question> => {
	return pipe(
		some((sakura: Word) => ({
			kanji: 'さくらが歩く。',
			sentence: {
				parts: [
					{
						type: CarriageType.ga,
						word: sakura,
					},
				],
			},
		})),
		ap(wordRepo.getWord(() => true)),
	)
}
