import { fromNullable } from 'fp-ts/Option'
import { PartsOfSpeech, Word } from '../../domain/word'
import { WordRepo } from './wordsRepo'

export const sakura: Word = {
	hiragana: 'さくら',
	kanji: 'さくら',
	translation: 'sakura',
	partsOfSpeech: [PartsOfSpeech.noun],
}

export const walk: Word = {
	hiragana: 'あるく',
	kanji: '歩く',
	translation: 'walk',
	partsOfSpeech: [PartsOfSpeech.verb],
}

export const cute: Word = {
	hiragana: 'かわいい',
	kanji: '可愛い',
	translation: 'cute',
	partsOfSpeech: [PartsOfSpeech.iAdj],
}

export const createFakeWordRepo = (words: Word[]): WordRepo => ({
	getWord: filter => fromNullable(words.find(w => filter(w.partsOfSpeech))),
})
