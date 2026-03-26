"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send } from "lucide-react";

export function SparkleBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey bestie! Need me to dig up some dirt or remind you of an inside joke?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { id: Date.now(), text: userMsg, sender: "user" }]);
    setInput("");

    // Mock bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev, 
        { 
          id: Date.now() + 1, 
          text: `Beep boop! I'm currently just a UI mockup, but honestly, "${userMsg}" sounds like something Marcus would say at 3 AM.`, 
          sender: "bot" 
        }
      ]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1, rotate: 12 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#ff728d] rounded-full shadow-ambient text-white flex items-center justify-center z-50 border-4 border-white"
        aria-label="Open SparkleBot"
      >
        <Sparkles size={28} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-28 right-6 w-80 sm:w-96 bg-white shadow-2xl rounded-sm z-50 overflow-hidden border border-[#efe8d2]"
          >
            {/* Header */}
            <div className="bg-[#ff728d] p-4 text-white flex items-center justify-between shadow-md relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl shadow-sm">
                  🐱
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-jakarta)" }} className="font-bold text-lg leading-none">SparkleBot</h3>
                  <span style={{ fontFamily: "var(--font-vietnam)" }} className="text-[10px] uppercase font-black opacity-80 mt-1 block">Online • Chaos Level: Critical</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="h-80 bg-[#fdf6e3] p-4 overflow-y-auto flex flex-col gap-4 relative">
              <div className="opacity-5 absolute inset-0 pointer-events-none bg-[url('https://images.unsplash.com/photo-1543807535-eceef0bc6599')] bg-cover mix-blend-multiply" />
              {messages.map((m) => (
                <div key={m.id} className={`max-w-[80%] p-3 shadow-sm relative ${m.sender === "user" ? "self-end bg-[#a8e6cf] text-[#00694c] rounded-l-xl rounded-tr-xl rotate-1" : "self-start bg-white text-[#322f22] rounded-r-xl rounded-tl-xl -rotate-1 border border-[#efe8d2]"}`}>
                  <p style={{ fontFamily: "var(--font-vietnam)" }} className="text-sm font-bold leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-[#efe8d2]">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask for an inside joke..."
                  style={{ fontFamily: "var(--font-vietnam)" }}
                  className="flex-1 border-b-2 border-[#ff728d] bg-transparent text-sm font-bold px-2 focus:outline-none placeholder-gray-400 marker-underline"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="bg-[#ffe082] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold disabled:opacity-50 transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
