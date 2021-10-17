import { Option } from 'fp-ts/Option'
import { PartsOfSpeech, Word } from '../../domain/word'

export interface WordRepo {
	getWord(filter: (partsOfSpeech: PartsOfSpeech[]) => boolean): Option<Word>
}
