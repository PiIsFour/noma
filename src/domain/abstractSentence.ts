import { Sentence } from './sentence'
import { PartsOfSpeech } from './word'

interface AbstractWord {
	conditions: ((p: PartsOfSpeech[]) => boolean)[]
}

export type AbstractSentence = Sentence<AbstractWord>
