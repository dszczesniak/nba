import React from 'react';
import Slick from 'react-slick';
import style from './slider.css';
import { Link } from 'react-router-dom';

const SliderTemplates = (props) => {

    let template = null;

    const settings = {
        dots: true,
        infinite: true,
        arrowss: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 3000,
        ...props.settings //overwrite from props
    }

    switch(props.type){
        case('featured'):
            template = props.data.map( (item, i) => {
                return(
                        <div key={i} className={style.featured_item}>
                            <div className={style.featured_image}
                                style={{
                                    background:`url(../images/articles/${item.image})`
                                }}>
                            </div>
                            <Link to={`/articles/${item.id}`}>
                                <div className={style.featured_caption}>
                                    {item.title}
                                </div>
                            </Link>
                        </div>
                )
            })
            break;
        default:
            template = null;
    }

    return(
        <Slick {...settings}>
            {template}
        </Slick>
    )

}

export default SliderTemplates;