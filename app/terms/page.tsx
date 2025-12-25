export default function Terms() {
    return (
        <main className="min-h-screen bg-black text-gray-300 py-20 px-4">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

                <section className="space-y-6 text-sm md:text-base leading-relaxed">
                    <p className="text-gray-500">Last Updated: December 24, 2025</p>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">1. Introduction</h2>
                        <p>
                            These Terms of Service ("Terms") are a binding legal agreement between you ("User") and <strong>La Compagnie Vaylen Inc.</strong> (doing business as "Vaylen"), a corporation registered in Quebec, Canada (4388 Rue Saint-Denis Suite 200 #767, Montreal, QC). These Terms govern your use of the Vaylen mobile app and website (vaylen.app).
                        </p>
                        <p>
                            <strong>Standard EULA:</strong> Your use of the Vaylen App is also governed by the Apple Standard End User License Agreement (EULA).
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">2. Age & Eligibility</h2>
                        <p>
                            By using Vaylen, you verify that you are at least <strong>18 years of age</strong>. The Service is not intended for minors. If you are under 18, you are not permitted to use Vaylen.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">3. Medical Disclaimer & Assumption of Risk</h2>
                        <div className="p-4 bg-red-900/20 border border-red-900/50 rounded-lg text-red-200 space-y-2">
                            <p><strong>3.1 Information Only:</strong> Vaylen provides training and nutrition insights for educational purposes only. We are <strong>not</strong> a medical organization. Nothing in the app is medical advice.</p>
                            <p><strong>3.2 Assumption of Risk:</strong> You understand that high-intensity exercise and weightlifting carry inherent risks of injury, disability, or death. By using Vaylen, you <strong>voluntarily assume all such risks</strong>.</p>
                            <p><strong>3.3 Release:</strong> You release La Compagnie Vaylen Inc. from any liability for injuries sustained while using the Service.</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">4. Accounts & Subscriptions</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>4.1 Security:</strong> You are responsible for safeguarding your account login.</li>
                            <li><strong>4.2 Subscription Plans:</strong> Vaylen offers various paid subscription plans ("Subscriptions"). Payment is charged to your Apple ID or Google Play account upon confirmation.</li>
                            <li><strong>4.3 Auto-Renewal:</strong> Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period. You can manage this in your device settings.</li>
                            <li><strong>4.4 Refunds:</strong> Digital refunds are handled exclusively by the Apple App Store or Google Play Store according to their policies.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">5. Future Commerce</h2>
                        <p>
                            We may offer physical goods for sale in the future. Specific terms regarding shipping, returns, and warranties will be provided at the time of purchase.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">6. User Content</h2>
                        <p>
                            Any logs or data you enter into Vaylen remain your property. You grant us a license to host and display that data strictly to operate the Service.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">7. Governing Law</h2>
                        <p>
                            These Terms are governed by the laws of <strong>Quebec, Canada</strong>. Any disputes shall be resolved in the courts of Montreal.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">8. Contact</h2>
                        <p>Email: <a href="mailto:legal@vaylen.app" className="text-blue-400 hover:underline">legal@vaylen.app</a></p>
                    </div>
                </section>
            </div>
        </main>
    );
}