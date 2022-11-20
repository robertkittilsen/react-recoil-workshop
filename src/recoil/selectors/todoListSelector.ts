import { selector } from "recoil";
import { TodoItem } from "../../components/TodoItemView";
import { todoListFilterState, todoListState } from "../atoms/todoListAtom";

/* export const filteredTodoListState = selector<TodoItem[]>({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
}); */

export interface TodoListStats {
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
  percentCompleted: number;
}

/* export const todoListStatsState = selector<TodoListStats>({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
}) */;
