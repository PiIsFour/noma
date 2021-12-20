import React from 'react'
import { shallow } from 'enzyme'

import { Button } from './button'

describe('button', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(<Button label="test button" />)
		expect(wrapper).toMatchSnapshot()
	})
})
