import Card from "@/components/card"

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

import React from 'react';
import Button from '../components/Button';

export const LandingPage: React.FC = () => {
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-2xl font-bold mb-4">Landing Page Button Variants</h1>
      <div className="space-y-2">
        <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
        <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
        <Button title="Large Rounded-full" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};
/*
*/