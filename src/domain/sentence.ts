import { Word } from './word'

export enum CarriageType {
	ga = 'ga',
}

interface Carriage {
	word: Word,
	type: CarriageType,
	modifier?: Sentence,
}

export enum EngineType {
	verb = 'verb',
}

interface Engine {
	word: Word,
	type: EngineType,
}

export interface Sentence {
	parts: Carriage[],
	end: Engine,
}
