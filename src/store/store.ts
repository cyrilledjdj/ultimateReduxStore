export class Store {
	private subscribers: Function[];
	private state: { [key: string]: any };

	constructor(private readonly reducers: { [key: string]: Function } = {}, initialState = {}) {
		this.state = this.reduce(initialState, {});
	}

	public get value() {
		return this.state;
	}

	public subscribe(fn: Function) {
		this.subscribers = [ ...(this.subscribers || []), fn ];
		this.notify();
		return () => {
			this.subscribers = this.subscribers.filter((sub) => sub !== fn);
		};
	}

	public dispatch(action) {
		this.state = this.reduce(this.state, action);
		this.notify();
	}

	private notify() {
		this.subscribers.forEach((fn) => fn(this.value));
	}

	private reduce(state, action): { [key: string]: any } {
		const newState = {};
		for (const prop in this.reducers) {
			newState[prop] = this.reducers[prop](state[prop], action);
		}
		return newState;
	}
}
