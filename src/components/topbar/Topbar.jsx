import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import { useLogout } from '../../hooks/useLogout';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Topbar() {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>Sales Dashboard App</span>
                </div>
                <div className='topRight'>
                    {!user && (
                        <>
                            <div className='topbarLogin'>
                                <Link to='/login'>Login</Link>
                            </div>
                            <div className='topbarSignup'>
                                <Link to='/signup'>Signup</Link>
                            </div>
                        </>
                    )}
                    {user && (
                        <>
                            <div className='topbarDisplayName'>
                                <p>{`logged in as ${user.displayName}`}</p>
                            </div>
                            <div className='topbarLogout'>
                                <button className='btn' onClick={logout}>
                                    Logout
                                </button>
                            </div>
                            <div className='topbarIconContainer'>
                                <NotificationsNone fontSize='large' />
                                <span className='topIconBadge'>2</span>
                            </div>
                            <div className='topbarIconContainer'>
                                <Language fontSize='large' />
                                <span className='topIconBadge'>2</span>
                            </div>
                            <div className='topbarIconContainer'>
                                <Settings fontSize='large' />
                            </div>
                            <img
                                src='https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg'
                                alt=''
                                className='topAvatar'
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
