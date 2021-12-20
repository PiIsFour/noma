import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Answer } from './answer'
import { ga, verb } from '../../../domain/sentence'
import { sakura, walk } from '../../../application/ports/fakeWordRepo'

export default {
	title: 'Scenes/Answer',
	component: Answer,
	argTypes: {
	},
} as ComponentMeta<typeof Answer>

const Template: ComponentStory<typeof Answer> = (args) => <Answer {...args} />

export const Standard = Template.bind({})
Standard.args = {
	kanji: 'さくらが歩く。',
	sentence: {
		parts: [ga(sakura)],
		end: verb(walk),
	},
}
