import Link from 'next/link';
import StandardPage from '../components/StandardPage';

export default function Privacy() {
    return (
        <StandardPage>
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

                <section className="space-y-6 text-sm md:text-base leading-relaxed">
                    <p className="text-gray-500">Last Updated: December 24, 2025</p>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">1. Introduction</h2>
                        <p>
                            <strong>La Compagnie Vaylen Inc.</strong> (doing business as "Vaylen") respects your privacy. This policy describes how we handle your personal data in compliance with Quebec Law 25, GDPR, and CCPA.
                        </p>
                        <p className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                            <strong>Consumer Health Data:</strong> If you are looking for information regarding how we handle your health data (workouts, nutrition, body metrics), please refer to our separate <Link href="/health-privacy" className="text-blue-400 hover:underline">Consumer Health Data Privacy Policy</Link>.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">2. Data We Collect</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>2.1 Account Data:</strong> Email address, account credentials (we do not collect your name unless voluntarily provided).</li>
                            <li><strong>2.2 Transaction Data:</strong> Purchase history and subscription status (processed via Apple/Google/RevenueCat).</li>
                            <li><strong>2.3 Device & Analytics Data:</strong> IP address, device model, and OS version. This data is collected automatically via Google Analytics/Firebase to monitor app performance and crashes.</li>
                            <li><strong>2.4 Exclusions:</strong> We do <strong>not</strong> access your Camera, Photos, Contacts, Microphone, or Heart Rate sensors.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">3. How We Use Your Data</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Manage your account and authentication.</li>
                            <li>Sync your progress across devices.</li>
                            <li>Process and validate subscriptions.</li>
                            <li>Analyze app performance and fix bugs.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">4. Data Sharing & Service Providers</h2>
                        <p>We share data only with necessary service providers who are contractually obligated to protect your data:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Cloud Hosting:</strong> Firebase / Google Cloud (to store and sync your data).</li>
                            <li><strong>Subscription Infrastructure:</strong> RevenueCat (to validate and manage your subscription status).</li>
                            <li><strong>Payments:</strong> Apple App Store / Google Play (to process the actual transactions).</li>
                            <li><strong>Analytics:</strong> Google Analytics (anonymized usage stats).</li>
                            <li><strong>Marketing:</strong> Mailchimp (only if you opt-in to newsletters).</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">5. Your Rights (Quebec Law 25 / GDPR)</h2>
                        <p>You have the right to <strong>Access</strong>, <strong>Correct</strong>, or <strong>Delete</strong> your data.</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>In-App Deletion:</strong> You can delete your account and all associated data directly within the Vaylen App settings.</li>
                            <li><strong>Fallback:</strong> If you cannot access the app, email <a href="mailto:legal@vaylen.app" className="text-blue-400 hover:underline">legal@vaylen.app</a> to request deletion.</li>
                            <li><strong>Privacy Officer:</strong> The President of La Compagnie Vaylen Inc. is responsible for data protection (contact: legal@vaylen.app).</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">6. Cookies (Website Only)</h2>
                        <p>Our website (vaylen.app) uses cookies for analytics. You can manage these via your browser settings. The mobile app does not use cookies.</p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">7. Contact</h2>
                        <p>Email: <a href="mailto:legal@vaylen.app" className="text-blue-400 hover:underline">legal@vaylen.app</a></p>
                    </div>
                </section>
            </div>
        </StandardPage>
    );
}