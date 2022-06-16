import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./CustomerSelection.css";
import { useState } from "react";
import useCustomersData from "../../hooks/useCustomersData";

let customerOptions = [
    { value: "9", label: "🍕 Small - 9 Inches" },
    { value: "12", label: "🍕 Medium - 12 Inches" },
    { value: "14", label: "🍕 Large - 14 Inches" },
    { value: "18", label: "🍕 Extra large - 18 Inches" },
];

const CustomerSelection = ({ customer, setCustomer }) => {
    const { status, isLoading, isFetching, isSuccess, isError, data, error } =
        useCustomersData();

    if (isSuccess) {
        customerOptions = data.map(cli => {
            return {
                value: cli.ClientAccountId,
                label: `${cli.Title} (${cli.ClientAccountId})`,
            };
        });
    }

    const customTheme = theme => {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: "#888",
                primary: "green",
            },
        };
    };

    return (
        <div className='cardContainer'>
            <span className='customerSelectionTitle'>Select customer:</span>
            {isLoading && <h3>Loading customers...</h3>}
            {isSuccess && (
                <Select
                    components={makeAnimated()}
                    options={customerOptions}
                    theme={customTheme}
                    placeholder='Select Customer'
                    isSearchable
                    className='selectBox'
                    onChange={setCustomer}
                />
            )}
            <div className='selectionSummary'>
                <h5>Selected: {customer.label}</h5>
            </div>
        </div>
    );
};

export default CustomerSelection;
