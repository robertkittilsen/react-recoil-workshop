import { ListItem, UnorderedList } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { TodoListStats } from '../recoil/selectors/todoListSelector';

export function TodoListStatsView() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } = {} as TodoListStats;

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <UnorderedList>
      <ListItem>Total items: {totalNum}</ListItem>
      <ListItem>Items completed: {totalCompletedNum}</ListItem>
      <ListItem>Items not completed: {totalUncompletedNum}</ListItem>
      <ListItem>Percent completed: {formattedPercentCompleted}</ListItem>
    </UnorderedList>
  );
}
