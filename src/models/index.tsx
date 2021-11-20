import { Models } from '@rematch/core';
import { schedule } from './schedule';
import { location } from './location';

export interface RootModel extends Models<RootModel> {
	schedule: typeof schedule,
	location: typeof location
}

export const models: RootModel = { schedule, location }
