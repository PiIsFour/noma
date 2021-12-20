import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ga } from '../../../domain/sentence'
import { sakura } from '../../../application/ports/fakeWordRepo'

import { Carriage } from './carriage'

export default {
	title: 'Carriage',
	component: Carriage,
} as ComponentMeta<typeof Carriage>

const Template: ComponentStory<typeof Carriage> = (args) => <Carriage {...args} />

export const Standard = Template.bind({})
Standard.args = {
	carriage: ga(sakura),
}
