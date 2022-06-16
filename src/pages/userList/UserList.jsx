import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../data/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = id => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        {
            field: "id",
            headerName: "ID",
            headerClassName: "gridHeader",
            cellClassName: "gridCell",
            width: 90,
        },
        {
            field: "user",
            headerName: "User",
            headerClassName: "gridHeader",
            cellClassName: "gridCell",
            width: 200,
            renderCell: params => {
                return (
                    <div className='userListUser'>
                        <img
                            className='userListImg'
                            src={params.row.avatar}
                            alt=''
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        {
            field: "email",
            headerName: "Email",
            headerClassName: "gridHeader",
            cellClassName: "gridCell",
            width: 200,
        },
        {
            field: "status",
            headerName: "Status",
            headerClassName: "gridHeader",
            cellClassName: "gridCell",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            headerClassName: "gridHeader",
            cellClassName: "gridCell",
            width: 220,
        },
        {
            field: "action",
            headerName: "Action",
            headerClassName: "gridHeader",
            cellClassName: "gridCell",
            width: 150,
            renderCell: params => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutline
                            className='userListDelete'
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className='userList'>
            <DataGrid
                sx={{ fontSize: 16 }}
                rows={data}
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
    );
}
