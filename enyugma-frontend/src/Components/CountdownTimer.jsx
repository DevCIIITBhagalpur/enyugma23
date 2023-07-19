import Countdown from "react-countdown";

const CountdownTimer = () => {
  const launchDay = new Date(2023, 9 - 1, 22);

  // Renderer function to format and display the countdown
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div style={{ fontFamily: "Digital", color: "white" }}>
        <span>{days} Days : </span>
        <span>{hours} Hrs : </span>
        <span>{minutes} Min : </span>
        <span>{seconds} Sec</span>
      </div>
    );
  };

  return <Countdown date={launchDay} renderer={renderer} />;
};

export default CountdownTimer;
