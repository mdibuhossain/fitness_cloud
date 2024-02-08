import { CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoading } from '../../features/isloadingSlice';
import { selectUser } from '../../features/userSlice';
import { useFirebase } from '../../Hooks/useFirebase';

const RequireAuth = ({ children }) => {
    const { } = useFirebase(); // necessary for RequireAuth
    const user = useSelector(selectUser)
    const isLoading = useSelector(selectIsLoading);
    const location = useLocation();
    if (isLoading)
        return <CircularProgress color="inherit" />
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} />
    }
    return children;
};

export default RequireAuth;