import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Input, Form, Button } from 'common/components';

import { authLoginIn } from 'store/actions';
import routePaths from 'routers/routePaths';

const Login: React.FC = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const isDisabled = ![email, password].every(Boolean);

    const handleOneSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(authLoginIn({ email, password }));
    };

    return (
        <Form onSubmit={handleOneSubmit}>
            <Input
                id="email"
                name="email"
                value={email}
                onChange={(e): void => setEmail(e.target.value)}
                placeholder="email"
            />
            <Input
                id="password"
                name="password"
                value={password}
                onChange={(e): void => setPassword(e.target.value)}
                placeholder="password"
            />
            <Button isDisabled={isDisabled} type="submit">
                Log In
            </Button>
            <Link to={routePaths.signUpPage()}>Sign up</Link>
        </Form>
    );
};

export default Login;
