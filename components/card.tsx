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
    <div className='gap-3 grid grid-cols-2 sm:grid-cols-4'>
      {list.map((item, index) => (
        <Card
          shadow='sm'
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}>
          <CardHeader className='absolute z-20 -top-2 right-1 flex justify-between '>
            <Chip radius='sm'>Acme camera</Chip>

            <Button
              isIconOnly
              className='data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2 mt-3'
              radius='full'
              variant='faded'
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
              src='/mocks/mock1.jpeg'
            />
          </CardBody>
          <CardFooter className='text-small grid grid-cols-2 grid-flow-rows justify-start gap-1.5'>
            <p className='flex justify-start items-center'>
              <b>{item.title}</b>
            </p>
            <p className='flex justify-end items-center'>
              <NavigationIcon />
              0.7min
            </p>
            <p className='flex text-default-500 justify-start items-center'>
              {item.price}
            </p>

            <p className='flex justify-end items-center'>322337</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
