import * as React from 'react';
import beepText from './assets/beep_text.svg';
import beepLines from './assets/beep_lines.svg';

const BeepLabel = function BeepLabel({ state }) {
  const beepStates = [
    'alive.main.displays.regularAndBeep.beep-test.beep',
    'alive.main.alarms-beep',
    'alive.chime-status.enabled.beep',
  ];

  const isBeeping = beepStates.some(state.matches);
  const dataStateBeep = isBeeping ? 'beeping' : undefined;

  return (
    <div data-state-beep={dataStateBeep} className="beep-container">
      <img className="beep-text" src={beepText} alt="Beep text" />
      <img className="beep-lines" src={beepLines} alt="Beep lines" />
    </div>
  );
};

export default BeepLabel;
