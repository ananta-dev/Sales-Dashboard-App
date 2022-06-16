import './salesByCustomer.css';
import CustomerSalesHeader from '../../components/customerSalesHeader/CustomerSalesHeader';
import Chart from '../../components/chart/Chart';
import ContractList from '../../components/contractList/ContractList';
import { useState } from 'react';
import useCustomerSales from '../../hooks/useCustomerSales';

export default function SalesByCustomer() {
    // const [customer, setCustomer] = useState({
    //     value: "",
    //     label: "<Please select a customer>",
    // });

    const [customer, setCustomer] = useState({
        value: 'ZENTIS.S',
        label: 'Zentis GmbH & Co. KG (ZENTIS.S)',
    });

    const salesQueryResult = useCustomerSales(customer.value);
    const chartTitle = `Sales to: ${customer.label}`;

    return (
        <div className='home'>
            <CustomerSalesHeader
                customer={customer}
                setCustomer={setCustomer}
            />
            <Chart
                salesQueryResult={salesQueryResult}
                title={chartTitle}
                grid
                dataKey='Quantity'
            />
            <div className='homeWidgets'>
                <ContractList
                    customer={customer}
                    salesQueryResult={salesQueryResult}
                />
            </div>
        </div>
    );
}
