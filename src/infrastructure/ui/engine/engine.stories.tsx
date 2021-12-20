import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { verb } from '../../../domain/sentence'
import { walk } from '../../../application/ports/fakeWordRepo'

import { Engine } from './engine'

export default {
	title: 'Engine',
	component: Engine,
} as ComponentMeta<typeof Engine>

const Template: ComponentStory<typeof Engine> = (args) => <Engine {...args} />

export const Standard = Template.bind({})
Standard.args = {
	engine: verb(walk),
}
