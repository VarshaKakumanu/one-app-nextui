"use client";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { HeartIcon } from "./icons";

export default function Cardcomponent() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
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
          <CardHeader className='absolute z-10 top-1 flex-col items-start'>
            <p className='text-tiny text-white/60 uppercase font-bold'>New</p>
            <h4 className='text-black font-medium text-2xl'>Acme camera</h4>
          </CardHeader>
          <CardBody className='overflow-visible p-0'>
            <Image
              shadow='sm'
              radius='lg'
              width='100%'
              alt={item.title}
              className='w-full object-cover h-[140px]'
              src={item.img}
            />
          </CardBody>
          <CardFooter className='text-small justify-between'>
            <b>{item.title}</b>
            <p className='text-default-500'>{item.price}</p>
            <Button
              isIconOnly
              className='text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2'
              radius='full'
              variant='light'
              onPress={() => setLiked((v) => !v)}>
              <HeartIcon
                key={index}
                className={liked ? "[&>path]:stroke-transparent" : ""}
                fill={liked ? "currentColor" : "none"}
              />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
