import { Button, CircularProgress, FormControl, Input, InputLabel, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../../features/userSlice';
import { useFirebase } from '../../Hooks/useFirebase';
import gym1 from '../../assets/gym1.jpg';
import { selectIsLoading } from '../../features/isloadingSlice';

const LogIn = () => {
    const { logIn } = useFirebase();
    const [userInput, setUserInput] = useState({});
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectIsLoading);
    const handleUserInput = (e) => {
        const tmpData = { ...userInput };
        tmpData[e.target.name] = e.target.value;
        setUserInput(tmpData);
        // console.log(userInput);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        logIn(userInput.email, userInput.password);
        e.target.reset();
    }
    // console.log(user);
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box sx={{ p: 8, width: "500px" }}>
                <form onSubmit={handleLogin}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                        <Box sx={{ mb: 5 }}>
                            <img style={{ width: 'calc(100% - 50px)' }} src={gym1} alt="" />
                        </Box>
                        <FormControl variant="standard">
                            <InputLabel>Email</InputLabel>
                            <Input onBlur={handleUserInput} name="email" type="email" />
                        </FormControl>
                        <FormControl variant="standard" sx={{ mt: 3 }}>
                            <InputLabel>Password</InputLabel>
                            <Input onChange={handleUserInput} name="password" type="password" />
                        </FormControl>
                        <Button type="submit" variant="contained" sx={{ mt: 8 }}>
                            {
                                isLoading ? <CircularProgress color="inherit" size="25px" /> : 'Login'
                            }
                        </Button>
                        <Typography variant='subtitle' sx={{ mt: 1 }}>Don't have an account? <NavLink to="/register">Sign up</NavLink></Typography>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default LogIn;