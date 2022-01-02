import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Login = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black', height: '100%' }}>
            <Box sx={{ p: 8, width: "320px", backgroundColor: '#eee' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" />
                    </FormControl>
                    <FormControl variant="standard" sx={{ mt: 3 }}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" />
                    </FormControl>
                    <Button variant="contained" sx={{ mt: 8 }}>Login</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;