import { pipe } from 'fp-ts/function'
import { fromNullable } from 'fp-ts/Option'
import { PartsOfSpeech, Word } from '../../domain/word'
import { randomItemFromArray } from '../services/rngUtil'
import { WordRepo } from './wordsRepo'

export const sakura: Word = {
	hiragana: 'さくら',
	kanji: 'さくら',
	translation: 'sakura',
	partsOfSpeech: [PartsOfSpeech.noun],
}
export const shop: Word = {
	hiragana: 'みせ',
	kanji: '店',
	translation: 'shop',
	partsOfSpeech: [PartsOfSpeech.noun],
}
export const movie: Word = {
	hiragana: 'えいが',
	kanji: '映画',
	translation: 'movie',
	partsOfSpeech: [PartsOfSpeech.noun],
}
export const bathroom: Word = {
	hiragana: 'といれ',
	kanji: 'トイレ',
	translation: 'bathroom',
	partsOfSpeech: [PartsOfSpeech.noun],
}
const nouns = [sakura, shop, movie, bathroom]

export const walk: Word = {
	hiragana: 'あるく',
	kanji: '歩く',
	translation: 'walk',
	partsOfSpeech: [PartsOfSpeech.verb],
}
export const eat: Word = {
	hiragana: 'たべる',
	kanji: '食べる',
	translation: 'eat',
	partsOfSpeech: [PartsOfSpeech.verb],
}
export const see: Word = {
	hiragana: 'みる',
	kanji: '見る',
	translation: 'see',
	partsOfSpeech: [PartsOfSpeech.verb],
}
export const say: Word = {
	hiragana: 'いう',
	kanji: '言う',
	translation: 'say',
	partsOfSpeech: [PartsOfSpeech.verb],
}
const verbs = [walk, eat, see, say]

export const cute: Word = {
	hiragana: 'かわいい',
	kanji: '可愛い',
	translation: 'cute',
	partsOfSpeech: [PartsOfSpeech.iAdj],
}
export const near: Word = {
	hiragana: 'ちかい',
	kanji: '近い',
	translation: 'near',
	partsOfSpeech: [PartsOfSpeech.iAdj],
}
export const big: Word = {
	hiragana: 'おおきい',
	kanji: '大きい',
	translation: 'big',
	partsOfSpeech: [PartsOfSpeech.iAdj],
}
export const difficult: Word = {
	hiragana: 'むずかしい',
	kanji: '難しい',
	translation: 'difficult',
	partsOfSpeech: [PartsOfSpeech.iAdj],
}
const iAdj = [cute, near, big, difficult]

const randomItem = randomItemFromArray(Math.random)

export const createFakeWordRepo = (words: Word[]): WordRepo => ({
	// getWord: filter => fromNullable(words.find(w => filter(w.partsOfSpeech))),
	getWord: filter => pipe(
		words.filter(w => filter(w.partsOfSpeech)),
		randomItem,
		fromNullable,
	),
})

export const fakeWordRepo = createFakeWordRepo([...nouns, ...verbs, ...iAdj])
