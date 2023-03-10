import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from '../hooks/useCountdown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className=" pt-6 flex items-center gap-6 lg:text-xl text-md font-outfit"
      >

        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <svg width="7" height="21" viewBox="0 0 7 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.26898 20.359C2.49341 20.359 1.82864 20.0863 1.27466 19.5408C0.720681 18.9954 0.447954 18.3306 0.456476 17.5465C0.447954 16.7795 0.720681 16.1232 1.27466 15.5778C1.82864 15.0323 2.49341 14.7596 3.26898 14.7596C4.01898 14.7596 4.67097 15.0323 5.22494 15.5778C5.78744 16.1232 6.07295 16.7795 6.08148 17.5465C6.07295 18.0664 5.93659 18.5394 5.67239 18.9655C5.4167 19.3917 5.07579 19.7326 4.64966 19.9883C4.23204 20.2354 3.77182 20.359 3.26898 20.359ZM3.26898 6.34764C2.49341 6.34764 1.82864 6.07492 1.27466 5.52946C0.720681 4.97549 0.447954 4.31071 0.456476 3.53514C0.447954 2.7681 0.720681 2.11185 1.27466 1.56639C1.82864 1.01242 2.49341 0.735429 3.26898 0.735429C4.01898 0.735429 4.67097 1.01242 5.22494 1.56639C5.78744 2.11185 6.07295 2.7681 6.08148 3.53514C6.07295 4.04651 5.93659 4.51526 5.67239 4.94139C5.4167 5.36753 5.07579 5.70844 4.64966 5.96412C4.23204 6.2198 3.77182 6.34764 3.26898 6.34764Z" fill="#A09FAF" />
        </svg>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <svg width="7" height="21" viewBox="0 0 7 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.26898 20.359C2.49341 20.359 1.82864 20.0863 1.27466 19.5408C0.720681 18.9954 0.447954 18.3306 0.456476 17.5465C0.447954 16.7795 0.720681 16.1232 1.27466 15.5778C1.82864 15.0323 2.49341 14.7596 3.26898 14.7596C4.01898 14.7596 4.67097 15.0323 5.22494 15.5778C5.78744 16.1232 6.07295 16.7795 6.08148 17.5465C6.07295 18.0664 5.93659 18.5394 5.67239 18.9655C5.4167 19.3917 5.07579 19.7326 4.64966 19.9883C4.23204 20.2354 3.77182 20.359 3.26898 20.359ZM3.26898 6.34764C2.49341 6.34764 1.82864 6.07492 1.27466 5.52946C0.720681 4.97549 0.447954 4.31071 0.456476 3.53514C0.447954 2.7681 0.720681 2.11185 1.27466 1.56639C1.82864 1.01242 2.49341 0.735429 3.26898 0.735429C4.01898 0.735429 4.67097 1.01242 5.22494 1.56639C5.78744 2.11185 6.07295 2.7681 6.08148 3.53514C6.07295 4.04651 5.93659 4.51526 5.67239 4.94139C5.4167 5.36753 5.07579 5.70844 4.64966 5.96412C4.23204 6.2198 3.77182 6.34764 3.26898 6.34764Z" fill="#A09FAF" />
        </svg>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
