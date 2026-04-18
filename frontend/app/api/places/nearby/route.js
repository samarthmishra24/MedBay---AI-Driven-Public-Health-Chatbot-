import { NextResponse } from 'next/server';

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const radius = searchParams.get('radius') || 5000;

  if (!lat || !lng) {
    return NextResponse.json(
      { error: 'Latitude and longitude are required' },
      { status: 400 }
    );
  }

  if (!GOOGLE_PLACES_API_KEY) {
    return NextResponse.json(
      { error: 'Google Places API key is not configured' },
      { status: 500 }
    );
  }

  console.log('Places API Request:', { lat, lng, radius });
  console.log('API Key configured: Yes');

  try {
    const response = await fetch('https://places.googleapis.com/v1/places:searchNearby', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': GOOGLE_PLACES_API_KEY,
        'X-Goog-FieldMask': 'places.id,places.displayName,places.location,places.formattedAddress,places.rating,places.userRatingCount,places.businessStatus,places.currentOpeningHours'
      },
      body: JSON.stringify({
        includedTypes: ['hospital'],
        maxResultCount: 20,
        locationRestriction: {
          circle: {
            center: {
              latitude: parseFloat(lat),
              longitude: parseFloat(lng)
            },
            radius: parseFloat(radius)
          }
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Places API Error:', data);
      throw new Error(data.error?.message || 'Places API request failed');
    }

    console.log('Places API Response: OK,', (data.places || []).length, 'results');

    // Normalize to match the shape your frontend already expects
    const normalized = (data.places || []).map(p => ({
      place_id: p.id,
      name: p.displayName?.text,
      vicinity: p.formattedAddress,
      rating: p.rating,
      user_ratings_total: p.userRatingCount,
      business_status: p.businessStatus,
      opening_hours: {
        open_now: p.currentOpeningHours?.openNow ?? null
      },
      geometry: {
        location: {
          lat: p.location.latitude,
          lng: p.location.longitude
        }
      }
    }));

    return NextResponse.json({ results: normalized });

  } catch (error) {
    console.error('Error fetching nearby places:', error);
    return NextResponse.json(
      { error: 'Failed to fetch nearby places' },
      { status: 500 }
    );
  }
}