import { NextResponse } from 'next/server';

export function GET() {
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