import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";
import { useState } from "react";
import { mens_kurta } from "../../../data/Men/men_kurta";

const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };

    const responsive = {
        0: {
            items: 1,
        },
        720: {
            items: 2,
        },
        1024: {
            items: 5.5,
        },
    };

    const items = mens_kurta.slice(0,10).map((item) => <HomeSectionCard product={item}/>);
    return (
        <div className="px-4 lg:px-8 ">
            <div className="relative p-5 ">
                <AliceCarousel
                    mouseTracking
                    infinite
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    activeIndex={activeIndex}
                    onSlideChanged={syncActiveIndex}
                />
                {activeIndex !== items.length - 5 && (
                    <Button
                        className="z-50 bg-white"
                        varient="contained"
                        sx={{ position: "absolute", top: "8rem", right: "0rem" }}
                        color="white"
                        aria-label="next"
                        onClick={slideNext}
                    >
                        <ChevronRightIcon />
                    </Button>
                )}

                {activeIndex !== 0 && <Button
                    onClick={slidePrev}
                    className="z-50 bg-white"
                    varient="contained"
                    sx={{ position: "absolute", top: "8rem", left: "0rem" }}
                    color="white"
                    aria-label="next"
                >
                    <ChevronLeftIcon />
                </Button>}
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
