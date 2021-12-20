import React from 'react'
import { shallow } from 'enzyme'
import { verb } from '../../../domain/sentence'
import { walk } from '../../../application/ports/fakeWordRepo'

import { Engine } from './engine'

describe('Engine', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(<Engine engine={verb(walk)} />)
		expect(wrapper).toMatchSnapshot()
	})
})
