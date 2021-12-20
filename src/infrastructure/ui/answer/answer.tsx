import React from 'react'
import { Question } from '../../../application/useCase/getQuestion'
import { Carriage } from '../carriage/carriage'
import { Engine } from '../engine/engine'
import './answer.css'

export const Answer = ({ sentence }: Question): JSX.Element => {
	return <div className="answer">
		{sentence.parts.map((carriage, index) => <Carriage key={index} carriage={carriage} />)}
		<Engine engine={sentence.end} />
	</div>
}
