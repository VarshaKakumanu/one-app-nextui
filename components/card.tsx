
"use client";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { HeartIcon, HeartFilledIcon, NavigationIcon, BookmarkIcon, BookmarkFilledIcon } from "./icons";
import { Chip } from "@nextui-org/chip";

export default function Cardcomponent() {
  const list = [
    {
      address: "3039 Shrine Place",
      img: "/mocks/mock1.jpeg",
      price: "$1700/month",
      distance: 0.3,
      bedroom: 2,
      bath: 1,
      leasingDate: "June 2023 - May 2024",
      tags: ["Near USC", "Pet Friendly"]
    },
    {
      address: "2901 S Figueroa St",
      img: "/mocks/mock2.jpeg",
      price: "$2100/month",
      distance: 0.5,
      bedroom: 3,
      bath: 2,
      leasingDate: "June 2023 - May 2024",
      tags: ["Near USC", "Newly Renovated"]
    },
    {
      address: "3335 S Hoover St",
      img: "/mocks/mock3.jpeg",
      price: "$2500/month",
      distance: 0.8,
      bedroom: 3,
      bath: 2,
      leasingDate: "May 2023 - August 2023",
      tags: ["Summer Lease", "Garage Parking"]
    },
    {
      address: "1234 W 30th St",
      img: "/mocks/mock4.jpeg",
      price: "$1900/month",
      distance: 0.2,
      bedroom: 2,
      bath: 2,
      leasingDate: "June 2023 - May 2024",
      tags: ["Walk to USC", "Pool Access"]
    },
    {
      address: "2724 Ellendale Pl",
      img: "/mocks/mock5.jpeg",
      price: "$2200/month",
      distance: 0.4,
      bedroom: 2,
      bath: 2,
      leasingDate: "June 2023 - May 2024",
      tags: ["Close to Campus", "High-Speed Internet"]
    },
    {
      address: "870 W Adams Blvd",
      img: "/mocks/mock6.jpeg",
      price: "$1800/month",
      distance: 0.6,
      bedroom: 1,
      bath: 1,
      leasingDate: "May 2023 - August 2023",
      tags: ["Summer Lease", "Fully Furnished"]
    },
    {
      address: "3584 S Figueroa St",
      img: "/mocks/mock7.jpeg",
      price: "$2600/month",
      distance: 0.7,
      bedroom: 3,
      bath: 2,
      leasingDate: "June 2023 - May 2024",
      tags: ["Near USC", "New Appliances"]
    },
    {
      address: "1100 W 27th St",
      img: "/mocks/mock8.jpeg",
      price: "$2000/month",
      distance: 0.25,
      bedroom: 2,
      bath: 1,
      leasingDate: "June 2023 - May 2024",
      tags: ["Quiet Neighborhood", "Spacious"]
    }
  ];

  const [liked, setLiked] = React.useState({});

  return (
    <div className='gap-4 grid grid-cols-2 sm:grid-cols-4'>
      {list.map((item, index) => (
        <Card
          shadow='sm'
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}>
          <CardHeader className='absolute z-20 -top-2 right-1 flex justify-between '>
            <Chip radius='sm' radius='sm' style={{ backgroundColor: '#2D3648', color: 'white' }}>{item.price}</Chip>

            <Button
              variant="solid"
              color="white"
              isIconOnly
              css={{
                mt: '$3',
                transform: 'translateY(-$2) translateX($2)',
                background: 'none', // Ensures no background color
                border: 'none', // Ensures no border
                padding: 0, // Removes padding
                borderRadius: '0', // Removes border-radius if any
                '&:hover': {
                  background: 'none', // Keeps background on hover also none
                  opacity: 0.7 // Adds a slight hover effect
                },
                '&:active': {
                  background: 'none', // Ensures that the active state has no background
                },
                '&:focus': {
                  boxShadow: 'none', // Removes box-shadow on focus
                }
              }}
              key={index}
              onPress={() => {
                setLiked(prev => ({
                  ...prev,
                  [item.address]: !prev[item.address]
                }));
              }}
            >
              {liked[item.address] ? (
                <BookmarkFilledIcon
                  strokeWidth={1.5}
                  fontSize={20} // Adjust stroke width as needed for filled icon
                />
              ) : (
                <BookmarkIcon
                  size={20}
                  strokeWidth={2} // Adjust stroke width as needed for outlined icon
                />
              )}
            </Button>

          </CardHeader>
          <CardBody className='overflow-visible p-0 '>
            <Image
              shadow='sm'
              radius='lg'
              width='100%'
              alt={item.address}
              className='w-full object-cover h-[140px]'
              src={item.img}
            />
          </CardBody>
          <CardFooter className='text-small grid grid-cols-3 items-center gap-1.5'>
            {/* Address with bold styling, taking up two columns */}
            <p className='col-span-2 flex justify-start items-center font-bold'>
              {item.address}
            </p>
            {/* Distance with the navigation icon on the same line as the address, in the third column */}
            <p className='flex justify-end items-center'>
              <span className='flex items-center'>
                <NavigationIcon />
                {item.distance} mi
              </span>
            </p>
            {/* Leasing date on a new line, spanning all three columns */}
            <p className='col-span-2 flex justify-start items-center'>
              {item.leasingDate}
            </p>
            {/* Beds and baths information on the same line as leasing date, also spanning all three columns */}
            <p className='flex justify-end items-center'>
              {item.bedroom}B{item.bath}B
            </p>
          </CardFooter>

        </Card>
      ))}
    </div>
  );
}