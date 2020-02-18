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

	public dispatch(action) {
		this.state = {
			...this.state,
			todos: [ ...this.state.todos, action.payload ]
		};
	}
}
