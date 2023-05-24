const Footer = () => {
    return (
        <div className="md:pl-14 2xl:pl-0">
            <div className="max-w-7xl mx-auto">
                <h5 className="mb-2 text-xl text-PrimaryBlack text-center lg:text-start">Explore options</h5>
                <form className="mx-auto lg:mx-0 flex flex-col lg:flex-row w-[85%] justify-self-start p-5 bg-secondaryWhite rounded-lg text-primaryLight items-start lg:items-end justify-start gap-2">
                    <div className="flex flex-col">
                        <label htmlFor="destination">where do you want to go</label>
                        <input className="mt-2 flex-1 searchInputField" id="destination" type="text" placeholder="Search destination" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="data">where do you want to go a</label>
                        <input className="mt-2 flex flex-1 flex-grow searchInputField" id="data" type="date" placeholder="Set data" />
                    </div>
                    <div>
                        <button
                            aria-label="Submit button for collection form data"
                            className="self-end px-16 py-2 bg-primaryLight text-white rounded-md"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Footer