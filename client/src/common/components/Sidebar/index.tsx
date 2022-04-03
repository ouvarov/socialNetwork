import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { routePaths } from 'routers';
import { StateTypes } from 'store/types';

const Sidebar: React.FC = () => {
    const user = useSelector((state: StateTypes) => state.user?.data);

    return (
        <aside className="sidebar">
            <div className="sidebar__wrap">
                <NavLink to={routePaths.usersPage()} className="nav-link" activeClassName="nav-link--active">
                    Users List
                </NavLink>
                <NavLink
                    to={routePaths.profilePage(user?.id ?? '')}
                    className="nav-link"
                    activeClassName="nav-link--active"
                >
                    Profile
                </NavLink>
                <NavLink to={routePaths.chatsPage()} className="nav-link" activeClassName="nav-link--active">
                    Chat
                </NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;
