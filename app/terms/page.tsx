// app/terms/page.tsx
export default function Terms() {
    return (
        <main className="min-h-screen bg-black text-gray-300 py-20 px-4">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

                <section className="space-y-6 text-sm md:text-base leading-relaxed">
                    <p className="text-gray-500">Last Updated: December 23, 2025</p>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using the Vaylen website and application ("Service"), operated by La Compagnie Vaylen Inc. ("we", "us"), you agree to be bound by these Terms.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">2. Medical Disclaimer</h2>
                        <p className="p-4 bg-red-900/20 border border-red-900/50 rounded-lg text-red-200">
                            <strong>Important:</strong> Vaylen is not a medical device. The nutritional and training insights provided are for informational purposes only. Always consult a physician before starting any diet or exercise program.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">3. Use of Service</h2>
                        <p>
                            You agree not to misuse the Service or help anyone else do so. We reserve the right to suspend access to any user who violates these terms or attempts to reverse-engineer our proprietary algorithms.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">4. Intellectual Property</h2>
                        <p>
                            The design, trademarks, and "Intelligent Body Composition" algorithms are the exclusive property of La Compagnie Vaylen Inc.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, La Compagnie Vaylen Inc. shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">6. Contact</h2>
                        <p>
                            Questions about these Terms? Contact us at: <a href="mailto:legal@vaylen.app" className="text-blue-400 hover:underline">legal@vaylen.app</a>
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}