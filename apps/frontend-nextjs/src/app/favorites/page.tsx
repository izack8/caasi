'use client'

import MotionWrapper from '@/components/ui/MotionWrapper';
import PageHeader from '@/components/ui/PageHeader';

export default function FavoritesPage() {
  const favThings = [
    {desc:"🧴 the fragrance from a bottle of shampoo you've never used before"},
    {desc:"👯‍♀️ seeing friends running towards each other, laughing and smiling, after being apart for a long time"},
    {desc:"🥤 drinking an iced cold coke"},
    {desc:"🗓️ when an expiry date falls on the same day as your birthday"},
    {desc:"🍰 successfully baking a banana bread!!!"},
    {desc:"👨‍🎤 going to an artiste's concert you know all the songs to"},
    {desc:"🎶 when a song has THAT specific rhythm/beat (intro of flowers - sunship)"},
    {desc:"🀄️ getting a wombo combo in mahjong"},
    {desc:"🎱 the anticipation that comes before a really fun plan"},
    {desc:"🇦🇺 2024 australia roadtrip grad trip with uni mates"},
    {desc:"🍜 shin ramyun after alcohol"},
    {desc:"☔️ sleeping in on a rainy day"},
    {desc:"👯 my friends"},
    {desc:"🎥 facetiming my long-distance besties"},
    {desc:"💰 thinking you're broke, but suddenly finding random cash in your pocket"},
    {desc:"😴 the break you enjoy when you're in between jobs"},
  ]

  return (
    <MotionWrapper id="favorites">

      <PageHeader title="🌻" subtitle={`"these are a few of my favorite things"`} />
      <div className='flex flex-col gap-y-10'>
        <ul className="text-md">
          {favThings.map((thing, index) => (
            <li className="p-1" key={index} >{thing.desc}</li>
          ))}
        </ul>
      </div>
    </MotionWrapper>
  );
}  
