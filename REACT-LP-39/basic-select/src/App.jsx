import { useState } from "react";

function App() {
  const topics = ["Array", "Linked List", "Trees", "Graphs"];
  const [selectedTopics, setSelectedTopics] = useState(["Array", "Trees"]);

  const updateSelected = (value, isChecked) => {
    if (isChecked) {
      setSelectedTopics((prevSelected) => {
        if (!prevSelected.includes(value)) {
          return [...prevSelected, value];
        } else {
          return prevSelected;
        }
      });
    } else {
      setSelectedTopics((prevSelected) => {
        return prevSelected.filter((topic) => topic != value);
      });
    }
  };

  return (
    <div>
      <div>
        {topics.map((topic) => (
          <p>
            <input
              type="checkbox"
              checked={selectedTopics.includes(topic)}
              onChange={(ev) => {
                updateSelected(topic, ev.target.checked);
              }}
            />
            {topic}
          </p>
        ))}
      </div>
      <hr />
      <div>
        {selectedTopics.map((topic) => {
          return <h3>{topic}</h3>;
        })}
      </div>
    </div>
  );
}

export default App;
