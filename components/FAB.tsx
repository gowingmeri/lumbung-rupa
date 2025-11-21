import Link from "next/link";

const FAB = () => {
  return (
    <Link 
      href="/rupagen-ai"
      className="fixed bottom-5 right-5 bg-primary text-white p-5 rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50"
    >
      RupaGen AI
    </Link>
  );
};

export default FAB;