import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import Highlight from "./Highlight";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import PathParameters from "./PathParameters";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import { useSelector } from "react-redux";
export default function Lab3() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  console.log("Hello World!");
  return (
    <div id="wd-lab3" className="ms-3">
      <h3>Lab 3</h3>
      <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />
      <VariablesAndConstants /> <br />
      <VariableTypes /> <br />
      <BooleanVariables /> <br />
      <IfElse /> <br />
      <TernaryOperator /> <br />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline /> <br />
      <LegacyFunctions /> <br />
      <ArrowFunctions /> <br />
      <ImpliedReturn /> <br />
      <TemplateLiterals />
      <br />
      <SimpleArrays />
      <br />
      <ArrayIndexAndLength /> <br />
      <AddingAndRemovingToFromArrays />
      <br />
      <ForLoops />
      <br />
      <MapFunction />
      <br />
      <FindFunction />
      <br />
      <FindIndex />
      <br />
      <FilterFunction />
      <br />
      <JsonStringify />
      <br />
      <House />
      <br />
      <TodoItem />
      <br />
      <TodoList />
      <br />
      <Spreading />
      <br />
      <Destructing />
      <br />
      <FunctionDestructing />
      <br />
      <DestructingImports />
      <br />
      <Classes />
      <br />
      <Styles />
      <br />
      <Add a={3} b={4} /> <br />
      <h4>Sqaure of 4</h4>
      <Square>4</Square>
      <hr />
      <br />
      <h4>Hightlight</h4>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <hr />
      <br />
      <PathParameters />
      <br />
      <hr />
    </div>
  );
}
