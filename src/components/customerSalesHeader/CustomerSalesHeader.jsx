import "./customerSalesHeader.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import CustomerSelection from "../customerSelection/CustomerSelection";

export default function CustomerSalesHeader({ customer, setCustomer }) {
    return (
        <div className='featured'>
            <CustomerSelection customer={customer} setCustomer={setCustomer} />
            <div className='featuredItem'>
                <span className='featuredTitle'>
                    Amount Sold to {customer.label}
                </span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>$0,000,000</span>
                    <span className='featuredMoneyRate negative'>
                        -1.4
                        <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className='featuredSub'>Over the last 12 months</span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>
                    Quantity Sold to {customer.label}
                </span>
                <div className='featuredMoneyContainer'>
                    <span className='featuredMoney'>0,000,000 lbs</span>
                    <span className='featuredMoneyRate positive'>
                        +2.4
                        <ArrowUpward className='featuredIcon positive' />
                    </span>
                </div>
                <span className='featuredSub'>Over the last 12 months</span>
            </div>
        </div>
    );
}
