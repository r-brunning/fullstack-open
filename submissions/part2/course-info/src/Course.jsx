export const Course = ({ course }) => {
  const total = course.parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0
  );

  return (
    <div>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
      <p>
        <b>total of {total} exercises</b>
      </p>
    </div>
  );
};
