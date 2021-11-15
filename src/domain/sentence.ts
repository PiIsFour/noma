import { Word } from './word'

export enum CarriageType {
	ga = 'ga',
}

interface Carriage<T = Word> {
	word: T,
	type: CarriageType,
	modifier?: Sentence<T>,
}

export const ga = <T = Word>(word: T, modifier?: Sentence<T>): Carriage<T> => ({ word, type: CarriageType.ga, modifier })

export enum EngineType {
	verb = 'verb',
}

interface Engine<T = Word> {
	word: T,
	type: EngineType,
}

export const verb = <T = Word>(word: T): Engine<T> => ({ word, type: EngineType.verb })

export interface Sentence<T = Word> {
	parts: Carriage<T>[],
	end: Engine<T>,
}
