export enum PartsOfSpeech {
	noun = 'noun',
	verb = 'verb'
}

export interface Word {
	hiragana: string;
	kanji: string;
	translation: string;
	partsOfSpeech: PartsOfSpeech[];
}
