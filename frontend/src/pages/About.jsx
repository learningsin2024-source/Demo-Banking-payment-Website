import Navbar from "../layout/Navbar";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-slate-50">
                <div className="max-w-3xl mx-auto px-6 py-20">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-blue-600">
                            💳 BankApp
                        </h2>
                        <p className="text-sm text-gray-400 mt-1">
                            Personal Banking
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white rounded-xl shadow p-8 mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Our Mission
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            BankApp is a modern personal banking platform built
                            to make managing your money simple, fast and secure.
                            We believe everyone deserves access to clean,
                            intuitive financial tools — whether you're sending
                            money to a friend or tracking your spending habits.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="bg-white rounded-xl shadow p-8 mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            What We Offer
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: "💰",
                                    title: "Wallet Top Up",
                                    desc: "Add funds to your wallet instantly",
                                },
                                {
                                    icon: "💸",
                                    title: "Fund Transfers",
                                    desc: "Send money to anyone by email",
                                },
                                {
                                    icon: "📊",
                                    title: "Transaction History",
                                    desc: "Track every transaction in real time",
                                },
                                {
                                    icon: "🔒",
                                    title: "Secure & Private",
                                    desc: "Token-based auth and encrypted data",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-start gap-3"
                                >
                                    <span className="text-2xl">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium text-gray-800">
                                            {item.title}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Built by */}
                    <div className="bg-white rounded-xl shadow p-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Built By
                        </h3>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                                K
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-800">
                                    Koumolou Fatihu
                                </p>
                                <p className="text-xs text-gray-400">
                                    Full Stack Developer — Abidjan, Côte
                                    d'Ivoire
                                </p>
                                <a
                                    href="https://github.com/koumolou"
                                    target="_blank"
                                    className="text-xs text-blue-600 hover:underline"
                                >
                                    github.com/learningsin2024-source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
