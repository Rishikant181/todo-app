/**
 * The different todo tasks
 */
const tasks = ['hello', 'world'];

/**
 * Creates a new Task item element.
 *
 * @param {*} task The task to store.
 * @returns The new TaskItem.
 */
const TaskItem = (task) => {
	// Creating a new list item to store the task
	const element = document.createElement('li');

	// Adding styling
	element.classList = ['list-group-item'];

	// Inserting the task into the task item
	element.innerHTML = task;

	return element;
};
