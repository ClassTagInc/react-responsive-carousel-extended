import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel';

function _onChange() {
    console.log('onChange', arguments);
}

function _onClickItem() {
    console.log('onClickItem', arguments);
}

function _onClickThumb() {
    console.log('onClickThumb', arguments);
}

// Begin DemoSliderControls
const DemoCarousel = () => {
    const [items, setItems] = useState(["assets/1.jpeg", "assets/2.jpeg", "assets/3.jpeg", "assets/4.jpeg", "assets/5.jpeg", "assets/6.jpeg"]);

    return (
        <Carousel
        showArrows
        onClickItem={_onClickItem}
        onChange={_onChange}
        onClickThumb={_onClickThumb}
        showThumbs={false}
        showStatus={false}
        timeout={1000}
        >
            {items.map(item => (
                <div key={item}>
                  <img src={item}/>
                  <div className="legend" onClick={() => setItems(items.filter(i => i !=item))}>{item}</div>
                </div>
            ))}
        </Carousel>
    )
};

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
