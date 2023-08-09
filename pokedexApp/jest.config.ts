/* eslint-disable */

export default {
	presets: 'ts-jest',
	testEnvironment: 'node',
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.[tj]sx?$': 'babel-jest',
	},
	moduleDirectories: ['node_modules', 'src'],
};
