import { Metadata } from "next";
import WeatherCard from "@/components/WeatherCard";
import { getAllCitiesWeather } from "@/services/weatherService";

export const metadata: Metadata = {
  title: "Yesterday's Weather - Historical US Weather Data",
  description:
    "Browse historical weather data for major cities across the United States including Chicago, Los Angeles, and Durham.",
};

// Revalidate the page every 6 hours
export const revalidate = 21600;

export default async function Home() {
  const citiesWeather = await getAllCitiesWeather();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Yesterday&apos;s Weather</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Historical weather data for cities across the United States
      </p>

      {citiesWeather.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">
            No Weather Data Available
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Weather data is currently being collected. Please check back later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {citiesWeather.map((cityWeather) => (
            <WeatherCard key={cityWeather.fullName} weatherData={cityWeather} />
          ))}
        </div>
      )}
    </div>
  );
}
