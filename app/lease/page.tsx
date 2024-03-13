"use client";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";
import Map from "@/components/map";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function AboutPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // You can perform further actions here, like sending data to your server
  };
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const imageList = [
    {
      id: 1,
      imageUrl: "/mocks/mock6.jpeg",
    },
    {
      id: 2,
      imageUrl: "/mocks/mock1.jpeg",
    },
    {
      id: 3,
      imageUrl: "/mocks/mock3.jpeg",
    },
  ];

  let tabs = [
    {
      id: "photos",
      label: "Photos",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "music",
      label: "Music",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "videos",
      label: "Videos",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  const animals = [
    {
      label: "Cat",
      value: "cat",
      description: "The second most popular pet in the world",
    },
    {
      label: "Dog",
      value: "dog",
      description: "The most popular pet in the world",
    },
    {
      label: "Elephant",
      value: "elephant",
      description: "The largest land animal",
    },
    { label: "Lion", value: "lion", description: "The king of the jungle" },
    { label: "Tiger", value: "tiger", description: "The largest cat species" },
    {
      label: "Giraffe",
      value: "giraffe",
      description: "The tallest land animal",
    },
    {
      label: "Dolphin",
      value: "dolphin",
      description: "A widely distributed and diverse group of aquatic mammals",
    },
    {
      label: "Penguin",
      value: "penguin",
      description: "A group of aquatic flightless birds",
    },
    {
      label: "Zebra",
      value: "zebra",
      description: "A several species of African equids",
    },
    {
      label: "Shark",
      value: "shark",
      description:
        "A group of elasmobranch fish characterized by a cartilaginous skeleton",
    },
    {
      label: "Whale",
      value: "whale",
      description: "Diverse group of fully aquatic placental marine mammals",
    },
    {
      label: "Otter",
      value: "otter",
      description: "A carnivorous mammal in the subfamily Lutrinae",
    },
    {
      label: "Crocodile",
      value: "crocodile",
      description: "A large semiaquatic reptile",
    },
  ];

  const [mainImage, setMainImage] = useState("/mocks/mock3.jpeg"); // Initial main image

  const handleImageClick = (imageUrl: any) => {
    setMainImage(imageUrl); // Set clicked image as main image
  };
  return (
    <div>
      <section className='w-full'>
        <div className='container  px-4 w-full'>
          <h1 className='sm: text-2xl font-bold text-gray-900 sm:text-3xl text-start'>
            Afro-Brazillian Coffee
          </h1>

          <div className='lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16 w-full'>
            <div className='lg:col-span-6 lg:row-end-1 w-full'>
              <div className='flex w-full gap-4'>
                {/* list of images */}
                <div className='mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0'>
                  <div className='flex flex-row items-start lg:flex-col'>
                    {imageList.map((image) => (
                      <button
                        key={image.id}
                        type='button'
                        className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                          mainImage === image.imageUrl
                            ? "border-gray-900"
                            : "border-transparent"
                        } text-center`}
                        onClick={() => handleImageClick(image.imageUrl)}>
                        <img
                          className='h-full w-full object-cover'
                          src={image.imageUrl}
                          alt={`Image ${image.id}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                {/* main image */}
                <div className='lg:order lg:ml-5'>
                  <div className='max-w-xl overflow-hidden rounded-lg'>
                    <img
                      className='h-72 max-w-xl object-cover'
                      src={mainImage}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* card login and price */}
            <div>
              {" "}
              <Card className='py-4 w-full'>
                <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
                  <p className='text-tiny uppercase font-bold'>Daily Mix</p>
                  <small className='text-default-500'>12 Tracks</small>
                  <h4 className='font-bold text-large'>Frontend Radio</h4>
                </CardHeader>
                <CardBody className='overflow-visible py-2 w-full'>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-2'>
                      {/* Register email input */}
                      <Checkbox defaultSelected>Option</Checkbox>
                      <Input
                        isClearable
                        type='email'
                        label='Email'
                        variant='bordered'
                        placeholder='Enter your email'
                        defaultValue='junior@nextui.org'
                        onClear={() => console.log("input cleared")}
                        className='max-w-xs'
                      />
                      {/* Register password input */}
                      <Input
                        label='Password'
                        variant='bordered'
                        placeholder='Enter your password'
                        endContent={
                          <button
                            className='focus:outline-none'
                            type='button'
                            onClick={toggleVisibility}>
                            {isVisible ? (
                              <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                            ) : (
                              <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                            )}
                          </button>
                        }
                        type={isVisible ? "text" : "password"}
                        className='max-w-xs'
                      />

                      {/* Submit button */}
                      <Button color='primary' type='submit'>
                        Button
                      </Button>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </div>
            {/* map */}
            <div>
              <Card>
                <div
                  id='mapContainer'
                  className='inline-block w-full text-center rounded-xl justify-center'>
                  <Map longitude={0} latitude={0} zoom={0} />
                </div>
              </Card>
            </div>
            {/* properties, aminities and fee */}
            <div>
              <div className='flex w-full flex-col'>
                <Tabs aria-label='Dynamic tabs' items={tabs}>
                  {(item: any) => (
                    <Tab key={item.id} title={item.label}>
                      <Card>
                        <CardBody>{item.content}</CardBody>
                      </Card>
                    </Tab>
                  )}
                </Tabs>
              </div>
            </div>
            {/* filter select */}
            <div className='flex flex-col gap-2'>
              <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
                <Select label='Select an animal' className='max-w-xs'>
                  {animals.map((animal: any) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  label='Favorite Animal'
                  placeholder='Select an animal'
                  className='max-w-xs'>
                  {animals.map((animal: any) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  label='Favorite Animal'
                  placeholder='Select an animal'
                  className='max-w-xs'>
                  {animals.map((animal: any) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div>
                <h1>username</h1>
                <p>price place</p>
              </div>
            </div>
            {/* <div className='lg:col-span-6'>
              <div className='border-b border-gray-300'>
                <nav className='flex gap-4'>
                  <a
                    href='#'
                    title=''
                    className='border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800'>
                    {" "}
                    Description{" "}
                  </a>

                  <a
                    href='#'
                    title=''
                    className='inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600'>
                    Reviews
                    <span className='ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100'>
                      {" "}
                      1,209{" "}
                    </span>
                  </a>
                </nav>
              </div>

              <div className='mt-8 flow-root sm:mt-12'>
                <h1 className='text-3xl font-bold'>Delivered To Your Door</h1>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  accusantium nesciunt fuga.
                </p>
                <h1 className='mt-8 text-3xl font-bold'>
                  From the Fine Farms of Brazil
                </h1>
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  numquam enim facere.
                </p>
                <p className='mt-4'>
                  Amet consectetur adipisicing elit. Optio numquam enim facere.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore rerum nostrum eius facere, ad neque.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
