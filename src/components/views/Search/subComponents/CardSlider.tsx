import { oneVillaHouse } from "@/components/utils/Types";
import Cards from "./Cards";
import { FC } from "react";

const CardSlider: FC<{ villaHouseDataArray: Array<oneVillaHouse> }> = ({ villaHouseDataArray }) => {

    let isDragging = false;
    let tabBox: any;
    const isBrowser = () => typeof window !== "undefined";

    if (isBrowser()) {
        tabBox = document.querySelector(".scrollGrab");
    }

    function mouseMoves(e: any) {
        if (!isDragging) return;
        if (tabBox) {
            tabBox.scrollLeft -= e.movementX;
        }
    };
    function mouseDown() {
        isDragging = true
    }

    function mouseUp() {
        isDragging = false
    }


    return (
        <div onMouseMove={mouseMoves} onMouseDown={mouseDown} onMouseUp={mouseUp} className="select-none flex gap-4 overflow-x-hidden scrollGrab">
            {villaHouseDataArray.map((item: oneVillaHouse, index: number) => (
                <Cards key={index + 4} villaDetail={item} />
            ))}
        </div>
    )
}

export default CardSlider