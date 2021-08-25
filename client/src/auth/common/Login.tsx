import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Form, Button } from 'common/components';
import routePaths from 'routers/routePaths';
import { loginUser } from 'auth/api/services/AuthServices';
import { setProfile } from 'store/actions';

const Login: React.FC = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleOneSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loginUser(email, password).then(response => {
            dispatch(setProfile(response.data));
            localStorage.setItem('token', response.data.accessToken);
        });
    };

    return (
        <Form onSubmit={handleOneSubmit}>
            <Input id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
            <Input
                id="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="password"
            />
            <Button type="submit">Log In</Button>
            <Link to={routePaths.signUpPage()}>Sign up</Link>
        </Form>
    );
};

export default Login;
