import { pipe } from 'fp-ts/function'
import { ap, Option, some } from 'fp-ts/Option'
import { CarriageType, EngineType, Sentence } from '../../domain/sentence'
import { PartsOfSpeech, Word } from '../../domain/word'
import { WordRepo } from '../ports/wordsRepo'

export interface Question {
	kanji: string,
	sentence: Sentence
}

export const getQuestion = (wordRepo: WordRepo) => (): Option<Question> => {
	return pipe(
		some((sakura: Word) => (walk: Word): Question => ({
			kanji: 'さくらが歩く。',
			sentence: {
				parts: [
					{
						type: CarriageType.ga,
						word: sakura,
					},
				],
				end: {
					type: EngineType.verb,
					word: walk,
				},
			},
		})),
		ap(wordRepo.getWord(part => part.includes(PartsOfSpeech.noun))),
		ap(wordRepo.getWord(part => part.includes(PartsOfSpeech.verb))),
	)
}
