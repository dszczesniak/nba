import React, { Component } from 'react';
import NewsSlider from '../Widgets/NewsSlider/slider';
import NewsList from '../Widgets/NewsList/newsList';
import VideosList from '../Widgets/VideosList/videosList';

class Home extends Component {
    render() {
        return (
            <div>
                <NewsSlider 
                    type="featured"
                    start={0}
                    amount={4}
                    settings={{
                        dots:false,
                        arrows:false
                    }}
                />

                <NewsList 
                    type="card"
                    loadmore={true}
                    start={4}
                    amount={3}
                />

                <VideosList 
                    type="card"
                    title={true}
                    loadmore={true}
                    start={0}
                    amount={3}
                />
            </div>
        );
    }
}

export default Home;