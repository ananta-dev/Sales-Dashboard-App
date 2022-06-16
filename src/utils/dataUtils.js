export function getNowString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");
    const hour = `${now.getHours()}`.padStart(2, "0");
    const minute = `${now.getMinutes()}`.padStart(2, "0");
    const second = `${now.getSeconds()}`.padStart(2, "0");
    return `${year}-${month}-${day}-${hour}-${minute}-${second}`;
}

export const genEmptyChartData = () => {
    let myEmptyChartData = [];
    // console.log("before loop...");
    for (let year = 2020; year <= 2022; year++) {
        let end = year === 2022 ? 4 : 12;
        for (let month = 1; month <= end; month++) {
            let monthString = `${month}`.padStart(2, "0");
            let newObject = {};

            // console.log("just assigned empty object", { newObject });
            newObject.name = `${year}-${monthString}`;
            newObject.Quantity = 0;
            // console.log({ year, month, newObject, myEmptyChartData });
            myEmptyChartData = [...myEmptyChartData, newObject];
        }
    }

    // const copiedArray = JSON.parse(JSON.stringify(myEmptyChartData));

    // console.log("inside genChartData", { myEmptyChartData });
    // console.log("inside genChartData", { copiedArray });
    return myEmptyChartData;
};

// export const genChartData2 = () => {
//     let newArray = [
//         {
//             name: "2020-01",
//         },
//         {
//             name: "2020-02",
//         },
//         {
//             name: "2020-03",
//         },
//         {
//             name: "2020-04",
//         },
//         {
//             name: "2020-05",
//         },
//         {
//             name: "2020-06",
//         },
//         {
//             name: "2020-07",
//         },
//         {
//             name: "2020-08",
//         },
//         {
//             name: "2020-09",
//         },
//         {
//             name: "2020-10",
//         },
//         {
//             name: "2020-11",
//         },
//         {
//             name: "2020-12",
//         },
//         {
//             name: "2021-01",
//         },
//         {
//             name: "2021-02",
//         },
//         {
//             name: "2021-03",
//         },
//         {
//             name: "2021-04",
//         },
//         {
//             name: "2021-05",
//         },
//         {
//             name: "2021-06",
//         },
//         {
//             name: "2021-07",
//         },
//         {
//             name: "2021-08",
//         },
//         {
//             name: "2021-09",
//         },
//         {
//             name: "2021-10",
//         },
//         {
//             name: "2021-11",
//         },
//         {
//             name: "2021-12",
//         },
//         {
//             name: "2022-01",
//         },
//         {
//             name: "2022-02",
//         },
//         {
//             name: "2022-03",
//         },
//         {
//             name: "2022-04",
//         },
//     ];
//     console.log({ newArray });
//     return newArray;
// };
