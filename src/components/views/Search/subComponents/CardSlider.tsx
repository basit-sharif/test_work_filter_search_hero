import { oneVillaHouse } from "@/components/utils/Types";
import Cards from "./Cards";
import { FC } from "react";

const CardSlider: FC<{ villaHouseDataArray: Array<oneVillaHouse> }> = ({ villaHouseDataArray }) => {
    let initialX: number;
    let isDragging = false;
    let tabBox: any;

    const isBrowser = () => typeof window !== "undefined";

    if (isBrowser()) {
        tabBox = document.querySelector(".scrollGrab");
    }

    // Desktop functions
    function mouseMoves(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            tabBox.scrollLeft -= e.movementX;
        }
    };
    function mouseDown() {
        isDragging = true;
    }
    function mouseUp() {
        isDragging = false
    }

    // mobile functions
    function mouseMovesForMobile(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            var currentX = e.touches[0].clientX;
            var movementX = currentX - initialX;
            tabBox.scrollLeft -= movementX / 3;
        }
    };
    function mouseDownForMobile(e: any) {
        isDragging = true;
        initialX = e.touches[0].clientX;
    }



    return (
        <div
            onMouseMove={mouseMoves}
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            className="select-none flex gap-4 overflow-x-hidden scrollGrab"
            onTouchMove={mouseMovesForMobile}
            onTouchStart={mouseDownForMobile}
            onTouchEnd={mouseUp}
        >
            {villaHouseDataArray.map((item: oneVillaHouse, index: number) => (
                <Cards key={index + 4} villaDetail={item} />
            ))}
        </div>
    )
}

export default CardSlider