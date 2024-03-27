import Header from "@/components/nav/Header";
import HeaderMobile from "@/components/nav/HeaderMobile";
import MarginWidthWrapper from "@/components/nav/MarginWidthWrapper";
import SideNav from "@/components/nav/SideNav";

const ChecklistLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-full flex-col w-full"
      // bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
      // from-sky-950 to-slate-950
      // "
    >
      <div className="flex">
          <div className="absolute top-0 z-[-2] min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        <SideNav />
        <main className="flex-1">
          <MarginWidthWrapper>
            <Header />
            <HeaderMobile />
            {children}
          </MarginWidthWrapper>
        </main>
      </div>
    </div>
  );
};

export default ChecklistLayout;
