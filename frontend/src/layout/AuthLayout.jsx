const AuthLayout = ({ children, logo }) => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                {logo && (
                    <div className="mb-6 flex justify-center">
                        <img src={logo} alt="Logo" className="h-12" />
                    </div>
                )}

                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
