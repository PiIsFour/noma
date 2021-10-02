import React from 'react'

interface Props {
	kanji: string
}

export const Question = ({ kanji }: Props): JSX.Element => {
	return <div>
		{kanji}
	</div>
}
