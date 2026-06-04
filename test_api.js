require('dotenv').config({ path: '.env.local' });

async function test() {
  const url = process.env.GOOGLE_SHEETS_WEB_APP_URL;
  if (!url) {
    console.error("No URL found in .env.local");
    return;
  }
  console.log("Found URL:", url);

  const payload = {
    name: "Test Name",
    email: "test@example.com",
    phone: "1234567890",
    interest: "residential",
    projectDetails: "Test message"
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log("Status:", response.status);
    console.log("Body:", responseText);

    if (!response.ok || responseText.includes('Script function not found') || responseText.includes('<title>Error</title>')) {
      console.log("Custom error triggered");
    } else {
      console.log("Success triggered");
    }
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

test();
