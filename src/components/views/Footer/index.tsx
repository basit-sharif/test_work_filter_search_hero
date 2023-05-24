
const Footer = () => {
    return (
        <div className="md:pl-14 2xl:pl-0">
            <div className="max-w-7xl mx-auto">
                <h4 className="mb-2 text-xl text-PrimaryBlack text-center lg:text-start">Explore options</h4>
                <form className="mx-auto lg:mx-0 flex flex-col lg:flex-row w-[85%] justify-self-start p-5 bg-secondaryWhite rounded-lg text-primaryLight items-center lg:items-end justify-start gap-2">
                    <div>
                        <label htmlFor="destination">where do you want to go</label>
                        <input className="mt-2 searchInputField" id="destination" type="text" placeholder="Search destination" />
                    </div>
                    <div>
                        <label htmlFor="destination">where do you want to go</label>
                        <input className="mt-2 searchInputField" id="destination" type="date" placeholder="Search destination" />
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