const AuthLayout = ({ children, logo, text }) => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                <h4 className="text-center">{text}</h4>
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
