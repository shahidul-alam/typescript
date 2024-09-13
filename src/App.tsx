import { useState } from "react";
import goalsImg from "./assets/goals.jpg";
import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";

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
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
