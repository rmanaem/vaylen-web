export default function HealthPrivacy() {
    return (
        <main className="min-h-screen bg-black text-gray-300 py-20 px-4">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-white mb-8">Consumer Health Data Privacy Policy</h1>

                <section className="space-y-6 text-sm md:text-base leading-relaxed">
                    <p className="text-gray-500">Last Updated: December 24, 2025</p>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">1. Introduction</h2>
                        <p>
                            This Consumer Health Data Privacy Policy supplements the Vaylen Privacy Policy and applies to "Consumer Health Data" as defined by Washington’s My Health My Data Act (MHMDA) and other applicable laws. <strong>La Compagnie Vaylen Inc.</strong> (doing business as "Vaylen") provides this notice to fully disclose how we handle your physical health information.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">2. Consumer Health Data We Collect</h2>
                        <p>We collect the following categories of Consumer Health Data solely to provide the fitness and nutrition features of the Vaylen App:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Bodily Functions & Vitals:</strong> Weight, height, body fat percentage, and muscle mass metrics.</li>
                            <li><strong>Activity & Training:</strong> Workout logs, sets, reps, and exercise history.</li>
                            <li><strong>Nutritional Data:</strong> Caloric intake, macro-nutrient logs, and hydration tracking.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">3. Sources of Data</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Directly From You:</strong> We collect this data only when you manually enter it into the Vaylen App.</li>
                            <li><strong>No Passive Health Sensors:</strong> We do <strong>not</strong> collect health data from background sensors (e.g., we do not access Apple HealthKit, Health Connect, or heart rate monitors).</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">4. Why We Collect This Data</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Calculate your metabolic needs and training volume.</li>
                            <li>Visualize your fitness progress over time.</li>
                            <li>Provide the core functionality of the Vaylen training interface.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">5. Sharing of Consumer Health Data</h2>
                        <p>We <strong>do not sell</strong> your Consumer Health Data. We do not share this data with third parties for advertising purposes. We only share this data with the following categories of data processors strictly necessary to provide the Service:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Cloud Storage Providers:</strong> (e.g., Google Firebase) to securely store your workout history.</li>
                            <li><strong>Subscription Validators:</strong> (e.g., RevenueCat) to verify your access to premium health features.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">6. Your Rights (MHMDA & Others)</h2>
                        <p>Under applicable consumer health privacy laws, you have the right to:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Confirm</strong> whether we are collecting Consumer Health Data about you.</li>
                            <li><strong>Access</strong> the Consumer Health Data we hold.</li>
                            <li><strong>Withdraw Consent</strong> for our collection of this data (which may prevent you from using the App).</li>
                            <li><strong>Delete</strong> your Consumer Health Data.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">7. Exercising Your Rights</h2>
                        <p>
                            You may exercise your right to delete your data directly within the Vaylen App settings ("Delete Account"). For all other requests, please contact us at:
                        </p>
                        <p>
                            <strong>Email:</strong> <a href="mailto:legal@vaylen.app" className="text-blue-400 hover:underline">legal@vaylen.app</a><br />
                            <strong>Attention:</strong> Privacy Officer
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}