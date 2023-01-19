import './Watch.scss';
import * as React from 'react';
import { useMachine, useActor } from '@xstate/react';
import { useKeyDown, useKeyUp } from './extras';
import { watchCaseMachine } from './watchCaseMachine';
import StatusIcons from './StatusIcons';
import StateInfo from './StateInfo';
import BeepLabel from './BeepLabel';
import BatteryButton from './BatteryButton';
import WatchButton from './WatchButton';
import Display from './Display';
import figure31 from './assets/figure_31.png';
import { ReactComponent as FaceBackground } from './assets/face.svg';

const WatchCase = function WatchCase() {
  const [state, send] = useMachine(watchCaseMachine);
  const watchRef = state?.children?.watch;
  const watchEl = watchRef ? <Watch watchRef={watchRef} /> : <DeadWatch />;

  return (
    <div className="container">
      {watchEl}
      <BatteryButton state={state} send={send} />
      <img
        className="figure-31"
        src={figure31}
        alt="Figure 31 from Harel's statecharts paper"
      />
    </div>
  );
};

const DeadWatch = function DeadWatch() {
  return (
    <div className="face-and-buttons">
      <Face />
    </div>
  );
};

const Watch = function Watch({ watchRef }) {
  const [state, send] = useActor(watchRef);
  useKeyDown(send);
  useKeyUp(send);

  return (
    <>
      <StateInfo state={state} />
      <BeepLabel state={state} />
      <div className="face-and-buttons">
        <Face state={state} />
        <WatchButton type="a" send={send}>
          a
        </WatchButton>
        <WatchButton type="b" send={send}>
          b
        </WatchButton>
        <WatchButton type="c" send={send}>
          c
        </WatchButton>
        <WatchButton type="d" send={send}>
          d
        </WatchButton>
      </div>
    </>
  );
};

const Face = function Face({ state }) {
  const isAlive = !!state && state.matches('alive');
  let lightState;
  let elStatusIcons;
  let elDisplay;
  if (isAlive) {
    lightState = state.value.alive.light;
    elStatusIcons = <StatusIcons state={state} />;
    elDisplay = <Display state={state} />;
  }

  return (
    <div className="face">
      <FaceBackground
        data-state-light={lightState}
        className="face-background"
      />
      <div className="displays">
        {elStatusIcons}
        {elDisplay}
      </div>
    </div>
  );
};

export default WatchCase;
