import { Mail, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Email</h3>
                            <p className="text-sm text-gray-400">General: support@vaylen.app</p>
                            <p className="text-sm text-gray-400">Legal: legal@vaylen.app</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Headquarters</h3>
                            <p className="text-sm text-gray-400">
                                La Compagnie Vaylen Inc.<br />
                                Montreal, Quebec<br />
                                Canada
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}