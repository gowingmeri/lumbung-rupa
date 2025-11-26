'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RupagenAIPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to a new chat when visiting /rupagen-ai
    router.push('/rupagen-ai/new');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full"></div>
        {/* <p className="mt-4 text-gray-600">Loading RupaGen AI...</p> */}
      </div>
    </div>
  );
}
