import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const GOOGLE_SHEETS_WEB_APP_URL = process.env.GOOGLE_SHEETS_WEB_APP_URL

    if (!GOOGLE_SHEETS_WEB_APP_URL) {
      console.error('Missing GOOGLE_SHEETS_WEB_APP_URL environment variable')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const responseText = await response.text()
    
    // Google Apps Script usually returns 200 even for script errors. We check the content.
    if (!response.ok || responseText.includes('Script function not found') || responseText.includes('<title>Error</title>')) {
      console.error(`Google Apps Script API Error: Status ${response.status}`, responseText)
      return NextResponse.json(
        { error: 'Failed to submit to Google Sheets. Check Apps Script logs.' },
        { status: 400 } // Send 400 so the frontend shows the error
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })

  } catch (error) {
    console.error('Error in contact API proxy to Google Sheets:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
