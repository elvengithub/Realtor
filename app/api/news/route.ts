import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  
  const apiUrl = process.env.HOMESPH_NEWS_API_URL;
  const apiKey = process.env.HOMESPH_NEWS_API_KEY;

  if (!apiUrl || !apiKey || apiUrl === 'http://your-news-server.com') {
    // Return mock data for development until a real API URL is provided
    return NextResponse.json({
      site: { name: "HomesPh Development" },
      data: {
        data: [
          {
            id: 101,
            category: "API Test",
            title: "HomesPh Proxy API Connected Successfully!",
            description: "If you are seeing this, your frontend -> Next.js Proxy architecture is working perfectly. Update your .env to see real news.",
            date: new Date().toLocaleDateString(),
            author: "System Administrator",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
          },
          {
            id: 102,
            category: "Platform Updates",
            title: "New Agency Landing Pages Launching Soon",
            description: "The digital luxury market is expanding. HomesPh is rolling out high-performance single-page templates.",
            date: new Date().toLocaleDateString(),
            author: "Anthony Leuterio",
            imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
          }
        ]
      }
    });
  }

  try {
    const res = await fetch(`${apiUrl}/api/external/articles?page=${page}`, {
      headers: {
        'X-Site-Api-Key': apiKey,
        'Accept': 'application/json'
      },
      next: { revalidate: 60 * 5 } // Cache for 5 minutes
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch from external news API' },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("News Proxy Error:", error);
    return NextResponse.json(
      { error: 'Internal server error while fetching news' },
      { status: 500 }
    );
  }
}
