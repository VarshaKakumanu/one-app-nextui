
"use client";
import React, { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { HeartIcon, HeartFilledIcon, NavigationIcon, BookmarkIcon, BookmarkFilledIcon } from "./icons";
import { Chip } from "@nextui-org/chip";

interface Property {
  address: string;
  img: string;
  price: string;
  distance: number;
  bedroom: number;
  bath: number;
  leasingDate: string;
  tags: string[];
}

export default function Cardcomponent() {

  const [list, setList] = useState<Property[]>([]);
  const [liked, setLiked] = React.useState({});

  useEffect(() => {
    fetch("/properties.json")
      .then(response => response.json())
      .then(data => setList(data))
      .catch(error => console.error("Error loading properties:", error));
  }, []);

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
                <BookmarkFilledIcon/>
              ) : (
                <BookmarkIcon/>
              )}
            </Button>

          </CardHeader>
          <CardBody className='overflow-visible p-0 '>
            <Image
              shadow='sm'
              radius='xl'
              width='100%'
              height='100%'
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