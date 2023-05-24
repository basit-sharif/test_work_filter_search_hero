import { ProductType } from "@/components/utils/Types"
import { FC } from "react"
import CardSlider from "../Search/subComponents/CardSlider"
import MultipleItems from "../Slick"

const AlsoLookingSlider: FC<{ villaHouseDataArray: ProductType }> = ({ villaHouseDataArray }) => {
    return (
        <div className='md:pl-14 2xl:pl-0 bg-white'>
            <div className='max-w-7xl mx-auto py-10 space-y-4'>
                <h3 className="mt-2 text-PrimaryBlack opacity-90">Members looking to travel to your location - Ljubjana</h3>
                <MultipleItems villaHouseDataArray={villaHouseDataArray.products} />
                {/* custom slider */}
                {/* <CardSlider villaHouseDataArray={villaHouseDataArray.products} /> */}
            </div>
        </div>
    )
}

export default AlsoLookingSlider