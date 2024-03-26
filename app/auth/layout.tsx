const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-screen flex items-center justify-center flex-col
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
    from-sky-950 to-slate-950
    "
    > 
      {children}
    </div>
  );
};

export default AuthLayout;
