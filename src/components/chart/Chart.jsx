import './chart.css';
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

import { genEmptyChartData } from '../../utils/dataUtils';

export default function Chart({ title, salesQueryResult, dataKey, grid }) {
    const {
        status,
        isLoading,
        isFetching,
        isSuccess,
        isError,
        data: salesData,
        error,
    } = salesQueryResult;

    // console.log("Raw data: ", { salesData });

    const chartData = genEmptyChartData();

    if (isSuccess && salesData.length > 0) {
        console.log({ salesData });

        const groupedSalesData = salesData
            .filter(contract => contract.Quantity !== 0)
            .map(contract => {
                let lbsQty;
                switch (contract.UnitOfMeasurementCode) {
                    case 'MT':
                        lbsQty = contract.Quantity * 2204.6;
                        break;
                    case 'KG':
                        lbsQty = contract.Quantity * 2.2046;
                        break;
                    default:
                        lbsQty = contract.Quantity;
                }

                return {
                    quantity: lbsQty,
                    period: contract.PhysicalTradeBase.ContractDate.slice(
                        0,
                        -12
                    ),
                };
            })
            .reduce((acc, entry) => {
                const { quantity, period } = entry;
                return { ...acc, [period]: (acc[period] || 0) + quantity };
            }, {});

        const keys = Object.keys(groupedSalesData);
        keys.forEach(key => {
            const chartDataEntry = chartData.find(elem => elem.name === key);
            // console.log("key:", key, " Found object: ", chartDataEntry);
            if (chartDataEntry) {
                chartDataEntry.Quantity += groupedSalesData[key];
            }
        });

        // console.log({ chartData });
    }

    return (
        <div className='chart'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width='100%' aspect={10 / 3}>
                <LineChart data={chartData}>
                    <XAxis
                        dataKey='name'
                        stroke='#5550bd'
                        style={{
                            fontSize: '1rem',
                        }}
                        angle='-45'
                        tick={{ dy: 11, dx: -13 }}
                    />
                    <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
                    <Tooltip />
                    {grid && (
                        <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />
                    )}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
