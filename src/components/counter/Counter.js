import React   from 'react'
import {useTrackedState, useDispatch} from 'reactive-react-redux'
import CloseIcon from "icons/CloseIcon"
import counterDisplayStyles from './styles';


function Counter({index}) {
     const state = useTrackedState( );
     const dispatch = useDispatch()
     const counter = state.counters[index]
   
       return (
         <aside className="counter">
 
           <header className="close-icon">
             <CloseIcon
               onClick={() =>
                 dispatch({
                   type: "REMOVE_COUNTER",
                   payload: { id: counter.id }
                 })
               }
             />
           </header>

           <p className="counter-display">{counter.count}</p>
           <p className={counterDisplayStyles.test}>{counter.count}</p>

           <div className="counter-controls">
             <button
               onClick={() =>
                 dispatch({
                   type: "ADD_TO_COUNT",
                   payload: { id: counter.id }
                 })
               }
             >
               +
             </button>
             <button
               onClick={() =>
                 dispatch({
                   type: "SUBTRACT_FROM_COUNT",
                   payload: { id: counter.id }
                 })
               }
             >
               -
             </button>
           </div>
           <footer className="counter-id">
             <p>id: {counter.id.substring(1, 8)}</p>
           </footer>
         </aside>
       );
}

 
 
export default Counter
