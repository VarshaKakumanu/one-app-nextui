
"use client";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { HeartIcon, NavigationIcon } from "./icons";
import { Chip } from "@nextui-org/chip";

export default function Cardcomponent() {
  const list = [
    {
      title: "3039 Shrine Place",
      img: "/mocks/mock1.jpeg",
      price: "$1700/month",
      distance: 0.3,
      bedroom: 2,
      bath: 1,
      leasingDate: "June 2023 - May 2024",
      tags: ["Near USC", "Pet Friendly"]
    },
    {
      address: "2901 S Figueroa St, Los Angeles, CA",
      img: "/mocks/mock2.jpeg",
      price: "$2100/month",
      distance: 0.5,
      bedroom: 3,
      bath: 2,
      leasingDate: "June 2023 - May 2024",
      tags: ["Near USC", "Newly Renovated"]
    },
    {
      address: "3335 S Hoover St, Los Angeles, CA",
      img: "/mocks/mock3.jpeg",
      price: "$2500/month",
      distance: 0.8,
      bedroom: 3,
      bath: 2,
      leasingDate: "May 2023 - August 2023",
      tags: ["Summer Lease", "Garage Parking"]
    },
    {
      address: "1234 W 30th St, Los Angeles, CA",
      img: "/mocks/mock4.jpeg",
      price: "$1900/month",
      distance: 0.2,
      bedroom: 2,
      bath: 2,
      leasingDate: "June 2023 - May 2024",
      tags: ["Walk to USC", "Pool Access"]
    },
    {
      address: "2724 Ellendale Pl, Los Angeles, CA",
      img: "/mocks/mock5.jpeg",
      price: "$2200/month",
      distance: 0.4,
      bedroom: 2,
      bath: 2,
      leasingDate: "June 2023 - May 2024",
      tags: ["Close to Campus", "High-Speed Internet"]
    },
    {
      address: "870 W Adams Blvd, Los Angeles, CA",
      img: "/mocks/mock6.jpeg",
      price: "$1800/month",
      distance: 0.6,
      bedroom: 1,
      bath: 1,
      leasingDate: "May 2023 - August 2023",
      tags: ["Summer Lease", "Fully Furnished"]
    },
    {
      address: "3584 S Figueroa St, Los Angeles, CA",
      img: "/mocks/mock7.jpeg",
      price: "$2600/month",
      distance: 0.7,
      bedroom: 3,
      bath: 2,
      leasingDate: "June 2023 - May 2024",
      tags: ["Near USC", "New Appliances"]
    },
    {
      address: "1100 W 27th St, Los Angeles, CA",
      img: "/mocks/mock8.jpeg",
      price: "$2000/month",
      distance: 0.25,
      bedroom: 2,
      bath: 1,
      leasingDate: "June 2023 - May 2024",
      tags: ["Quiet Neighborhood", "Spacious"]
    }
  ];

  const [liked, setLiked] = React.useState(false);

  return (
    <div className='gap-4 grid grid-cols-2 sm:grid-cols-4'>
      {list.map((item, index) => (
        <Card
          shadow='sm'
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}>
          <CardHeader className='absolute z-20 -top-2 right-1 flex justify-between '>
            <Chip radius='sm'>$1700/month</Chip>

            <Button
              isIconOnly
              className='data-[hover]:bg-foreground/5 -translate-y-2 translate-x-2 mt-3 '
              radius='full'
              variant='faded'
              key = 'index'
              onPress={() => setLiked((v) => !v)}>
              <HeartIcon
                className={liked ? "[&>path]:stroke-transparent" : ""}
                fill={liked ? "currentColor" : "none"}
              />
            </Button>
          </CardHeader>
          <CardBody className='overflow-visible p-0 '>
            <Image
              shadow='sm'
              radius='lg'
              width='100%'
              alt={item.title}
              className='w-full object-cover h-[140px] rounded-b-none'
              src={item.img}
            />
          </CardBody>
          <CardFooter className='text-small grid grid-cols-2 grid-flow-rows w-full justify-start gap-1.5'>
            <p className='flex justify-start items-center'>
              <b>{item.title}</b>
            </p>
            <p className='flex justify-end items-center'>
              <NavigationIcon />
              0.7min
            </p>
            <p className='flex text-xs justify-start items-center'>
              June 2023 - May 2024
            </p>

            <p className='flex justify-end items-center'>3B2B</p>
          </CardFooter>

        </Card>
      ))}
    </div>
  );
}