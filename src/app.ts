import { Store, reducer } from './store';
import { renderTodos } from './utils';

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

const store = new Store({
	todos: reducer
});

button.addEventListener(
	'click',
	() => {
		if (!input.value.trim()) return;

		const payload = { label: input.value, complete: false };

		store.dispatch({
			type: 'ADD_TODO',
			payload
		});

		input.value = '';
	},
	false
);

const unsubscribe = store.subscribe((state) => renderTodos(state.todos.data));

destroy.addEventListener('click', unsubscribe, false);

todoList.addEventListener('click', function(event) {
	const target = event.target as HTMLButtonElement;
	if (target.nodeName.toLowerCase() === 'button') {
		console.log(target);
	}
});

store.subscribe((state) => console.log('STATE:::', state));
