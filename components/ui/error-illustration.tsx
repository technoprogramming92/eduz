import Image from "next/image";

export function ErrorIllustration({ code }: { code: "404" | "500" }) {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 right-4 text-blue-500 text-2xl">+</div>
        <div className="absolute top-12 right-12 text-pink-500 text-xl">+</div>
        <div className="absolute top-8 right-32 text-purple-500 text-2xl">
          +
        </div>
        <div className="absolute bottom-12 left-1/4 text-blue-500">
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-blue-300 opacity-20" />
        </div>
      </div>

      {/* Main error code */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* First number */}
          <span className="text-[180px] font-bold text-blue-500 absolute -left-32 top-0">
            {code[0]}
          </span>
          {/* Second number with image overlay */}
          <div className="relative inline-block">
            <span className="text-[180px] font-bold text-yellow-400">
              {code[1]}
            </span>
            <div className="absolute inset-0 mix-blend-multiply">
              <Image
                src="/images/404-img.jpg"
                alt="Error illustration"
                width={500}
                height={250}
                className="object-fill contrast-150"
              />
            </div>
          </div>
          {/* Third number */}
          <span className="text-[180px] font-bold text-pink-500 absolute -right-32 top-0">
            {code[2]}
          </span>
        </div>
      </div>

      {/* Decorative lines */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 text-blue-400"
        viewBox="0 0 400 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 50C100 50 100 20 200 20C300 20 300 80 400 80"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5 5"
        />
      </svg>
    </div>
  );
}
