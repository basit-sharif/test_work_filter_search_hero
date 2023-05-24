"use client"
import { FilterIcon } from "@/components/assets"
import Image from "next/image"
import { CiSearch } from "react-icons/ci"
import { FC, useEffect, useState } from "react"
import { ProductType, oneVillaHouse } from "@/components/utils/Types"
import Cards from "./subComponents/Cards"
import CardSlider from "./subComponents/CardSlider"
import LoadingState from "@/components/shared/LoadingState"


const Search: FC<{ villaHouseDataArray: ProductType }> = ({ villaHouseDataArray }) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [orignalDataToItrate, setOrignalDataToItrate] = useState(villaHouseDataArray?.products)

    // filter by using filter on array
    function performFiltrationProcess() {
        let filteredBySearchWordsArray: Array<oneVillaHouse> = villaHouseDataArray.products.filter((item: oneVillaHouse) =>
            (item.description).indexOf(searchValue.toLowerCase()) !== -1 || (item.vilaName).indexOf(searchValue.toLowerCase()) !== -1)
        console.log("filter :", searchValue, filteredBySearchWordsArray)
        setOrignalDataToItrate(filteredBySearchWordsArray);
    };

    // Enter Handler
    function ApplyFilter(e: any) {
        setLoading(true);
        if (e.key === "Enter" && e.keyCode == 13) {
            performFiltrationProcess();
        };
        setLoading(false);
    };

    // Search value change handler
    function setValueAndApplyFilter() {
        setLoading(true);
        if (searchValue.length !== 0) {
            performFiltrationProcess();
        } else {
            setOrignalDataToItrate(villaHouseDataArray?.products);
        }
        setLoading(false);
    };

    useEffect(() => {
        setValueAndApplyFilter();
    }, [searchValue])

    return (
        <div className='px-6 md:px-14 bg-white'>
            <div className='max-w-7xl mx-auto py-10 space-y-6'>
                <h1>Explore Home</h1>
                <div className="flex flex-col md:flex-row gap-2 justify-between">
                    <div className="flex items-center relative">
                        <div className="absolute left-3">
                            <CiSearch size={22} />
                        </div>
                        <input
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyDown={ApplyFilter}
                            type='text'
                            placeholder='Search'
                            className='searchInputField'
                        />
                    </div>
                    <button aria-label="Filterationg function" className="flex justify-start bg-secondaryWhite hover:bg-gray-200 duration-150 px-5 py-2 rounded-lg items-center gap-1">
                        <Image className="w-7" src={FilterIcon} alt="Filter icon" />
                        Filters
                    </button>
                </div>
                {isLoading ? <LoadingState /> : <CardSlider villaHouseDataArray={orignalDataToItrate} />}
            </div>
        </div>
    )
}

export default Search