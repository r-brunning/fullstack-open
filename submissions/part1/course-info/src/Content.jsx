import { Part } from "./Part";

export const Content = (props) => {
  return (
    <>
      {props.parts.map(part => <Part partName={part.name} partNumber={part.exercises} />)}
    </>
  );
};
