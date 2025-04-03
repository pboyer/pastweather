import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCities,
  getCityBySlug,
  getCityWeatherBySlug,
} from "@/services/weatherService";
import WeatherDetail from "@/components/WeatherDetail";

export const revalidate = 21600; // Revalidate every 6 hours

interface CityPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const city = await getCityBySlug(params.slug);

  if (!city) {
    return {
      title: "City Not Found",
    };
  }

  return {
    title: `${city.display_name} Weather History - Yesterday's Weather`,
    description: `View historical weather data for ${city.display_name} including temperature, precipitation, and snow measurements.`,
  };
}

export async function generateStaticParams() {
  const cities = await getCities();
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export default async function CityPage({ params }: CityPageProps) {
  const cityWeather = await getCityWeatherBySlug(params.slug);

  if (!cityWeather) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        {cityWeather.city}, {cityWeather.state} Weather History
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Historical weather data from {cityWeather.stationName}
      </p>

      <WeatherDetail weatherData={cityWeather} />
    </div>
  );
}
