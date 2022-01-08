import { Option } from 'fp-ts/Option'
import { PartsOfSpeech, Word } from '../../domain/word'

type Filter = (partsOfSpeech: PartsOfSpeech[]) => boolean

export interface WordRepo {
	getWord(filter: Filter): Option<Word>
}
