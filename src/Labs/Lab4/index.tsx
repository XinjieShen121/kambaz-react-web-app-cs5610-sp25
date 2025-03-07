import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter"
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
export default function Lab4(){
    function sayHello(){
        alert("Hello");
    }
    return(
        <div  id= "wd-a4" className="ms-3">
        <h3>Lab 4</h3>

        <ClickEvent /> <br />
        <PassingDataOnEvent /> <br />
        <PassingFunctions theFunction={sayHello}/> <br />
        <EventObject /> <br />
        <Counter /> <br />
        <BooleanStateVariables /> <br />
        <StringStateVariables /><br />
        <DateStateVariable /> <br />
        <ObjectStateVariable /> <br />
        <ArrayStateVariable /> <br />
        <ParentStateComponent /> 
        <ReduxExamples/> 
    </div>
    )
  
}