import React from 'react'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(<App />)
		expect(wrapper).toMatchSnapshot()
	})
})
