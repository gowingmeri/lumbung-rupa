'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  getChatHistory,
  sendMessage,
  parseAssistantContent,
  createChatTitle,
} from '@/services/rupagenService';
import { ChatMessage } from '@/types/rupagen';
import ChatSidebar from '@/components/ChatSidebar';
import { Send, ArrowLeft } from 'lucide-react';
import { Icon } from '@iconify/react';

export default function ChatPage() {
  const params = useParams();
  const router = useRouter();
  const titleId = params.id as string;

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (titleId && titleId !== 'new') {
      loadChatHistory();
    } else {
      setLoading(false);
    }
  }, [titleId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputMessage]);

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function adjustTextareaHeight() {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }

  async function loadChatHistory() {
    try {
      setLoading(true);
      setError(null);
      const response = await getChatHistory(titleId);
      setMessages(response?.data?.messages || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal memuat riwayat chat');
      console.error('Error loading chat history:', err);
      setMessages([]); // Reset messages on error
    } finally {
      setLoading(false);
    }
  }

  async function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();

    if (!inputMessage.trim() || sending) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');

    // Optimistically add user message
    const newUserMessage: ChatMessage = {
      role: 'user',
      content: userMessage,
    };
    setMessages((prev) => [...prev, newUserMessage]);

    try {
      setSending(true);
      setError(null);

      // If this is a new chat, create it first
      let chatId = titleId;
      if (titleId === 'new') {
        const newChat = await createChatTitle();
        chatId = newChat._id;
        // Update URL without reload
        router.replace(`/rupagen-ai/${chatId}`);
      }

      const response = await sendMessage(chatId, userMessage);

      // Update with full conversation from API
      setMessages(response?.data?.messages || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal mengirim pesan');
      console.error('Error sending message:', err);
      // Remove optimistic message on error
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setSending(false);
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e as any);
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <ChatSidebar />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-4 lg:px-6 py-4 flex items-center gap-4">
            <button
              onClick={() => router.push('/')}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <Icon icon="mingcute:ai-fill" className="w-20 h-20 text-xl text-primary" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">RupaGen AI</h1>
                <p className="text-xs text-gray-500">Asisten Pintar LumbungRupa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mx-4 lg:mx-6 mt-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {error}
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-6">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="animate-spin inline-block w-10 h-10 border-4 border-primary border-t-transparent rounded-full"></div>
                  <p className="mt-4 text-gray-500">Memuat percakapan...</p>
                </div>
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon="mingcute:ai-fill" className="text-6xl text-primary w-44 h-44" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Mulai Percakapan
                </h2>
                <p className="text-gray-600 mb-6">
                  Tanyakan apapun tentang LumbungRupa kepada RupaGen AI
                </p>
                <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                  {[
                    'Ceritakan tentang LumbungRupa',
                    'Bagaimana cara menggunakan aplikasi ini?',
                    'Apa saja fitur yang tersedia?',
                    'Bantuan untuk pengguna baru',
                  ].map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInputMessage(suggestion)}
                      className="p-5 border border-black/15 rounded-full hover:border-primary hover:bg-primary/5 transition-all text-sm text-gray-700 hover:text-primary"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-white'
                          : 'bg-white border border-gray-200 text-gray-900 shadow-sm'
                      }`}
                    >
                      {message.role === 'assistant' && (
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-sm">
                            <Icon icon="mingcute:ai-fill" className="text-xs text-primary" />
                          </div>
                          <span className="text-xs font-semibold text-primary">
                            RupaGen
                          </span>
                        </div>
                      )}
                      <div className="whitespace-pre-wrap wrap-break-word text-sm leading-relaxed">
                        {message.role === 'assistant'
                          ? parseAssistantContent(message.content)
                          : message.content}
                      </div>
                    </div>
                  </div>
                ))}
                {sending && (
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-2xl px-4 py-3 bg-white border border-gray-200 shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-linear-to-t from-gray-50 to-white border-t border-gray-200 sticky bottom-0 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 py-6">
            <form onSubmit={handleSendMessage} className="relative">
              <div className="relative flex items-end gap-2 bg-white rounded-2xl border-2 border-gray-200 focus-within:border-primary/50 transition-all shadow-sm hover:shadow-md">
                <textarea
                  ref={textareaRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ketik pesan Anda..."
                  disabled={sending}
                  rows={1}
                  className="flex-1 px-5 py-4 bg-transparent focus:outline-none resize-none disabled:cursor-not-allowed text-sm placeholder:text-gray-400"
                  style={{ maxHeight: '200px', overflowY: 'auto' }}
                />
                <div className="flex items-center gap-2 px-3 py-3">
                  {/* Character/Action indicators */}
                  <div className="flex items-center gap-2">
                    {inputMessage.trim() && !sending && (
                      <span className="text-xs text-gray-400 hidden sm:block">
                        Enter ↵
                      </span>
                    )}
                  </div>
                  {/* Send Button */}
                  <button
                    type="submit"
                    disabled={!inputMessage.trim() || sending}
                    className="group relative p-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all disabled:bg-gray-200 disabled:cursor-not-allowed shadow-sm hover:shadow-lg disabled:shadow-none transform hover:scale-105 disabled:scale-100"
                    title={sending ? 'Mengirim...' : 'Kirim pesan'}
                  >
                    {sending ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send size={20} className="transition-transform group-hover:translate-x-0.5" />
                    )}
                  </button>
                </div>
              </div>
            </form>
            {/* Helper text with icons */}
            <div className="flex items-center justify-between mt-3 px-2">
              <p className="text-xs text-gray-400 flex items-center gap-1.5">
                <Icon icon="material-symbols:info-outline" className="text-sm" />
                RupaGen AI dapat membuat kesalahan. Harap verifikasi informasi penting.
              </p>
              <div className="hidden sm:flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs">Enter</kbd>
                  Kirim
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs">Shift + Enter</kbd>
                  Baris baru
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
