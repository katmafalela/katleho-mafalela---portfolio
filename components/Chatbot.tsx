
'use client';

import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import type { ChatMessage } from '../types';
import { chatbotSystemInstruction } from '../constants';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState('');
    const [chat, setChat] = useState<Chat | null>(null);
    const chatBodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize the AI model and chat session
        const initChat = () => {
            try {
                // Per guidelines, we assume the API key is available in the environment.
                // In Next.js, client-side env vars must be prefixed with NEXT_PUBLIC_.
                const apiKey = process.env.NEXT_PUBLIC_API_KEY;
                if (!apiKey) {
                    console.error("API key is missing. Please set NEXT_PUBLIC_API_KEY environment variable.");
                    setMessages([{ role: 'model', text: "Sorry, the AI assistant is not configured correctly. API key is missing." }]);
                    return;
                }
                const ai = new GoogleGenAI({ apiKey });
                const chatSession = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: chatbotSystemInstruction,
                    },
                });
                setChat(chatSession);

                // Set initial message based on system prompt, no initial API call needed.
                setMessages([{
                    role: 'model',
                    text: "Hello! I'm KM-Bot, an AI assistant. I can answer questions about Katleho's skills, experience, and projects. What would you like to know?"
                }]);
            } catch (error) {
                console.error("Failed to initialize chatbot:", error);
                setMessages([{ role: 'model', text: "Sorry, I'm having trouble connecting right now." }]);
            }
        };
        initChat();
    }, []);

    useEffect(() => {
        // Auto-scroll to the bottom of the chat
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chat) return;

        const userMessage: ChatMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessage({ message: input });
            const modelMessage: ChatMessage = { role: 'model', text: response.text };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage: ChatMessage = { role: 'model', text: "Something went wrong. Please try again." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <>
            <button
                onClick={toggleChat}
                className="chat-bubble fixed bottom-20 right-6 bg-teal-500 text-white dark:text-gray-900 p-4 rounded-full shadow-xl hover:bg-teal-600 dark:hover:bg-teal-400 focus:outline-none transition-all duration-300 transform hover:scale-110 z-50"
                aria-label="Toggle chatbot"
                title="Toggle chatbot"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
            </button>

            {isOpen && (
                <div className="chat-window fixed bottom-24 right-6 w-[calc(100%-3rem)] max-w-md h-[70vh] max-h-[600px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl shadow-2xl flex flex-col z-50 origin-bottom-right">
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">AI Assistant</h3>
                        <button onClick={toggleChat} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Body */}
                    <div ref={chatBodyRef} className="flex-1 p-4 overflow-y-auto space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs md:max-w-sm rounded-2xl px-4 py-2 ${msg.role === 'user' ? 'bg-teal-600 text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}>
                                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }}></p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl rounded-bl-none px-4 py-3">
                                    <div className="typing-indicator flex items-center space-x-1.5">
                                        <span className="h-2 w-2 bg-gray-400 dark:bg-gray-400 rounded-full"></span>
                                        <span className="h-2 w-2 bg-gray-400 dark:bg-gray-400 rounded-full"></span>
                                        <span className="h-2 w-2 bg-gray-400 dark:bg-gray-400 rounded-full"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about skills, projects..."
                                className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full py-2 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                disabled={isLoading || !chat}
                            />
                            <button
                                type="submit"
                                className="bg-teal-500 text-white dark:text-gray-900 rounded-full p-3 hover:bg-teal-600 dark:hover:bg-teal-400 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
                                disabled={isLoading || !input.trim()}
                                aria-label="Send message"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transform rotate-90">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 5.9768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
