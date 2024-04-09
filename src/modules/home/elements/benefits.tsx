const Benefits = () => {
    return (
        <div className="benefit-cover min-h-[60vh] relative flex items-center justify-center">
            <div className="w-[60%] md:h-[320px] bg-[#F7F5FF] border-[2px] rounded border-blue-500 p-2 lg:pt-10">
                <h3 className="font-clashDisplay uppercase text-3xl md:text-4xl lg:text-6xl text-center w-full mb-4">
                    EVERYTHING YOU NEED TO <span className="font-style">SUCCEED</span>{" "}
                    AVAILABLE IN A SINGLE PLATFORM
                </h3>
                <p className="text-xl md:text-2xl text-center">
                    No code needed. No complex integrations.
                </p>
            </div>
        </div>
    );
};

export default Benefits;
