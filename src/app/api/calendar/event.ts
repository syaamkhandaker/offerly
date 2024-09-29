import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { accessToken, eventData } = req.body;
  if (!accessToken || !eventData) {
    return res
      .status(400)
      .json({ message: "Missing access token or event data" });
  }

  try {
    const event = {
      summary: eventData.title,
      description: eventData.description,
      start: {
        dateTime: eventData.startDateTime,
        timeZone: "America/New_York",
      },
      end: {
        dateTime: eventData.endDateTime,
        timeZone: "America/New_York",
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 7 * 24 * 60 }, // 1 week before
          { method: "email", minutes: 3 * 24 * 60 }, // 3 days before
          { method: "email", minutes: 2 * 24 * 60 }, // 2 days before
          { method: "email", minutes: 24 * 60 }, // 1 day before
        ],
      },
    };

    // request to Google Calendar API
    const response = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      }
    );

    if (response.ok) {
      res.status(200).json({ message: "Event created successfully" });
    } else {
      const error = await response.json();
      res.status(response.status).json({ message: error.message });
    }
  } catch (error) {
    console.error("Error creating event on Google Calendar:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
