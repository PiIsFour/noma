import { pipe } from 'fp-ts/lib/function'
import { fold } from 'fp-ts/lib/Option'
import React, { useEffect, useState } from 'react'
import { fakeLessonRepo } from '../../../application/ports/fakeLessonRepo'
import { fakeWordRepo } from '../../../application/ports/fakeWordRepo'
import { getQuestion } from '../../../application/useCase/getQuestion'

enum Stage{
	loading = 'loading',
	error = 'error',
	ask = 'ask',
}

const nextQuestion = getQuestion(fakeWordRepo, fakeLessonRepo)

export const Learn = (): JSX.Element => {
	const [stage, setStage] = useState(Stage.loading)

	useEffect(() => {
		pipe(
			nextQuestion(),
			fold(
				() => setStage(Stage.error),
				question => setStage(Stage.ask),
			),
		)
	}, [])

	if(stage === Stage.loading){
		return <div>loading next lesson</div>
	}

	return <div>Learning</div>
}
