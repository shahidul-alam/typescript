import CourseGoal from "./CourseGoal";
type CourseGoalListProps = {
    goals:{
        id: number;
    title: string;
    description: string;
    }[]
  };

export default function CourseGoalList({goals}: CourseGoalListProps){
return(
    <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
);
} 