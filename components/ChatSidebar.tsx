'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getChatTitles, createChatTitle } from '@/services/rupagenService';
import { ChatTitle } from '@/types/rupagen';
import { Plus, MessageSquare, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { Icon } from '@iconify/react';

export default function ChatSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [chatTitles, setChatTitles] = useState<ChatTitle[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    loadChatTitles();
  }, [currentPage]);

  async function loadChatTitles() {
    try {
      setLoading(true);
      setError(null);
      const response = await getChatTitles(currentPage, 20);
      setChatTitles(response?.data || []);
      setTotalPages(response?.pagination?.totalPages || 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal memuat riwayat chat');
      console.error('Error loading chat titles:', err);
      setChatTitles([]); // Reset on error
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreateNewChat() {
    try {
      setCreating(true);
      setError(null);
      const newTitle = await createChatTitle();
      router.push(`/rupagen-ai/${newTitle._id}`);
      setIsMobileOpen(false);
      loadChatTitles(); // Refresh list
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Gagal membuat chat baru');
      console.error('Error creating chat:', err);
    } finally {
      setCreating(false);
    }
  }

  function handleChatClick(titleId: string) {
    router.push(`/rupagen-ai/${titleId}`);
    setIsMobileOpen(false);
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
      return 'Hari ini';
    } else if (diffInDays === 1) {
      return 'Kemarin';
    } else if (diffInDays < 7) {
      return `${diffInDays} hari lalu`;
    } else {
      return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
      });
    }
  }

  const getCurrentChatId = () => {
    const parts = pathname.split('/');
    return parts[parts.length - 1];
  };

  const currentChatId = getCurrentChatId();

  // Mobile toggle button
  const MobileToggle = () => (
    <button
      onClick={() => setIsMobileOpen(!isMobileOpen)}
      className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
    >
      {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );

  const SidebarContent = () => (
    <div className={`h-full flex flex-col bg-white border-r border-gray-200 ${isCollapsed ? 'w-16' : 'w-full'}`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <MessageSquare className="text-primary" size={24} />
            <h2 className="font-semibold text-gray-900">Chat History</h2>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:block p-1 hover:bg-gray-100 rounded-lg transition-colors"
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <button
          onClick={handleCreateNewChat}
          disabled={creating}
          className={`w-full px-4 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:bg-primary/50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${isCollapsed ? 'px-2' : ''}`}
          title="New Chat"
        >
          {creating ? (
            <span className="animate-spin">⏳</span>
          ) : (
            <>
              <Plus size={20} />
              {!isCollapsed && <span>Chat Baru</span>}
            </>
          )}
        </button>
      </div>

      {/* Error Message */}
      {error && !isCollapsed && (
        <div className="mx-4 mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-8 text-center text-gray-500">
            <div className="animate-spin inline-block w-6 h-6 border-3 border-primary border-t-transparent rounded-full"></div>
            {!isCollapsed && <p className="mt-2 text-sm">Loading...</p>}
          </div>
        ) : chatTitles.length === 0 ? (
          !isCollapsed && (
            <div className="p-4 text-center text-gray-500 text-sm">
              <p>Belum ada riwayat chat</p>
            </div>
          )
        ) : (
          <div className="space-y-1 px-2">
            {chatTitles.map((chat) => {
              const isActive = currentChatId === chat._id;
              return (
                <button
                  key={chat._id}
                  onClick={() => handleChatClick(chat._id)}
                  className={`w-full p-3 text-left rounded-xl transition-all ${
                    isActive
                      ? 'bg-primary/10 border border-primary/30'
                      : 'hover:bg-gray-100 border border-transparent'
                  } ${isCollapsed ? 'px-2' : ''}`}
                  title={isCollapsed ? chat.title : ''}
                >
                  {isCollapsed ? (
                    <div className="flex justify-center">
                      <MessageSquare size={20} className={isActive ? 'text-primary' : 'text-gray-600'} />
                    </div>
                  ) : (
                    <div>
                      <h3 className={`font-medium truncate text-sm ${isActive ? 'text-primary' : 'text-gray-900'}`}>
                        {chat.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDate(chat.createdAt)}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && !isCollapsed && (
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between gap-2 text-sm">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Prev
            </button>
            <span className="text-xs text-gray-600">
              {currentPage}/{totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <MobileToggle />
      
      {/* Desktop Sidebar */}
      <aside className={`hidden lg:block ${isCollapsed ? 'w-16' : 'w-80'} transition-all duration-300`}>
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileOpen(false)} />
          <aside className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-xl">
            <SidebarContent />
          </aside>
        </div>
      )}
    </>
  );
}
