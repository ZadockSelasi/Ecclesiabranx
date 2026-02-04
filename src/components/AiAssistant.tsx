import Link from 'next/link';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function AiAssistant() {
    return (
        <div className="bg-emerald-950/50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-emerald-400 font-semibold tracking-wide uppercase">Innovation</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-emerald-50 sm:text-4xl">
                        Meet Our AI Branding Assistant
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-emerald-200/80 lg:mx-auto">
                        Leverage the power of artificial intelligence to streamline your branding process. Our assistant helps generate ideas, refine strategies, and answer your questions instantly.
                    </p>
                </div>

                <div className="mt-16 relative max-w-lg mx-auto lg:max-w-4xl">
                    <div className="relative rounded-2xl shadow-xl bg-emerald-900 overflow-hidden border border-emerald-800">
                        <div className="bg-emerald-800 p-4 flex items-center">
                            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                                <ChatBubbleLeftRightIcon className="h-5 w-5 text-emerald-600" />
                            </div>
                            <span className="ml-3 text-white font-medium">Ecclesia AI</span>
                        </div>
                        <div className="p-6 space-y-4 bg-emerald-950/50 h-64 flex flex-col justify-end">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-800 flex items-center justify-center">
                                    <ChatBubbleLeftRightIcon className="h-4 w-4 text-emerald-300" />
                                </div>
                                <div className="ml-3 bg-emerald-900 p-3 rounded-lg rounded-tl-none shadow-sm border border-emerald-800 max-w-xs">
                                    <p className="text-sm text-emerald-100">👋 Hello! How can I assist with your brand today?</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end">
                                <div className="mr-3 bg-emerald-700 p-3 rounded-lg rounded-tr-none shadow-sm max-w-xs">
                                    <p className="text-sm text-white">I need help choosing a color palette for a tech startup.</p>
                                </div>
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-800 flex items-center justify-center">
                                    <span className="text-xs font-medium text-emerald-300">You</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 bg-emerald-900 border-t border-emerald-800">
                            <div className="flex rounded-md shadow-sm">
                                <input
                                    type="text"
                                    className="focus:ring-emerald-500 focus:border-emerald-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-emerald-700 bg-emerald-950/50 text-emerald-100 p-2 border"
                                    placeholder="Type your message..."
                                    disabled
                                />
                                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-emerald-700 hover:bg-emerald-600">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <Link
                            href="/ai-assistant"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-brand hover:bg-emerald-600 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                            Try the AI Assistant
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
