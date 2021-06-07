import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, decrementByAmount } from './features/counter/counterSlice';
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = React.useState('2');
  return (
    <div className="App bg-dark">
      <div className="container  v-height text-white text-center">
        <div className="row pt-5">
          <div className="col mt-5"><span>{count}</span></div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <div className="row">
              <div className="col">
                <button type="button" className="btn btn-primary font-weight-bold"
                  onClick={() => dispatch(increment())}
                >Increment +</button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-danger font-weight-bold"
                  onClick={() => dispatch(decrement())}
                >Decriment -</button>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-1">
                <input
                  className='w-100'
                  aria-label="Set increment amount"
                  value={incrementAmount}
                  onChange={e => setIncrementAmount(e.target.value)}
                />
              </div>
              <div className="col-3">
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                >
                  Increment by <span>{incrementAmount}</span>
                </button>
              </div>
              <div className="col-3">
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(decrementByAmount(Number(incrementAmount) || 0))}
                >
                  Decrement by <span>{incrementAmount}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
