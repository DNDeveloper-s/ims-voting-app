import React, {useState} from 'react';
import {useTheme} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {unSplashImages} from "../../helpers/constants";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ImageCarousel = ({images}) => {
    const [activeStep, setActiveStep] = useState(0);
    const theme = useTheme();

    function handleStepChange(step) {
        setActiveStep(step)
    }

    return (
        <div className="images-holder">
            {
                images ?
                    <div className='image-placeholder'>
                        <img
                            src="https://images.unsplash.com/photo-1540908390241-82158ab62887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE2MjM0N30&w=1920&fit=max"
                            alt=""/>
                    </div>
                    :
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {unSplashImages.map((step, index) => (
                            <div key={index}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <img className="ims_dashboard-carousel-image" src={step} alt="IMS Club Voting"/>
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
            }
        </div>
    );
};

export default ImageCarousel;
