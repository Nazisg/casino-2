export default function AboutUs() {
  return (
    <section id="about-us" className="px-4 py-7 lg:py-15">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="font-bold text-[24px] lg:text-[36px]  mb-3">Why Choose <span className="text-[#F59E0B]">Casino</span>?</p>
        <h2 className=" opacity-60 text-center">Experience premium gaming with industry-leading features</h2>

        <div className="relative w-full bg-[#E7E8E8] border border-[#F59E0B] grid lg:grid-cols-4 grid-cols-2 rounded-[12px] p-4 lg:p-10 mt-6 lg:mt-10 gap-10">
          {/* Text Section */}
          <div className="lg:col-span-1 col-span-1 flex flex-col gap-2 items-center">
            <h3 className="font-bold text-[#F59E0B] text-[20px] lg:text-[30px]">100K+</h3>
            <p className="opacity-50 lg:text-[20px]">Active Players</p>
          </div>
          <div className="lg:col-span-1 col-span-1 flex flex-col gap-2 items-center">
            <h3 className="font-bold text-[#F59E0B] text-[20px] lg:text-[30px]">£50M+</h3>
            <p className="opacity-50 lg:text-[20px]">Paid Out</p>
          </div>
          <div className="lg:col-span-1 col-span-1 flex flex-col gap-2 items-center">
            <h3 className="font-bold text-[#F59E0B] text-[20px] lg:text-[30px]">2000+</h3>
            <p className="opacity-50 lg:text-[20px]">Games</p>
          </div>
          <div className="lg:col-span-1  col-span-1 flex flex-col gap-2 items-center">
            <h3 className="font-bold text-[#F59E0B] text-[20px] lg:text-[30px]">24/7</h3>
            <p className="opacity-50 lg:text-[20px]">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
