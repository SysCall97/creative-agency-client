import React, { useContext } from 'react';
import { userContext } from '../../App';

const Topbar = () => {
    const { user } = useContext(userContext);
    const [loggedinUser] = user;
    return (
        <div className="mw-100 bg-white pt-4 pb-4 pl-4 pr-4 d-flex justify-content-between">
            <h3>{document.title}</h3>
            <h5 className="font-weight-bold">{loggedinUser.displayName}</h5>
        </div>
    );
};

export default Topbar;