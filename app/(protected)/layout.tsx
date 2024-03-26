import Header from "@/components/nav/Header";
import HeaderMobile from "@/components/nav/HeaderMobile";
import MarginWidthWrapper from "@/components/nav/MarginWidthWrapper";
import SideNav from "@/components/nav/SideNav";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-full flex-col w-full"
      // bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
      // from-sky-950 to-slate-950
      // "
    >
      <div className="flex">
        <SideNav />
        <main className="flex-1">
          <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
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

export default AuthLayout;
