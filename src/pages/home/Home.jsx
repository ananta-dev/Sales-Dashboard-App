import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import QueryWidget from "../../components/queryWidget/QueryWidget";

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />

            <div className='homeWidgets'>
                <WidgetSm />
                <QueryWidget />
            </div>
        </div>
    );
}
