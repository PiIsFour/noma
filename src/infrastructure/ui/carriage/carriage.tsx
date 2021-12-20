import React from 'react'
import { Carriage as CarriageType, carriageHiragana } from '../../../domain/sentence'
import './carriage.css'

interface Props {
	carriage: CarriageType
}

export const Carriage = ({ carriage }: Props): JSX.Element => {
	const { type, word } = carriage
	const kanji = word.kanji
	const particle = carriageHiragana[type]
	return <div className={['carriage', `carriage-${ type }`].join(' ')}>
		{kanji}
		<span className="particle">{particle}</span>
	</div>
}
