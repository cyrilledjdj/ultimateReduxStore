export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';

export class AddTodo {
	public readonly type = ADD_TODO;
	constructor(private readonly payload: any) {}
}

export class RemoveTodo {
	public readonly type = REMOVE_TODO;
	constructor(private readonly payload: any) {}
}
