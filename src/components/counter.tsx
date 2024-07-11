import {useCounter} from "../hooks/useCounter"

const Counter = () => { 

  const {counter,increment, decrement, reset} = useCounter(0)

  return (
    <div className='container'>
      <h1>Counter {counter}</h1>
      <button className='decrement' onClick={()=> decrement(1)}>-1</button>
      <button className='reset' onClick={()=> reset()} >Reset</button>
      <button className='increment' onClick={()=>increment(1)}>+1</button>
    </div>
  );
};

export default Counter;
