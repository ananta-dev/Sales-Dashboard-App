import { useQuery } from "react-query";
import axios from "axios";

const fetchCustomerSales = async ({ queryKey }) => {
    // console.log("<<<< **** starting fetchCustomerSales **** >>>>");

    const [_key, customerId] = queryKey;
    // console.log({ _key, customerId });

    if (customerId === "") return [];

    const SALES_TO_CUSTOMER_QUERY = `
    query {
	    PhysicalTradeMains( TradingEntityId : "${process.env.REACT_APP_TRADING_ENTITY}", 
        Filter: "BuyerAccount/ClientAccountId eq '${customerId}'", top: 5000 )
	    {
            BuyerAccount
            {
                CountryCode
            }
            BuyerAccountCode
            CommodityCodePart1
            CommodityCodePart2
            CommodityCodePart3
            CommodityCodePart4
            CommodityCodePart5
            ContractTermCode
            ContractTermPortCode
            CropYear
            PhysicalTradeBase
            {
                ContractDate
                PhysicalTradePricing
                {
                    CurrencyCode
                    PaymentTerm
                    {
                        PaymentTermDescription
                        PaymentTermId
                    }
                    Price
                    PriceTypeCode
                    Value
                }
            }
            PhysicalTradeId
            PortOfDestination
            {
                CountryCode
                PortId
            }
            PortOfDestinationCode
            Quantity
            UnitOfMeasurementCode
        }
    }`;

    const { data } = await axios({
        method: "post",
        url: process.env.REACT_APP_ITAS_SERVICES_URL,
        headers: {
            authorization: `bearer ${process.env.REACT_APP_ITAS_TOKEN}`,
            "Content-Type": "text/plain",
        },
        data: SALES_TO_CUSTOMER_QUERY,
    });

    // console.log("finished call to axios in fetchCustomerSales.");
    // console.log("data retrieved: ", data);

    return data.Data.PhysicalTradeMains;
};

const useCustomerSales = customerId => {
    return useQuery(["customer-sales", customerId], fetchCustomerSales, {});
};

export default useCustomerSales;
