import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'common/components';
import { registrationUser } from 'auth/api/services/AuthServices';
import { setUser } from 'store/actions';

const SingUp: React.FC = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userName, setUserName] = useState<string>('');

    const handleOneSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registrationUser(email, password, userName).then(response => {
            dispatch(setUser(response.data));
            localStorage.setItem('token', response.data.accessToken);
        });
    };

    return (
        <div className="login">
            <Form onSubmit={handleOneSubmit}>
                <Input
                    id="email"
                    name="email"
                    value={email}
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    id="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Input
                    id="userName"
                    name="userName"
                    placeholder="userName"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <Button type="submit">Sign up</Button>
            </Form>
        </div>
    );
};

export default SingUp;
