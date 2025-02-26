import { NextResponse } from 'next/server';

export async function GET() {
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  await delay(2000); // 2-second delay

  const categories = {
    network: Math.floor(Math.random() * 100) + 1,
    experience: Math.floor(Math.random() * 100) + 1,
    personal: Math.floor(Math.random() * 100) + 1,
    socialMedia: Math.floor(Math.random() * 100) + 1,
    reputation: Math.floor(Math.random() * 100) + 1,
  };

  const score = Math.floor(
    (categories.network +
      categories.experience +
      categories.personal +
      categories.socialMedia +
      categories.reputation) / 5
  );

  return NextResponse.json({
    score,
    categories,
  });
}