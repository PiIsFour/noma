import { flow } from 'fp-ts/lib/function'
import { fold } from 'fp-ts/lib/Option'
import React, { useEffect, useState } from 'react'
import { fakeLessonRepo } from '../../../application/ports/fakeLessonRepo'
import { fakeWordRepo } from '../../../application/ports/fakeWordRepo'
import { getQuestion, Question as QuestionType } from '../../../application/useCase/getQuestion'
import { Answer } from '../answer/answer'
import { Button } from '../button/button'
import { Question } from '../question/question'

interface StateParams {
	transitionTo: (stage: Stage) => void
	nextQuestion: () => void
}

interface Controls {
	text: string
	action: () => void
}

class Loading {
	render(): JSX.Element{
		return <div>loading next lesson</div>
	}

	controls(): Controls[]{
		return []
	}
}

class Error {
	render(): JSX.Element{
		return <div>Error</div>
	}

	controls(): Controls[]{
		return []
	}
}

class Ask {
	constructor(private question: QuestionType){}
	render(): JSX.Element{
		return <Question kanji={this.question.kanji} />
	}

	controls({ transitionTo }: StateParams): Controls[]{
		return [
			{
				text: 'show',
				action: () => transitionTo(new Review(this.question)),
			},
		]
	}
}

class Review {
	constructor(private question: QuestionType){}
	render(): JSX.Element{
		const { kanji, sentence } = this.question
		return <Answer kanji={kanji} sentence={sentence} />
	}

	controls({ nextQuestion }: StateParams): Controls[]{
		return [
			{
				text: 'next',
				action: nextQuestion,
			},
		]
	}
}

type Stage = Loading | Error | Ask | Review

const lookUpQuestion = getQuestion(fakeWordRepo, fakeLessonRepo)

export const Learn = (): JSX.Element => {
	const [stage, setStage] = useState<Stage>(new Loading())

	const nextQuestion = flow(
		lookUpQuestion,
		fold(
			() => setStage(new Error()),
			question => setStage(new Ask(question)),
		),
	)

	useEffect(nextQuestion, [])

	return <>
		{stage.render()}
		<div style={{
			marginTop: '2rem',
		}}>
			{stage.controls({
				transitionTo: setStage,
				nextQuestion,
			}).map(({ text, action }, index) =>
				<Button key={index} label={text} onClick={action} />,
			)}
		</div>
	</>
}
