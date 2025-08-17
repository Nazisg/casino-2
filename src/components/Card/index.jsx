import Link from "next/link";

export default function Card({ name, icon, rating, minDeposit, methods, bonus, link }) {
    return (
        <div className="relative bg-[#ffff] border border-[#F6A410] rounded-[12px] xl:p-8 py-3 px-3 grid xl:grid-cols-5 grid-cols-2 gap-5">

            {/* Card Icon (Logo Link) */}
            <div className="col-span-1 flex xl:items-center justify-center">
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <img
                        src={icon}
                        alt={name || "casino-logo"}
                        className="w-full h-full object-contain"
                    />
                </Link>
            </div>

            {/* Expert Rating */}
            <div className="col-span-1 flex flex-col gap-2 items-center justify-center">
                <p className="opacity-50 text-[12px] xl:text-[16px]">Expert Rating</p>
                <div className="flex gap-1 items-center">
                    {Array.from({ length: 5 }, (_, i) => {
                        const starValue = i + 1;
                        if (rating >= starValue) {
                            // full star
                            return (
                                <img
                                    key={i}
                                    src="/icons/star-full.png"
                                    alt="full star"
                                    className="w-4 h-4"
                                />
                            );
                        } else if (rating >= starValue - 0.5) {
                            // half star
                            return (
                                <img
                                    key={i}
                                    src="/icons/star-half.png"
                                    alt="half star"
                                    className="w-4 h-4"
                                />
                            );
                        } else {
                            // empty star
                            return (
                                <img
                                    key={i}
                                    src="/icons/star-empty.png"
                                    alt="empty star"
                                    className="w-4 h-4 opacity-30"
                                />
                            );
                        }
                    })}
                </div>
                <h4 className="xl:text-[24px] font-bold">{rating.toFixed(1)}</h4>
            </div>

            {/* Min Deposit */}
            <div className="col-span-1 flex flex-col gap-1 xl:gap-2 xl:items-center justify-center order-3 xl:order-2">
                <p className="opacity-50 text-[12px] xl:text-[16px]">Min Deposit</p>
                <h4 className="xl:text-[24px] font-bold">{minDeposit}</h4>
                <div className="flex gap-1 flex-wrap xl:justify-center">
                    {methods.map((method, i) => (
                        <div
                            key={i}
                            className="text-[#F6A410] px-1 xl:py-1 xl:px-2 rounded-[12px] border border-[#F6A410] text-[10px] xl:text-[12px]"
                        >
                            {method}
                        </div>
                    ))}
                </div>
            </div>

            {/* Welcome Bonus */}
            <div className="col-span-1 flex flex-col gap-2 xl:items-center justify-center order-2 xl:order-3">
                <p className="opacity-50 text-[12px] xl:text-[16px]">Welcome Bonus</p>
                <h4 className="xl:text-[24px] xl:text-center font-bold">{bonus}</h4>
            </div>

            {/* Button */}
            <div className="col-span-2 xl:col-span-1 flex items-center order-4">
                <Link href={link} target="_blank" rel="noopener noreferrer" className="w-full xl:w-auto">
                    <button className="font-bold py-2 px-10 w-full xl:w-auto text-[#ffff] rounded-[8px] bg-[#F6A410] cursor-pointer">
                        Get Bonus
                    </button>
                </Link>
            </div>
        </div>
    );
}
