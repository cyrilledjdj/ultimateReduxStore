export class Store {
	private subscribers: Function[];
	private state: { [key: string]: any };

	constructor(private readonly reducers: { [key: string]: Function } = {}, initialState = {}) {
		this.state = this.reduce(initialState, {});
	}

	public get value() {
		return this.state;
	}

	public dispatch(action) {
		this.state = this.reduce(this.state, action);
	}

	private reduce(state, action): { [key: string]: any } {
		const newState = {};
		for (const prop in this.reducers) {
			newState[prop] = this.reducers[prop](state[prop], action);
		}
		return newState;
	}
}
