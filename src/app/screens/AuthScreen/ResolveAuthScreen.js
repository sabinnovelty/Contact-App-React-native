import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../../context/AuthContext';

const ResolveAuthScreen = () => {
    let { onAuthStateChanged } = useContext(AuthContext);

    useEffect(() => {
        onAuthStateChanged()
    }, []);

    return null;
};



export default ResolveAuthScreen;
