/**
 * The different todo tasks
 */
const tasks = ['hello', 'world'];

/**
 * The total number of tasks present
 */
let taskCount = 0;

/**
 * Adds a new task to the tasklist.
 *
 * @param {*} task The task to be added.
 */
function addTask(task) {
	// Incrementing task count
	taskCount++;

	// Creating a new task item
	const taskItem = `
	<li class="list-group-item task-item" id="task-id-${taskCount}">
		<div class="row">
			<!-- DONE CHECKBOX -->
			<div class="col-1 p-3">
				<input class="form-check-input task-control" type="checkbox" value=""
					id="task-check-${taskCount}" onclick="taskDone(this)"/>
			</div>
			<!---->

			<!-- TASK CONTENT -->
			<div class="col-11 m-auto text-start">
				<h3 class="task-content">${task}</h3>
			</div>
			<!---->
		</div>
	</li>`;

	document.getElementById('task-list').innerHTML += taskItem;
}

/**
 * Remove the target task from the list of tasks.
 *
 * @param {*} target The task to be removed.
 */
function taskDone(target) {
	// Getting the task id
	const taskId = (target.id + '').substring((target.id + '').lastIndexOf('-') + 1);

	// Removing the task item with the given id
	document.getElementById(`task-id-${taskId}`).remove();
}
