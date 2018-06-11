import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import NewsArticles from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index';
import NewsMain from './components/Articles/News/Main/index';
import VideoMain from './components/Articles/Videos/Main/index';
import SignIn from './components/SignIn/signin';
import Dashboard from './components/Dashboard/dashboard';

import PrivateRoutes from './components/AuthRoutes/privateRoutes';
import PublicRoutes from './components/AuthRoutes/publicRoutes';

//Does this NEED to be a class based component?
    //no state
    //no lifecycle methods
    //no refs
const Routes = (props) => {
    return(
        <Layout  user ={props.user}>
            <Switch>
                <PublicRoutes {...props} restricted={false} path="/" exact component={Home}/>
                <PublicRoutes {...props} restricted={false} path="/articles/:id" exact component={NewsArticles}/>
                <PublicRoutes {...props} restricted={false} path="/news" exact component={NewsMain}/>
                <PublicRoutes {...props} restricted={false} path="/videos" exact component={VideoMain}/>
                <PublicRoutes {...props} restricted={false} path="/videos/:id" exact component={VideoArticle}/>
                <PublicRoutes {...props} restricted={true} path="/sign-in" exact component={SignIn}/>
                <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}/>
                    
            </Switch>
        </Layout>
    )
    
}

export default Routes;