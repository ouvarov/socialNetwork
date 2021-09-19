import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'common/components';
import { authSignUp } from 'store/actions';

const SingUp: React.FC = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userName, setUserName] = useState<string>('');

    const isDisabled = ![email, password, userName].every(Boolean);

    const handleOneSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        dispatch(authSignUp({ email, password, userName }));
    };

    return (
        <div className="login">
            <Form onSubmit={handleOneSubmit}>
                <Input
                    id="email"
                    name="email"
                    value={email}
                    placeholder="email"
                    onChange={(e): void => setEmail(e.target.value)}
                />
                <Input
                    id="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e): void => setPassword(e.target.value)}
                />
                <Input
                    id="userName"
                    name="userName"
                    placeholder="userName"
                    value={userName}
                    onChange={(e): void => setUserName(e.target.value)}
                />
                <Button type="submit" isDisabled={isDisabled}>
                    Sign up
                </Button>
            </Form>
        </div>
    );
};

export default SingUp;
