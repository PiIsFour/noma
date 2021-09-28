// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: 'deep', noKey: true }))
