import AuthLayout from "../layout/AuthLayout";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { topup } from "../services/wallet.js";
import { useState, useEffect } from "react";

const TopUp = () => {
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState("");
    const [toast, setToast] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        const numericAmount = Number(amount);

        if (numericAmount <= 0) {
            setError("Enter an amount above 0");
        } else {
            setLoading(true);

            try {
                await topup(numericAmount);
                setToast({
                    message: "Transaction successful",
                    type: "success",
                });
            } catch (error) {
                setError(
                    setToast({ message: "Transaction failed", type: "error" }),
                );
            } finally {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => {
                setToast(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [toast]);
    return (
        <>
            <div>
                <AuthLayout>
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="number"
                            label="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Input an amount"
                            required
                        />
                        <Button type="submit" disabled={loading}>
                            {loading ? (
                                <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                "TopUp"
                            )}
                        </Button>
                        {err && (
                            <div className="text-center text-xs text-white bg-red-500 p-2.5 mt-4">
                                {err}
                            </div>
                        )}
                        {toast && (
                            <div
                                className={`fixed top-5 right-5 px-4 py-3 rounded-lg shadow-lg text-white text-sm
                                              ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}
                            >
                                {toast.message}
                            </div>
                        )}
                    </form>
                </AuthLayout>
            </div>
        </>
    );
};

export default TopUp;
