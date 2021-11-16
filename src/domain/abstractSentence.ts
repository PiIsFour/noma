import { traverse } from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
import { Option, Applicative as OptionApplicative, Apply as OptionApply, some } from 'fp-ts/Option'
import { concatAll } from 'fp-ts/Monoid'
import { getMonoidAll } from 'fp-ts/Predicate'
import { WordRepo } from '../application/ports/wordsRepo'
import { Carriage, Engine, Sentence } from './sentence'
import { PartsOfSpeech, Word } from './word'
import { sequenceS } from 'fp-ts/Apply'
import { evolve } from 'fp-ts/struct'

export interface AbstractWord {
	conditions: ((p: PartsOfSpeech[]) => boolean)[]
}

export type AbstractSentence = Sentence<AbstractWord>

const testAll = concatAll(getMonoidAll<PartsOfSpeech[]>())
const getWord = (wordRepo: WordRepo) => (word: AbstractWord): Option<Word> =>
	wordRepo.getWord(testAll(word.conditions))
const fillInCarriage = (wordRepo: WordRepo) => (carriage: Carriage<AbstractWord>): Option<Carriage> => pipe(
	{
		word: getWord(wordRepo)(carriage.word),
		type: some(carriage.type),
		// TODO: add modifier sentence here
	},
	sequenceS(OptionApply),
)
const fillInCarriages = (wordRepo: WordRepo) => traverse(OptionApplicative)(fillInCarriage(wordRepo))
const fillInEngine = (wordRepo: WordRepo) => (engine: Engine<AbstractWord>): Option<Engine> => pipe(
	{
		word: getWord(wordRepo)(engine.word),
		type: some(engine.type),
	},
	sequenceS(OptionApply),
)

export const calculateConcreteSentence = (wordRepo: WordRepo) => (template: AbstractSentence): Option<Sentence> => {
	return pipe(
		template,
		evolve({
			parts: fillInCarriages(wordRepo),
			end: fillInEngine(wordRepo),
		}),
		sequenceS(OptionApply),
	)
}
