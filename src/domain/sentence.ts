import { Word } from './word'

export enum CarriageType {
	ga = 'ga',
}

interface Carriage<T = Word> {
	word: T,
	type: CarriageType,
	modifier?: Sentence<T>,
}

export enum EngineType {
	verb = 'verb',
}

interface Engine<T = Word> {
	word: T,
	type: EngineType,
}

export interface Sentence<T = Word> {
	parts: Carriage<T>[],
	end: Engine<T>,
}
