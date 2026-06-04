import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // Payload is already formatted in the frontend:
    // { name, email, phone, interest, projectDetails }

    // Google Apps Script Web App URL should be provided in environment variables
    const GOOGLE_SHEETS_WEB_APP_URL = process.env.GOOGLE_SHEETS_WEB_APP_URL

    if (!GOOGLE_SHEETS_WEB_APP_URL) {
      console.error('Missing GOOGLE_SHEETS_WEB_APP_URL environment variable')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Proxy the request to Google Apps Script
    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      console.error(`Google Apps Script API Error: Status ${response.status}`)
      return NextResponse.json(
        { error: 'Failed to submit to Google Sheets' },
        { status: response.status }
      )
    }

    // Google Apps Script may return varying JSON or text, depending on user's return ContentService.
    // For safety, we just return success: true.
    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error('Error in contact API proxy to Google Sheets:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
