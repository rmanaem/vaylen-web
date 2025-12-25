import StandardPage from '../components/StandardPage';

export default function Disclaimer() {
    return (
        <StandardPage>
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-white mb-8">Disclaimer</h1>

                <section className="space-y-6 text-sm md:text-base leading-relaxed">
                    <p className="text-gray-500">Last Updated: December 24, 2025</p>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">1. Medical Disclaimer</h2>
                        <p>
                            <strong>La Compagnie Vaylen Inc.</strong> (doing business as "Vaylen") is not a medical organization. The information provided in our app, website, and emails regarding training, nutrition, and supplements is for educational and informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician regarding any medical condition.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">2. Fitness Disclaimer</h2>
                        <p>
                            You engage in the fitness programs and nutritional plans offered by Vaylen at your own risk. Vaylen is not responsible for any injuries or health problems that may result from your engagement in these programs.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">3. Results Disclaimer</h2>
                        <p>
                            We do not guarantee any specific results (e.g., weight loss, muscle gain) from using Vaylen. Testimonials and examples used are exceptional results and do not apply to the average attendee.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">4. Affiliate & Advertising Disclosure</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Affiliates:</strong> Vaylen may participate in affiliate marketing programs. We may earn a commission on clicks or purchases made through links on our website or app. This comes at no extra cost to you.</li>
                            <li><strong>Ads:</strong> We may display advertisements from third-party networks (e.g., Google AdMob). We are not responsible for the content or claims of third-party advertisers.</li>
                            <li><strong>Paid Reviews:</strong> Occasionally, we may receive compensation for reviewing products. We always provide our honest opinions, findings, beliefs, or experiences on those topics or products.</li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white">5. Contact</h2>
                        <p>Email: <a href="mailto:legal@vaylen.app" className="text-blue-400 hover:underline">legal@vaylen.app</a></p>
                    </div>
                </section>
            </div>
        </StandardPage>
    );
}