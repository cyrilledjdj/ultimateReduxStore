export class Store {
	private subscribers: Function[];
	private reducers: { [key: string]: Function };
	private state: { [key: string]: any };

	constructor(reducers = {}, initialState = {}) {
		this.state = initialState;
	}

	public get value() {
		return this.state;
	}
}
