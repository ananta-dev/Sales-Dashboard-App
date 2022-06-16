import './contractList.css';
import { DataGrid } from '@mui/x-data-grid';
// import { useState } from "react";
// import useCustomerSales from "../../hooks/useCustomerSales";

export default function ContractList({ customer, salesQueryResult }) {
    // const [data, setData] = useState(contractRows);

    const { status, isLoading, isFetching, isSuccess, isError, data, error } =
        salesQueryResult;

    let adjustedData = [];

    if (isSuccess) {
        adjustedData = data
            .filter(contract => contract.Quantity !== 0)
            .map(contract => {
                return {
                    id: contract.PhysicalTradeId,
                    product: `${contract.CommodityCodePart1}-${contract.CommodityCodePart2}-${contract.CommodityCodePart3}-${contract.CommodityCodePart4}-${contract.CommodityCodePart5}`,
                    quantity: `${contract.Quantity} ${contract.UnitOfMeasurementCode}`,
                    price: `${contract.PhysicalTradeBase.PhysicalTradePricing.CurrencyCode} ${contract.PhysicalTradeBase.PhysicalTradePricing.Price} ${contract.PhysicalTradeBase.PhysicalTradePricing.PriceTypeCode}`,
                    date: contract.PhysicalTradeBase.ContractDate.slice(0, -9),
                };
            });
    }

    const columns = [
        {
            field: 'id',
            headerName: 'Contract Number',
            headerClassName: 'gridHeader',
            cellClassName: 'gridCell',
            width: 200,
        },
        {
            field: 'product',
            headerName: 'Product',
            headerClassName: 'gridHeader',
            cellClassName: 'gridCell',
            width: 300,
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            headerClassName: 'gridHeader',
            cellClassName: 'gridCell',
            width: 200,
        },
        {
            field: 'price',
            headerName: 'Price',
            headerClassName: 'gridHeader',
            cellClassName: 'gridCell',
            width: 220,
        },
        {
            field: 'date',
            headerName: 'Contract Date',
            headerClassName: 'gridHeader',
            cellClassName: 'gridCell',
            width: 220,
        },
    ];

    return (
        <>
            {isLoading && (
                <div className='contractList'>
                    <h1>Loading...</h1>
                </div>
            )}
            {isSuccess && (
                <div className='contractList'>
                    <DataGrid
                        sx={{ fontSize: 16 }}
                        rows={adjustedData}
                        disableSelectionOnClick
                        columns={columns}
                        checkboxSelection
                        rowsPerPageOptions={[10, 20, 50, 100]}
                        initialState={{
                            pagination: {
                                pageSize: 10,
                            },
                        }}
                    />
                </div>
            )}
        </>
    );
}
