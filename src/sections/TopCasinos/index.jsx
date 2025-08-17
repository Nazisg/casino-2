import Card from "@/components/Card";
import { casinos } from "@/data/casinos";

export default function TopCasinos() {
    return (
        <section id="top-casinos" className="min-h-screen py-10 px-4">
            <div className="max-w-7xl mx-auto flex flex-col">
                <h2 className=" text-center text-[24px] font-bold lg:text-[48px]">Top UK <span className=" text-[#F6A410]">Casinos</span></h2>
              <p className="opacity-60 text-center text-[16px] lg:text-[20px]">Handpicked premium casinos with exclusive bonuses</p>
                {/* Cards */}
                <div className="flex flex-col xl:gap-6 gap-10 mt-10">
                    {casinos.map((casino, index) => (
                        <Card key={index} {...casino} />
                    ))}
                </div>
            </div>
        </section>
    );
}
