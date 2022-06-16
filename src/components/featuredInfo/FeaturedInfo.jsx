import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>Revenue</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$2,415,000</span>
                    <span className='featuredMoneyRate negative'>
                        -11.4
                        <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Sales</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$4,415,000</span>
                    <span className='featuredMoneyRate negative'>
                        -1.4
                        <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Cost</span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$1,225,000</span>
                    <span className='featuredMoneyRate positive'>
                        +2.4
                        <ArrowUpward className='featuredIcon positive' />
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
        </div>
    );
}
