import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import style from './sideNav.css';
import FontAwesome from 'react-fontawesome';
import { firebase } from '../../../firebase';

const SideNavItems = (props) => {
// console.log(props);

const items = [
    {
        type: style.option, 
        icon: 'home',
        text: 'Home',
        link: '/',
        login: ''
    },
    {
        type: style.option, 
        icon: 'file-text-o',
        text: 'News',
        link: '/news',
        login: ''
    },
    {
        type: style.option, 
        icon: 'play',
        text: 'Videos',
        link: '/videos',
        login: ''
    },
    {
        type: style.option, 
        icon: 'sign-in',
        text: 'Dashboard',
        link: '/dashboard',
        login: false
    },
    {
        type: style.option, 
        icon: 'sign-in',
        text: 'Sign in',
        link: '/sign-in',
        login: true
    },
    {
        type: style.option, 
        icon: 'sign-out',
        text: 'Sign out',
        link: '/sign-out',
        login: false
    }
]

const element = (item, i) => (
    <div key={i} className={item.type}>
        <Link to={item.link}>
        <FontAwesome name={item.icon}/>
        {item.text}
        </Link>
    </div>
)

const restricted = (item, i) =>{
    let template = null;

    //Shows the Sign-In option since item.login is true for item Sign-In
    if(props.user === null && item.login){
        template = element(item, i);
    }
    //If user is logged in and login == false then we show the sign-out and dashboard option
    if(props.user !== null && !item.login){
        //If the item's link is sign-out, then we return the sign-out template and provide an onClick
        // fnc to sign the user out through firebase then kick the user to home
        if(item.link === '/sign-out'){
            template = (
                <div key={i} 
                    className={item.type}
                    onClick={()=>{
                        firebase.auth().signOut()
                        .then(() =>{
                            props.history.push('/');
                        })
                    }}
                    >
                    <FontAwesome name={item.icon}/>
                    {item.text} 
                </div>
            )
        }
        //This case handles items who's link != sign-out (dashboard)
        else{
            template = element(item,i);
        }
    }

    return template;
}

const showItems = () => {
    return items.map( (item, i) =>{
        return item.login !== '' ?
            restricted(item, i)
            :
            element(item, i)
    })
}

    return (
        <div>
            {showItems()}
        </div>
    )
}

export default withRouter(SideNavItems);