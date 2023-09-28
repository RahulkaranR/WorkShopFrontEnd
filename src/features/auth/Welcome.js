import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import React from 'react'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()
    const data = new Date();
    const today = new Intl.DateTimeFormat('en-US', {dataStyle: 'full', timeStyle: 'long'}).format(data)

    const content = (
        <section className="welcome" >
            <p>{today}</p>
            <h1>Welcome {username}!</h1>
            <p><Link to='/dash/notes'>View techNotes</Link></p>
            <p><Link to='/dash/notes/new'>Add new techNotes</Link></p>
            { (isManager || isAdmin) && <p><Link to='/dash/users'>View User Settings</Link></p>}
            { (isManager || isAdmin) && <p><Link to='/dash/users/new'>Add new User</Link></p>}
        </section>
    )

  return content;
}

export default Welcome