import StandardPage from '../components/StandardPage';

export default function Refund() {
    return (
        <StandardPage>
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-white mb-8">Return & Refund Policy</h1>

                <section className="space-y-6 text-sm md:text-base leading-relaxed">
                    <p className="text-gray-500">Last Updated: December 24, 2025</p>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">1. App Subscriptions</h2>
                        <p>
                            Subscriptions purchased via the Apple App Store or Google Play Store are subject to the refund policies of those respective platforms. Vaylen cannot process refunds for these purchases directly.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">2. Physical Merchandise</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Returns:</strong> We accept returns of unworn, unwashed items within 30 days of delivery.</li>
                            <li><strong>Refunds:</strong> Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, a credit will automatically be applied to your original method of payment.</li>
                            <li><strong>Shipping:</strong> You are responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">3. Contact</h2>
                        <p>For return inquiries: <a href="mailto:legal@vaylen.app" className="text-blue-400 hover:underline">legal@vaylen.app</a></p>
                    </div>
                </section>
            </div>
        </StandardPage>
    );
}