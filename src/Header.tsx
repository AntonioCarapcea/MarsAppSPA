import React from 'react';
import './App.scss';
import { Link } from "react-router-dom";
export function Header() {
    return (
        <div className="Header">
            <table className="HeaderTable">
                <tbody>
                    <tr>
                        <th>
                            <Link className="NavLink" to="/clicker">
                                Clicker
                            </Link>
                        </th>
                        <th>
                            <Link className="NavLink" to="/">
                                NASA
                            </Link>
                        </th>
                        <th>
                            <Link className="NavLink" to="/rovers">
                                Rovers
                            </Link>
                        </th>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}