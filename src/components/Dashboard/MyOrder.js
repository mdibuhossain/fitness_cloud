import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { selectcourses } from '../../features/coursesSlice';
import { CircleNotificationsTwoTone } from '@mui/icons-material';

const MyOrder = () => {
    // const { user, token } = useAuth();
    // const [orderList, setOrderList] = React.useState([]);

    // React.useEffect(() => {
    //     fetch(`https://shielded-headland-50795.herokuapp.com/orders?email=${user?.email}`, {
    //         headers: {
    //             'authorization': `Bearer ${token}`
    //         }
    //     }).then(res => res.json())
    //         .then(data => setOrderList(data))
    // }, [user?.email, token, orderList])

    const user = useSelector(selectUser);
    const [enroll, setEnroll] = React.useState({});
    const courses = useSelector(selectcourses);
    const [currentCourses, setCurrentCourses] = React.useState([]);
    React.useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setEnroll(data?.enroll))
    }, [user])
    React.useEffect(() => {
        const newData = [];
        for (const item in enroll) {
            newData.push(courses.find(p => p._id === item));
        }
        setCurrentCourses(newData);
    }, [enroll, courses])
    console.log(currentCourses);

    const handleCancelOrder = async (id) => {
        const conf = await window.confirm('Are you sure want to delete your order?');
        let tempOrder = await currentCourses?.filter(item => item?._id !== id);
        setCurrentCourses(tempOrder);
        tempOrder = tempOrder.map(item => item?._id);
        const remainOrder = await tempOrder.reduce((acc, curr) => (acc[curr] = 1, acc), {});
        const postOrder = { id: { ...remainOrder }, email: user.email };
        console.log(postOrder);
        if (conf) {
            fetch('http://localhost:5000/users/over_ride_enroll', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(postOrder)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    // console.log(orderList);
    // console.log(orderList);

    return (
        <>
            <Typography variant="h5" sx={{ my: 2 }}>My courses: {currentCourses.length}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product name</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentCourses.map((order) => (
                            <TableRow
                                key={order?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="order?">{order?.classname}</TableCell>
                                <TableCell align="left">{order?.schedule}</TableCell>
                                <TableCell align="left">
                                    <Button onClick={() => handleCancelOrder(order?._id)} variant='contained' sx={{ background: '#F42828 !important' }}>Cancel</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default MyOrder;