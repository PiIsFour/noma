import { fromNullable, some } from 'fp-ts/Option'
import { PartsOfSpeech, Word } from '../../domain/word'
import { WordRepo } from '../ports/wordsRepo'

import { getQuestion } from './getQuestion'

describe('getQuestion', () => {
	it('returns さくらが歩く。', () => {
		const sakura: Word = {
			hiragana: 'さくら',
			kanji: 'さくら',
			translation: 'sakura',
			partsOfSpeech: [PartsOfSpeech.noun],
		}
		const walk: Word = {
			hiragana: 'あるく',
			kanji: '歩く',
			translation: 'walk',
			partsOfSpeech: [PartsOfSpeech.verb],
		}
		const wordRepoMock: WordRepo = {
			getWord: jest.fn(filter => fromNullable([sakura, walk].find(w => filter(w.partsOfSpeech)))),
		}
		expect(getQuestion(wordRepoMock)()).toEqual(some({
			kanji: 'さくらが歩く。',
			sentence: {
				parts: [
					{
						type: 'ga',
						word: sakura,
					},
				],
			},
		}))
	})
})
