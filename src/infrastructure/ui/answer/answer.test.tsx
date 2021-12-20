import React from 'react'
import { shallow } from 'enzyme'
import { ga, verb } from '../../../domain/sentence'
import { sakura, walk } from '../../../application/ports/fakeWordRepo'

import { Answer } from './answer'

describe('Answer', () => {
	it('matches snapshot', () => {
		const sentence = {
			parts: [ga(sakura)],
			end: verb(walk),
		}
		const wrapper = shallow(<Answer kanji='さくらが歩く。' sentence={sentence} />)
		expect(wrapper).toMatchSnapshot()
	})
})
