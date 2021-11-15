import { fakeLessonRepo } from './fakeLessonRepo'

describe('fake lesson repo', () => {
	it('has some lessons', () => {
		expect(fakeLessonRepo.getLessons()).not.toHaveLength(0)
	})
})
