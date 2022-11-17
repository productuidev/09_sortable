import SortableList from "./lib/SortableList";
import TestItem from "./TestItem/testItem";
import { data } from "./TestItem/testData";

function App() {
  const onClickItem = (index) => alert(index);
  const onDropItem = (newList) => console.log(newList);

  return (
    <SortableList
      data={data}
      renderItem={(item, index) => <TestItem data={item} index={index} />}
      onClickItem={onClickItem}
      onDropItem={onDropItem}
    />
  );
}

export default App;
