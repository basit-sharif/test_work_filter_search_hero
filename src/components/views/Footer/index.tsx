const Footer = () => {
    return (
        <div className="md:pl-14 2xl:pl-0">
            <div className="flex flex-col justify-start items-start max-w-7xl mx-auto ">
                <h5 className="mb-2 text-xl text-PrimaryBlack">Explore options</h5>
                <form className="flex flex-col md:flex-row items-start md:items-center p-5 bg-secondaryWhite rounded-lg text-primaryLight gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="destination">where do you want to go</label>
                        <input className="mt-2 ring-1 ring-primaryLight focus:outline-none focus:shadow-md text-primaryDark rounded-lg py-2 px-8 flex-grow" id="destination" type="text" placeholder="Search destination" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="data">where do you want to go a</label>
                        <input className="mt-2 ring-1 ring-primaryLight focus:outline-none focus:shadow-md text-primaryDark rounded-lg py-2 px-16 flex-grow" id="data" type="date" />
                    </div>
                    <button
                        aria-label="Submit button for collection form data"
                        className="self-end px-16 py-2 bg-primaryLight text-white rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </div >
        </div>
    )
}

export default Footer




// raw data

{/* <div className="flex flex-col justify-start max-w-7xl mx-auto">
                <h5 className="mb-2 text-xl text-PrimaryBlack">Explore options</h5>
                <form className="flex p-5 bg-secondaryWhite rounded-lg text-primaryLight border border-yellow-300">
                    <div className="flex flex-col">
                        <label htmlFor="destination">where do you want to go</label>
                        <input className="mt-2 flex-1 searchInputField" id="destination" type="text" placeholder="Search destination" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="data">where do you want to go a</label>
                        <input className="mt-2 flex flex-1 flex-grow searchInputField" id="data" type="date" placeholder="Set data" />
                    </div>
                    <button
                        aria-label="Submit button for collection form data"
                        className="self-end px-16 py-2 bg-primaryLight text-white rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </div> */}