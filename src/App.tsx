import { useState } from "react";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";

type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState</*Array<CourseGoal*/ CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoal) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learning React + TS",
        description: "Learning it from scratch !!",
      };

      return [...prevGoal, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={[goals]}/>
    </main>
  );
}

export default App;
