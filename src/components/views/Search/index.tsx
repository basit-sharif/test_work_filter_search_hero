import { FilterIcon } from "@/components/assets"
import Image from "next/image"
import { CiSearch } from "react-icons/ci"

const Search = () => {
    return (
        <div className='px-14 bg-white'>
            <div className='max-w-7xl mx-auto py-10 space-y-6'>
                <h1>Explore Home</h1>
                <div className="flex justify-between">
                    <div className="flex items-center relative">
                        <div className="absolute left-3">
                            <CiSearch size={22} />
                        </div>
                        <input type='text' placeholder='Search' className='searchInputField' />
                    </div>
                    <button aria-label="Filterationg function" className="flex bg-secondaryWhite hover:bg-gray-200 duration-150 px-5 py-2 rounded-lg items-center gap-1">
                        <Image className="w-7" src={FilterIcon} alt="Filter icon" />
                        Filters
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search