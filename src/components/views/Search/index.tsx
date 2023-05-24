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
    const [isFilterOpen, setFilterOpen] = useState(false);
    const [bedRoomValue, setBedRoomValue] = useState("32");

    function handleFilterClick() {
        setFilterOpen(!isFilterOpen)
    }

    // filter by using filter on array
    function performFiltrationProcess() {
        let filteredBySearchWordsArray: Array<oneVillaHouse> = villaHouseDataArray.products.filter((item: oneVillaHouse) =>
            (item.vilaName).indexOf(searchValue.toLowerCase()) !== -1 || (item.description).indexOf(searchValue.toLowerCase()) !== -1)
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

    function setValueAndApplyFilterForBedRoom() {
        setLoading(true);
        let filteredBySearchWordsArray: Array<oneVillaHouse> = villaHouseDataArray.products.filter((item: oneVillaHouse) => Number(item.debroom) <= Number(bedRoomValue))
        setOrignalDataToItrate(filteredBySearchWordsArray);
        setLoading(false);
    }

    useEffect(() => {
        setValueAndApplyFilter();
        setValueAndApplyFilterForBedRoom();
    }, [searchValue, bedRoomValue]);

    if (!orignalDataToItrate) {
        return <LoadingState />
    }

    return (
        <div className='md:pl-14 2xl:pl-0 bg-white'>
            <div className='max-w-7xl mx-auto py-10 space-y-6'>
                <h1>Explore Home</h1>
                <div className="flex flex-col md:flex-row gap-2 justify-between pr-0 md:pr-14 2xl:pr-0">
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
                    <button aria-label="Filterationg function" className="relative flex justify-start bg-secondaryWhite hover:bg-gray-200 duration-150 px-5 py-2 rounded-lg items-center gap-1">
                        <Image className="w-7" src={FilterIcon} alt="Filter icon" />
                        <p onClick={handleFilterClick}>Filters</p>
                        <div className={`${isFilterOpen ? "flex" : "hidden"} text-primaryLight absolute top-12 right-0 shadow-md py-3 px-6 bg-secondaryWhite z-10`}>
                            <div>
                                <div className="flex justify-between text-sm">
                                    <label htmlFor="bedRoom">Bed Room:</label>
                                    <p>{bedRoomValue}</p>
                                </div>
                                <input
                                    id="bedRoom"
                                    min={0}
                                    max={32}
                                    value={bedRoomValue}
                                    onChange={(e) => setBedRoomValue(e.target.value)}
                                    type="range"
                                />
                            </div>
                        </div>
                    </button>
                </div>
                <h2 className="mt-2 text-PrimaryBlack opacity-90">Top Picks For You - Amsterdam</h2>
                {isLoading ? <LoadingState /> : <CardSlider villaHouseDataArray={orignalDataToItrate} />}
            </div>
        </div>
    )
}

export default Search