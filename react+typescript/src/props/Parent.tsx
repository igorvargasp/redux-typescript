import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => {}}>
      teste
    </ChildAsFC>
  );
};

export default Parent;
