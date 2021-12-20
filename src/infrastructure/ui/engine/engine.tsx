import React from 'react'
import './engine.css'
import { Engine as EngineType } from '../../../domain/sentence'

interface Props {
	engine: EngineType
}

export const Engine = ({ engine }: Props): JSX.Element => {
	const { type, word } = engine
	const kanji = word.kanji
	return <div className={['engine', `engine-${ type }`].join(' ')}>
		{kanji}
	</div>
}
