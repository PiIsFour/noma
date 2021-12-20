import React from 'react'
import './question.css'

interface Props {
	kanji: string
}

export const Question = ({ kanji }: Props): JSX.Element => {
	return <div className="question">
		{kanji}
	</div>
}
