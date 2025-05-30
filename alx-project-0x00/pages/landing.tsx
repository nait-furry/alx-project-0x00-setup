import Card from "@/components/Card"
import React from "react";
import Button from '@/components/Button';


const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
export default Landing
// File: pages/landing.tsx

export const LandingPage: React.FC = () => {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold mb-4">Landing Page Button Variants</h1>
      <div className="space-y-2">
        <Button title="Small Rounded-sm" styles="text-sm rounded-sm bg-blue-500" />
        <Button title="Medium Rounded-md" styles="text-base rounded-md bg-green-500" />
        <Button title="Large Rounded-full" styles="text-lg rounded-full bg-red-500" />
        <Button title="Extra Rounded-lg" styles="text-lg rounded-lg bg-purple-500" />
      </div>
    </div>
  );
};
/*
*/