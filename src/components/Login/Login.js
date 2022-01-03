import { Button, FormControl, Input, InputLabel, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { useFirebase } from '../Hooks/useFirebase';

const Login = () => {
    const { logIn } = useFirebase();
    const [userInput, setUserInput] = useState({});
    const user = useSelector(selectUser);
    const handleUserInput = (e) => {
        const tmpData = { ...userInput };
        tmpData[e.target.name] = e.target.value;
        setUserInput(tmpData);
        // console.log(userInput);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        logIn(userInput.email, userInput.password);
    }
    // console.log(user);
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box sx={{ p: 8, width: "500px" }}>
                <form>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <FormControl variant="standard">
                            <InputLabel>Email</InputLabel>
                            <Input onBlur={handleUserInput} name="email" type="email" />
                        </FormControl>
                        <FormControl variant="standard" sx={{ mt: 3 }}>
                            <InputLabel>Password</InputLabel>
                            <Input onBlur={handleUserInput} name="password" type="password" />
                        </FormControl>
                        <Button onClick={handleLogin} type="submit" variant="contained" sx={{ mt: 8 }}>Login</Button>
                        <Typography variant='subtitle' sx={{ mt: 1 }}>Don't have an account? <a href="#">Sign up</a></Typography>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default Login;