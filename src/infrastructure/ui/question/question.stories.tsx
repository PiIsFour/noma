import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Question } from './question'

export default {
	title: 'Scenes/Question',
	component: Question,
	argTypes: {
	},
} as ComponentMeta<typeof Question>

const Template: ComponentStory<typeof Question> = (args) => <Question {...args} />

export const Standard = Template.bind({})
Standard.args = {
	kanji: 'さくらが歩く',
}
