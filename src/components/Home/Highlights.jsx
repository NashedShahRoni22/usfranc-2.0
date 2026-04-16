import Image from "next/image";
import img from "../../app/assets/compliance_governance.png";

const Highlights = () => {
  return (
    <div className="relative mt-24 overflow-visible z-30">
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full -z-10"></div>
      <div className="relative">
        <div className="relative min-h-125 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={img}
              alt="Compliance"
              width={1000}
              height={800}
              className="w-full max-w-md md:max-w-full h-full object-contain hover:rotate-1 transition duration-500"
            />
          </div>

          <div className="w-full md:w-1/2 h-full bg-white/70 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-xl hover:rotate-1 transition duration-500 flex flex-col justify-center">
            <div className="mb-4">
              <div className="inline-block p-3 rounded-full bg-primary/10">
                <svg
                  stroke="#7b5e00"
                  fill="#7b5e00"
                  viewBox="0 0 640 512"
                  height="2em"
                  width="2em">
                  <path d="M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02z"></path>
                </svg>
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Compliance & Governance{" "}
              <span className="text-primary">First</span>
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              We operate under a hybrid PoW + PoS consensus model, ensuring a
              secure, transparent, and community-driven governance framework.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -top-40 md:-top-10 right-0 md:right-10 z-40 w-[90%] md:w-65 mx-4 text-center justify-center md:p-0.5 animate-rotate-border rounded-lg bg-conic/[from_var(--border-angle)] from-[#f2cc22] via-[#7b5e00] to-[#f2cc22] p-0.5">
        <div className="p-4 shadow-xl rounded-lg backdrop-blur-md bg-white/90 text-primary">
          USFranc: A secure cryptocurrency for modern usage — backed by
          compliance, powered by capital, and designed for real-world utility.
        </div>
      </div>
    </div>
  );
};

export default Highlights;
