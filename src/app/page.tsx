import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full bg-gray-200 mb-6 overflow-hidden">
          <Image 
            src="/images/profile.jpg" 
            alt="Fitria Damayanti"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        
        <h1 className="text-4xl font-bold mb-2">
          Hi, I'm Fitria Damayanti
        </h1>
        
        <p className="text-xl text-gray-600 mb-4">
          S2 Information Technology | UGM
        </p>
        
        <p className="text-gray-700 mb-8 max-w-md">
          I build web applications and care about digital literacy. 
          Currently balancing tech, family, and preparing for civil service exams.
        </p>

        <div className="flex gap-4">
          <Link 
            href="/projects"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link 
            href="/about"
            className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            About Me
          </Link>
        </div>
      </div>
    </main>
  );
}