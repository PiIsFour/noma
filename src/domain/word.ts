export enum PartsOfSpeech {
	noun = 'noun',
	verb = 'verb',
	iAdj = 'iAdj',
}

export interface Word {
	hiragana: string;
	kanji: string;
	translation: string;
	partsOfSpeech: PartsOfSpeech[];
}
