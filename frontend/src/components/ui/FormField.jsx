const FormField = ({ label, error, children }) => {
    return (
        <div className="flex flex-col gap-1 mt-4">
            {label && (
                <label className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            {children}

            {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
    );
};

export default FormField;
