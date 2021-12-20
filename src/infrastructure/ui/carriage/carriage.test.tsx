import React from 'react'
import { shallow } from 'enzyme'
import { ga } from '../../../domain/sentence'
import { sakura } from '../../../application/ports/fakeWordRepo'

import { Carriage } from './carriage'

describe('Carriage', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(<Carriage carriage={ga(sakura)} />)
		expect(wrapper).toMatchSnapshot()
	})
})
