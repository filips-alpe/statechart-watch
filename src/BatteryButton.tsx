import * as React from 'react';

const BatteryButton = function BatteryButton({ state, send }) {
  const isAlive = state.matches('alive');
  const elButton = isAlive ? (
    <button className="battery-button" onClick={() => send('REMOVE_BATTERY')}>
      Remove battery
    </button>
  ) : (
    <button className="battery-button" onClick={() => send('INSERT_BATTERY')}>
      Insert battery
    </button>
  );
  return <div className="battery-button-container">{elButton}</div>;
};

export default BatteryButton;
