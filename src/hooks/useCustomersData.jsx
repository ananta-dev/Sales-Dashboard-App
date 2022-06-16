import { useQuery } from "react-query";
import axios from "axios";

const fetchCustomers = async () => {
    const CUSTOMERS_QUERY = `
    query { ClientAccountBases(TradingEntityId: "${process.env.REACT_APP_TRADING_ENTITY}", top: 5000)
	    {
            ClientAccountId
            Title 
            Country 
		    {
			    CountryDescription 
		    }
            ClientType
            {
                ClientTypeCode
                ClientTypeDescription
            }
	    }
    }`;

    const { data } = await axios({
        method: "post",
        url: process.env.REACT_APP_ITAS_SERVICES_URL,
        headers: {
            authorization: `bearer ${process.env.REACT_APP_ITAS_TOKEN}`,
            "Content-Type": "text/plain",
        },
        data: CUSTOMERS_QUERY,
    });

    return data.Data.ClientAccountBases;
};

const useCustomersData = () => {
    return useQuery(["customers"], fetchCustomers, {});
};

export default useCustomersData;
