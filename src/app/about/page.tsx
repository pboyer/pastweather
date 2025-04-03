import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Yesterday's Weather | Historical Weather Data",
  description:
    "Learn about Yesterday's Weather, our data collection process, and how we use the NOAA Climate Data Online API to provide historical weather information.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        About Yesterday&apos;s Weather
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Yesterday&apos;s Weather provides access to historical weather data
            for cities across the United States. Our goal is to make
            meteorological data easily accessible and understandable for
            everyone, from weather enthusiasts to researchers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Data Sources</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We collect and process weather data from the NOAA Climate Data
            Online (CDO) API. This data is sourced from weather stations near
            each city and includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Daily maximum temperatures</li>
            <li>Precipitation amounts</li>
            <li>Snow measurements</li>
            <li>Other meteorological indicators</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Data Collection</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our system automatically collects weather data on a daily basis. For
            each city, we identify the nearest weather station and retrieve the
            most recent historical data. This information is then processed and
            stored in our database for display on this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Cities We Cover</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We currently provide weather data for the following cities:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Chicago, Illinois</li>
            <li>Los Angeles, California</li>
            <li>Durham, North Carolina</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 mt-4">
            We plan to expand our coverage to include more cities in the future.
          </p>
        </section>

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
