import React from 'react'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'

import { Question } from './question'

describe('Question', () => {
	it('matches snapshot', () => {
		const wrapper = shallow(<Question kanji='さくらが歩く。' />)
		expect(wrapper).toMatchSnapshot()
	})
})
