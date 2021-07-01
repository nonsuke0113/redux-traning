import { VFC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CounterState } from '../../reducer';
import { add, decrement, increment } from '../../actions';
import CounterBoard from '../../conponents/organisms/CounterBoard';

const EnhancedCounterBoard: VFC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(add(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default EnhancedCounterBoard;
