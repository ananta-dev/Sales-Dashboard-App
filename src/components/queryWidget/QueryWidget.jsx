import "./queryWidget.css";

// import { useQuery, gql } from "@apollo/client";

//prettier-ignore
// const TRADES_QUERY1 = gql`
//     query ($TradingEntityId:string){
//         Departments(TradingEntityId: $TradingEntityId) {
//             DepartmentId
//         }
//     }
// `;

// const TRADES_QUERY1 = gql`
//     query Departments {
//         Departments(TradingEntityId: $TradingEntityId) {
//             DepartmentId
//         }
//     }
// `;

// const TRADES_QUERY1 = gql`
//     {
//         PhysicalTradeBases(TradingEntityId: "D1", Top: 5) {
//             PhysicalTradeId
//             PhysicalTradeMain {
//                 Counterparty {
//                     ClientAccountId
//                     CountryCode
//                     Title
//                 }
//                 Quantity
//                 UnitOfMeasurementCode
//             }
//         }
//     }
// `;

// const TRADES_QUERY2 = gql`
//     query ($TradingEntityId: String) {
//         PhysicalTradeBases(TradingEntityId: $tradingEntity, Top: 5) {
//             PhysicalTradeId
//             PhysicalTradeMain {
//                 Counterparty {
//                     ClientAccountId
//                     CountryCode
//                     Title
//                 }
//                 Quantity
//                 UnitOfMeasurementCode
//             }
//         }
//     }
// `;

// console.log("TRADES_QUERY1: ", TRADES_QUERY1);
// console.log("TRADES_QUERY2: ", TRADES_QUERY2);

export default function QueryWidget() {
    // const { loading, error, data } = useQuery(TRADES_QUERY1);

    // console.log("useQuery (1) loading: ", loading);
    // console.log("useQuery (1) error: ", error);
    // console.log("useQuery (1) data: ", data);

    // const {
    //     loading: loading2,
    //     error: error2,
    //     data: data2,
    // } = useQuery(TRADES_QUERY2, {
    //     variables: { $TradingEntityId: process.env.REACT_APP_TRADING_ENTITY },
    // });

    // console.log("useQuery (2) loading: ", loading2);
    // console.log("useQuery (2) error: ", error2);
    // console.log("useQuery (2) data: ", data2);

    const Button = ({ type }) => {
        return <button className={"queryWidgetButton " + type}>{type}</button>;
    };

    return (
        <div className='queryWidget'>
            <h3 className='queryWidgetTitle'>GraphQL Query Widget</h3>
            <table className='queryWidgetTable'>
                <tbody>
                    <tr className='queryWidgetTr'>
                        <th className='queryWidgetTh'>Customer</th>
                        <th className='queryWidgetTh'>Date</th>
                        <th className='queryWidgetTh'>Amount</th>
                        <th className='queryWidgetTh'>Status</th>
                    </tr>
                    <tr className='queryWidgetTr'>
                        <td className='queryWidgetUser'>
                            <img
                                src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                alt=''
                                className='queryWidgetImg'
                            />
                            <span className='queryWidgetName'>Susan Carol</span>
                        </td>
                        <td className='queryWidgetDate'>2 Jun 2021</td>
                        <td className='queryWidgetAmount'>$122.00</td>
                        <td className='queryWidgetStatus'>
                            <Button type='Approved' />
                        </td>
                    </tr>
                    <tr className='queryWidgetTr'>
                        <td className='queryWidgetUser'>
                            <img
                                src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                alt=''
                                className='queryWidgetImg'
                            />
                            <span className='queryWidgetName'>Susan Carol</span>
                        </td>
                        <td className='queryWidgetDate'>2 Jun 2021</td>
                        <td className='queryWidgetAmount'>$122.00</td>
                        <td className='queryWidgetStatus'>
                            <Button type='Approved' />
                        </td>
                    </tr>
                    <tr className='queryWidgetTr'>
                        <td className='queryWidgetUser'>
                            <img
                                src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                alt=''
                                className='queryWidgetImg'
                            />
                            <span className='queryWidgetName'>Susan Carol</span>
                        </td>
                        <td className='queryWidgetDate'>2 Jun 2021</td>
                        <td className='queryWidgetAmount'>$122.00</td>
                        <td className='queryWidgetStatus'>
                            <Button type='Approved' />
                        </td>
                    </tr>
                    <tr className='queryWidgetTr'>
                        <td className='queryWidgetUser'>
                            <img
                                src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                alt=''
                                className='queryWidgetImg'
                            />
                            <span className='queryWidgetName'>Susan Carol</span>
                        </td>
                        <td className='queryWidgetDate'>2 Jun 2021</td>
                        <td className='queryWidgetAmount'>$122.00</td>
                        <td className='queryWidgetStatus'>
                            <Button type='Approved' />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
