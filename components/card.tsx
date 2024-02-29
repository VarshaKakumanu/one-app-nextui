"use client";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { HeartIcon } from "./icons";
import { Chip } from "@nextui-org/chip";

export default function Cardcomponent() {
  const list = [
    {
      title: "Orange",
      img: "/mocks/mock1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/mocks/mock2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/mocks/mock3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/mocks/mock4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/mocks/mock5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/mocks/mock6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/mocks/mock7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/mocks/mock8.jpeg",
      price: "$12.20",
    },
  ];

  const [liked, setLiked] = React.useState(false);

  return (
    <div className='gap-2 grid grid-cols-2 sm:grid-cols-4'>
      {list.map((item, index) => (
        <Card
          shadow='sm'
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}>
          <CardHeader className='absolute z-20 top-1 flex justify-around'>
            <Chip radius='sm'>Acme camera</Chip>

            <Button
              isIconOnly
              className='text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2'
              radius='full'
              variant='faded'
              onPress={() => setLiked((v) => !v)}>
              <HeartIcon
                key={index}
                className={liked ? "[&>path]:stroke-transparent" : ""}
                fill={liked ? "currentColor" : "none"}
              />
            </Button>
          </CardHeader>
          <CardBody className='overflow-visible p-0'>
            <Image
              shadow='sm'
              radius='lg'
              width='100%'
              alt={item.title}
              className='w-full object-cover h-[140px] bg-red-200'
              src='/mocks/mock1.jpeg'
            />
          </CardBody>
          <CardFooter className='text-small justify-between'>
            <b>{item.title}</b>
            <p className='text-default-500'>{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
