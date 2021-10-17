import { Word } from './word'

export enum CarriageType {
	ga = 'ga',
}

interface Carriage {
	word: Word,
	type: CarriageType,
	modifier?: Sentence,
}

export interface Sentence {
	parts: Carriage[]
}
