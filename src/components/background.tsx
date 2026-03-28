import backgroundPatternDesktop from "@/assets/background-pattern-desktop.svg";
export default function FAQBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative">
        {/* Background Top */}
        <div className="inset-x-0 top-0 h-[35%] md:h-[30%] absolute bg-cover bg-no-repeat bg-center">
          {/* Background Bottom */}
          <img
            src={backgroundPatternDesktop}
            alt="Background Pattern"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="bg-faq-light inset-x-0 top-[35%] md:top-[30%] bottom-0 absolute"></div>
        {/* FAQ Card: sit above the background layers */}
        <div className="relative z-10 ">{children}</div>
      </div>
    </>
  );
}
