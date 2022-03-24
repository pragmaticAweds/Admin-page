import SideBar from "../../organism/sidebar";
import NavBar from "../../organism/navbar";
import "./home.scss";
import Widget from "../../organism/widget";
import Featured from "../../organism/featured";
import Chart from "../../organism/chart";
import Table from "../../organism/table";

const HomeScreen = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="home-container">
        <NavBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="list-container">
          <div className="list-title">Latest Transaction</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
