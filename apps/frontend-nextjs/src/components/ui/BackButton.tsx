'use client';

import { FaAngleLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className="tab font-semibold pb-1 transition-colors duration-200 text-gray-700 hover:text-black"
      onClick={() => router.back()}
    >
      <FaAngleLeft className="inline mr-1" />
      back to projects
    </button>
  );
}
