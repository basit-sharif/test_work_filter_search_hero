"use client"
import { MdOutlineBed } from "react-icons/md"
import { FaShower } from "react-icons/fa"
import { GiTable } from "react-icons/gi"
import { oneVillaHouse } from "@/components/utils/Types"
import Image from "next/image"
import { FC } from "react"

const Cards: FC<{ villaDetail: oneVillaHouse }> = ({ villaDetail }) => {
    return (
        <div className="relative flex flex-col flex-shrink-0 shadow-md bg-secondaryWhite rounded-lg space-y-4 w-[22rem] pb-4">
            <Image className="h-[12rem] object-cover rounded-t-lg flex-shrink-0 w-full" width={3000} height={3000} src={villaDetail.imageUrl} alt={villaDetail.subDescription} />
            <div className="absolute inset-0 bg-white opacity-0 z-10" />
            <div className="px-3 text-primaryLight">
                <p className="text-xs font-light">{villaDetail.subDescription}</p>
                <h2 className="text-primaryDark font-semibold tracking-wider text-base">{villaDetail.vilaName}</h2>
                <p className="text-sm font-light">{villaDetail.description}</p>
                <div className="flex gap-4 text-sm mt-1 items-center">
                    <div className="flex items-center">
                        <MdOutlineBed size={21} />
                        {villaDetail.debroom}
                    </div>
                    <div className="flex -mt-1 items-baseline">
                        <GiTable size={21} />
                        {villaDetail.workStation}
                    </div>
                    <div className="flex items-center">
                        <FaShower size={17} />
                        {villaDetail.bathroom}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards