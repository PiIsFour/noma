import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './button'

export default {
	title: 'Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Standard = Template.bind({})
Standard.args = {
	label: 'Click Me',
}
