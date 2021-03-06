import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './hoc/Layout/layout'

import NewsArticle from './components/Articles/News/Post/newsArticle';
import VideoArticle from './components/Articles/Videos/Video/videosArticle';
import NewsMain from './components/Articles/News/Main/mainNews';
import VideosMain from './components/Articles/Videos/Main/mainVideos';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/articles/:id" exact component={NewsArticle} />
                    <Route path="/videos/:id" exact component={VideoArticle} />
                    <Route path="/news" exact component={NewsMain} />
                    <Route path="/videos" exact component={VideosMain} />
                </Switch>
            </Layout>
            
        );
    }
}

export default Routes;