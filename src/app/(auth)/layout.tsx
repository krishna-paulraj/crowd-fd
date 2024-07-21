const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      {children}
    </div>
  );
};

export default AuthLayout;
