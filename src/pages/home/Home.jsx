import Charts from "../../components/chart/Charts";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "../../components/styles/Home.css";
import WidgetLg from "../../components/widgetSm/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummyData";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
