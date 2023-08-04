<template>
	<div class="todo-footer">
		<label>
			<!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
			<input type="checkbox" v-model="isAll" />
		</label>
		<span>
			<span>已完成{{ doneTotal }}</span> / 全部{{ total }}
		</span>
		<button class="btn btn-danger" @click="clearAll()">
			清除已完成任务
		</button>
	</div>
</template>

<script>
export default {
	name: 'MyFooter',
	//props: ['todos', 'checkAllTodo', 'clearAllTodo'],
	props: ['todos'],
	computed: {
		// 总数
		total() {
			return this.todos.length
		},
		// 已完成数
		doneTotal() {
			return this.todos.reduce(
				(pre, todo) => pre + (todo.done ? 1 : 0),
				0
			)
		},
		// 控制全选框
		isAll: {
			get() {
				return this.doneTotal === this.total && this.total > 0
			},
			set(value) {
				// this.checkAllTodo(value)
				this.$emit('checkAllTodo', value)
			},
		},
	},
	methods: {
		//清空所有已完成
		clearAll() {
			//this.clearAllTodo()
			this.$emit('clearAllTodo')
		},
	},
}
</script>

<style scoped>
/*footer*/
.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
}
.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
}
.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
}
.todo-footer button {
	float: right;
	margin-top: 5px;
}
</style>
