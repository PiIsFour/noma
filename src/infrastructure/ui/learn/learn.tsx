import { pipe } from 'fp-ts/lib/function'
import { fold } from 'fp-ts/lib/Option'
import React, { useEffect, useState } from 'react'
import { fakeLessonRepo } from '../../../application/ports/fakeLessonRepo'
import { fakeWordRepo } from '../../../application/ports/fakeWordRepo'
import { getQuestion, Question as QuestionType } from '../../../application/useCase/getQuestion'
import { Question } from '../question/question'

class Loading {
	render(): JSX.Element{
		return <div>loading next lesson</div>
	}
}

class Error {
	render(): JSX.Element{
		return <div>Error</div>
	}
}

class Ask {
	constructor(private question: QuestionType){}
	render(): JSX.Element{
		return <Question kanji={this.question.kanji} />
	}
}

type Stage = Loading | Error | Ask

const nextQuestion = getQuestion(fakeWordRepo, fakeLessonRepo)

export const Learn = (): JSX.Element => {
	const [stage, setStage] = useState<Stage>(new Loading())

	useEffect(() => {
		pipe(
			nextQuestion(),
			fold(
				() => setStage(new Error()),
				question => setStage(new Ask(question)),
			),
		)
	}, [])

	return stage.render()
}
