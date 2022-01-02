import { Button, FormControl, Input, InputLabel, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Login = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box sx={{ p: 8, width: "500px" }}>
                <form>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input type="email" id="email" />
                        </FormControl>
                        <FormControl variant="standard" sx={{ mt: 3 }}>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input type="password" id="password" />
                        </FormControl>
                        <Button type="submit" variant="contained" sx={{ mt: 8 }}>Login</Button>
                        <Typography variant='subtitle' sx={{ mt: 1 }}>Don't have an account? <a href="#">Sign up</a></Typography>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Login;