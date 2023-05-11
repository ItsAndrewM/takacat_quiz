import { quiz } from "../data/quiz";

const Question = ({ index }) => {
  return (
    <div>
      <h1>{quiz[index].title}</h1>
      {quiz[index].content && <p>{quiz[index].content}</p>}
    </div>
  );
};

export default Question;
