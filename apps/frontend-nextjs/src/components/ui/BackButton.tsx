'use client';

import { FaAngleLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function BackButton({section}: {section?: string}) {
  const router = useRouter();

  return (
    <div className="mb-5">
    <button
      className="tab font-semibold gap-x-1 transition-colors duration-300 text-gray-600 hover:text-black flex flex-row items-center"
      onClick={() => router.back()}
    >
      <FaAngleLeft />
      back {section ? `to ${section}` : ''}
    </button>
    </div>
  );
}
