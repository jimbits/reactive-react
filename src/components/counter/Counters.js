/** @jsx jsx */
import {jsx} from "@emotion/core"
import { useTrackedState, useDispatch } from "reactive-react-redux"
 
import Counter from "./Counter"
import counterDisplayStyles  from "./styles";
import uuid from "uuid/v4"

 
 

 function Counters(props) {
     const state = useTrackedState();
     const dispatch = useDispatch()
     const counters = state.counters;
    
  return (
    <section css={counterDisplayStyles}>
      <header className="edit-counters">
       <button onClick={(e)=> dispatch({type:"ADD_COUNTER", payload:{id:uuid(), count:0}})}>add counter</button>
       <button onClick={(e)=> dispatch({type:"RESET_COUNTERS"})}>reset display</button>
      </header>
    
      <div className="counters">
        {
          counters.map((item, index)=>(
            <Counter key={item.id} index={index}/>
          ))
        }
       
      </div>
    </section>
  );
}
 
 

export default  Counters 