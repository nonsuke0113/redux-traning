import { VFC } from 'react';
import { useSelector } from 'react-redux';

import { CounterState } from '../../reducer';
import ColorfulBeads from '../../conponents/molecules/ColorfulBeads';

const EnhancedColorfulBeads: VFC<{ count?: number }> = () => {
  const count = useSelector<CounterState, number>((state) => state.count);

  return <ColorfulBeads count={count} />;
};

export default EnhancedColorfulBeads;
