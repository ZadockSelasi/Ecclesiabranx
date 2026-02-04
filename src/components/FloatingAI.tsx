"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface Message {
    id: string;
    text: string;
    sender: "user" | "ai";
    timestamp: Date;
}

export default function FloatingAI() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        setMounted(true);
        setMessages([
            {
                id: "1",
                text: "👋 Hello! How can I assist with your brand today?",
                sender: "ai",
                timestamp: new Date(),
            },
        ]);
    }, []);

    useEffect(() => {
        if (mounted) {
            scrollToBottom();
        }
    }, [messages, isTyping, mounted]);

    if (!mounted) return null;

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: getMockResponse(inputValue),
                sender: "ai",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const getMockResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes("color") || lowerInput.includes("palette")) {
            return "For a tech startup, I recommend a palette focusing on Emerald Green (#10b981) for growth and innovation, paired with deep Slate (#0f172a) for professionalism.";
        }
        if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
            return "Hello there! I'm Ecclesia AI, your brand innovation assistant. How can I help you build something great today?";
        }
        if (lowerInput.includes("logo")) {
            return "A great logo should be simple, memorable, and reflective of your brand's core values. Would you like to discuss some design concepts?";
        }
        return "That's an interesting point! As your AI brand assistant, I can help you refine that idea further. What specifically are you looking to achieve?";
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-emerald-900 border border-emerald-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-emerald-800 p-4 flex items-center justify-between border-b border-emerald-700">
                            <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-emerald-600" />
                                </div>
                                <span className="ml-3 text-white font-medium">Ecclesia AI</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-emerald-300 hover:text-white transition-colors"
                            >
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-emerald-950/50 scrollbar-thin scrollbar-thumb-emerald-700">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex items-start ${message.sender === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    {message.sender === "ai" && (
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-800 flex items-center justify-center mr-2">
                                            <ChatBubbleLeftRightIcon className="h-4 w-4 text-emerald-300" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl shadow-sm text-sm ${message.sender === "user"
                                            ? "bg-emerald-700 text-white rounded-tr-none"
                                            : "bg-emerald-900 text-emerald-100 border border-emerald-800 rounded-tl-none"
                                            }`}
                                    >
                                        <p>{message.text}</p>
                                        <span className="text-[10px] opacity-50 mt-1 block">
                                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                    {message.sender === "user" && (
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-800 flex items-center justify-center ml-2">
                                            <span className="text-xs font-medium text-emerald-300">You</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex items-center space-x-2 text-emerald-400 text-xs">
                                    <div className="flex space-x-1">
                                        <motion.span
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        >•</motion.span>
                                        <motion.span
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                        >•</motion.span>
                                        <motion.span
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                        >•</motion.span>
                                    </div>
                                    <span>AI is thinking...</span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-emerald-900 border-t border-emerald-800">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSendMessage();
                                }}
                                className="flex items-center space-x-2"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-emerald-950/50 border border-emerald-700 text-emerald-100 px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-emerald-700"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <PaperAirplaneIcon className="h-5 w-5" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-500 transition-colors flex items-center justify-center"
            >
                {isOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                ) : (
                    <ChatBubbleLeftRightIcon className="h-6 w-6" />
                )}
            </motion.button>
        </div>
    );
}
