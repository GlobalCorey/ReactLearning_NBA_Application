import React from 'react';
import NewsSlider from '../../../widgets/NewsSlider/slider';
import NewsList from '../../../widgets/NewsList/newsList';

const NewsMain = () => (
    <div>
            <NewsSlider
                type="featured"
                start={0}
                amount={3}
                settings={{
                    dots:false
                }}
            />
            <NewsList
                type="image-card"
                loadmore={true}
                start={3}
                amount={5}
            />
        </div>
)


export default NewsMain;