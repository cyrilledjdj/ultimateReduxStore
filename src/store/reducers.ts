export const initialState = {
	loaded: false,
	loading: false,
	data: [ { label: 'Eat pizza', complete: false } ]
};

export function reducer(state = initialState, action: { type: string; payload: any }) {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				...state,
				data: [ ...state.data, action.payload ]
			};
	}
	// Do nothing if not handled
	return state;
}
