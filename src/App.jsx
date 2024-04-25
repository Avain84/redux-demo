import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from '../redux/counter/slice';

function App() {
  // const count = useSelector((state) => state.counter.count);

  // const dispatch = useDispatch();
  return (
    <>
      <A />
      <B />
      {/* <h1>
        {count}
      </h1> */}
      {/* <button onClick={() => dispatch(increment())}>
        +
      </button>
      <button onClick={() => dispatch(decrement())}>
        -
      </button> */}
    </>
  )
}

function A () {
  const count = useSelector((state) => state.counter.count);
  return(
    <h1>
      {count}
    </h1>
  )
}

function B () {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>
        +
      </button>
      <button onClick={() => dispatch(decrement())}>
        -
      </button>
    </>
  );
}

export default App
