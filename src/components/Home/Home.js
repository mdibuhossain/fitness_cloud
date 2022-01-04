import { Button, Typography } from '@mui/material';
import React from 'react';

const Home = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#aaa', border: '5px solid blue' }}>
            <Typography>
                <Button onClick={() => document.location.replace('/test')}>HOME → Go to TEST</Button>
            </Typography>
        </div>
    );
};

export default Home;