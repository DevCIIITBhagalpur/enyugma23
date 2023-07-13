import "./index.scss";
import CountdownTimer from "../../Components/CountdownTimer";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="item">
          <img className="banner" src="./src/assets/banner.webp" />
        </div>
        <div className="item model">3D model</div>
      </div>
      <div className="container">
        <div className="item">
          <div className="container">
            <button className="item btn">Explore</button>
            <button className="item btn">Events</button>
          </div>
        </div>
        <div className="item">
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
}
