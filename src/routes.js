import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import NewsArticles from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index';
import NewsMain from './components/Articles/News/Main/index';
import VideoMain from './components/Articles/Videos/Main/index';
import SignIn from './components/SignIn/signin';

//Does this NEED to be a class based component?
    //no state
    //no lifecycle methods
    //no refs
class Routes extends Component {
    render(){
        console.log(this.props);
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/articles/:id" exact component={NewsArticles}/>
                    <Route path="/news" exact component={NewsMain}/>
                    <Route path="/videos" exact component={VideoMain}/>
                    <Route path="/videos/:id" exact component={VideoArticle}/>
                    <Route path="/sign-in" exact component={SignIn}/>
                    
                </Switch>
            </Layout>
        )
    }
}

export default Routes;