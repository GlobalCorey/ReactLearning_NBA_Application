import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import NewsArticles from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index';

//Does this NEED to be a class based component?
    //no state
    //no lifecycle methods
    //no refs
class Routes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/articles:id" exact component={NewsArticles}/>
                    <Route path="/videos/:id" exact component={VideoArticle}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes;