import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Login = () => {
    return (
        <>
            <Box sx={{ margin: 'auto', p: 8, border: '2px solid black', width: "320px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" />
                    </FormControl>
                    <FormControl variant="standard" sx={{ mt: 3 }}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" />
                    </FormControl>
                    <Button variant="contained" sx={{ mt: 8 }}>Contained</Button>
                </Box>
            </Box>
        </>
    );
};

export default Login;