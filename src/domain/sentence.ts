import { flow, pipe } from 'fp-ts/function'
import { map, reduce } from 'fp-ts/lib/Array'
import { evolve } from 'fp-ts/lib/struct'
import { Word } from './word'

export enum CarriageType {
	ga = 'ga',
}

export const carriageHiragana = Object.freeze<Record<CarriageType, string>>({
	ga: 'が',
})

export interface Carriage<T = Word> {
	word: T,
	type: CarriageType,
	modifier?: Sentence<T>,
}

export const ga = <T = Word>(word: T, modifier?: Sentence<T>): Carriage<T> => ({ word, type: CarriageType.ga, modifier })

export enum EngineType {
	verb = 'verb',
	iAdj = 'iAdj',
}

export interface Engine<T = Word> {
	word: T,
	type: EngineType,
}

export const verb = <T = Word>(word: T): Engine<T> => ({ word, type: EngineType.verb })
export const iAdj = <T = Word>(word: T): Engine<T> => ({ word, type: EngineType.iAdj })

export interface Sentence<T = Word> {
	parts: Carriage<T>[],
	end: Engine<T>,
}

const join = (separator = '') => reduce<string, string>('', (a, b) => `${ a }${ separator }${ b }`)
const renderCarriage = flow(
	map((c: Carriage) => `${ c.word.kanji }${ carriageHiragana[c.type] }`),
	join(),
)
const renderEnd = (e: Engine<Word>): string => e.word.kanji

export const renderSentence = (sentence: Sentence): string => {
	const { parts, end } = pipe(
		sentence,
		evolve({
			parts: renderCarriage,
			end: renderEnd,
		}),
	)
	return `${ parts }${ end }`
}
