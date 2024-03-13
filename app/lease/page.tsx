"use client";
import { EyeFilledIcon, EyeSlashFilledIcon} from "@/components/icons";
import { LocationIcon, CalendarIcon, MessageIcon } from "@/components/icons";
import Map from "@/components/map";
import { title } from "@/components/primitives";
import { Button} from "@nextui-org/button";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Tab, Tabs } from "@nextui-org/tabs";
import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler, Controller} from "react-hook-form";
import { Avatar } from "@nextui-org/avatar";

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
    {
      id: 4,
      imageUrl: "/mocks/mock4.jpeg"
    }
  ];

  let tabs = [
    {
      id: "propertyinfo",
      label: "Property Info",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "amenities",
      label: "Amenities",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "fees",
      label: "Fees",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  type Inputs = {
    email: string;
    password: string;
    inviteRoommates: boolean;
    roommateEmail1: string;
    roommateEmail2: string;
  };

  const [mainImage, setMainImage] = useState("/mocks/mock3.jpeg"); // Initial main image

  const handleImageClick = (imageUrl: any) => {
    setMainImage(imageUrl); // Set clicked image as main image
  };


  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-3xl font-bold text-gray-900 sm:text-4xl mb-2 text-left'>2631 Magnolia Avenue</h1>
      <div className='flex items-center gap-2 mb-4'> {/* Container for icon and text */}
        <div className='flex-shrink-0 w-5'> {/* Container for the icon only */}
          <LocationIcon />
        </div>
        <span className='text-lg whitespace-nowrap'>1.1 mi from campus</span> {/* Prevent wrapping */}
      </div>


      <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4'>
      {/* Main content area - slightly smaller photo */}
        <div className='lg:col-span-8'>
          <img src={mainImage} alt='Main Property' className='rounded-3xl w-full h-auto object-cover' />
        </div>

        {/* Sidebar area - 4 thumbnails */}
        <div className='lg:col-span-4 grid grid-rows-4 gap-4'>
            {imageList.map((image, index) => (
              <button
                key={image.id}
                type='button'
                onClick={() => handleImageClick(image.imageUrl)}
                className={`relative w-full h-full overflow-hidden rounded-xl border-2 ${
                  mainImage === image.imageUrl ? 'border-gray-900' : 'border-transparent'
                }`}
                style={{
                  backgroundImage: `url(${image.imageUrl})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              />
            ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-2">
            {/* Selections */}
            <div className="grid grid-cols-3 gap-4 mb-4">
            <Select
              isRequired
              label="Occupancy"
              placeholder="Select occupancy"
              defaultSelectedKeys={["1"]}
            >
              {/* Assuming you have the data for these, otherwise define these options */}
              <SelectItem key="1" value="1">1 Person</SelectItem>
              <SelectItem key="2" value="2">2 People</SelectItem>
              <SelectItem key="3" value="3">3 People</SelectItem>
            </Select>

            <Select
              isRequired
              label="Bedrooms"
              placeholder="Select bedrooms"
              defaultSelectedKeys={["1"]}
            >
              {/* Replace with your bedroom data */}
              <SelectItem key="1" value="1">1 Bedroom</SelectItem>
              <SelectItem key="2" value="2">2 Bedrooms</SelectItem>
              <SelectItem key="3" value="3">3 Bedrooms</SelectItem>
            </Select>

            <Select
              isRequired
              label="Bathrooms"
              placeholder="Select bathrooms"
              defaultSelectedKeys={["1"]}
            >
              {/* Replace with your bathroom data */}
              <SelectItem key="1" value="1">1 Bathroom</SelectItem>
              <SelectItem key="2" value="2">2 Bathrooms</SelectItem>
            </Select>
            </div>

            {/* Property Info */}
            <div className="grid grid-rows-2 grid-cols-2">
              {/* Top Left Cell: Location Icon and Address */}
              <div className='flex items-center gap-2 mb-2'> {/* Container for icon and text */}
                <div className='flex-shrink-0 w-5'> {/* Container for the icon only */}
                  <LocationIcon />
                </div>
                <span className='text-lg whitespace-nowrap'>2631 Magnolia Avenue, Los Angeles, CA 90007</span> {/* Prevent wrapping */}
              </div>  

              {/* Top Right Cell: Lety Menendez and Avatar */}
              <div className="flex justify-end items-center mb-2">
                <span>Lety Menendez</span>
                <Avatar className="ml-2" name='LM' />
              </div>

              {/* Bottom Left Cell: Calendar Icon and Schedule a Tour Button */}
              <div className="flex items-center">
                <div className='flex-shrink-0 w-5 mr-2'> {/* Container for the icon only */}
                  <CalendarIcon />
                </div>
                <Button className='whitespace-nowrap' color="default">Schedule a Tour</Button>
              </div>

              {/* Bottom Right Cell: Message Button */}
              <div className="flex justify-end items-center">
                <div className='flex-shrink-0 w-5 mr-2'> {/* Container for the icon only */}
                  <MessageIcon />
                </div>
                <Button className='whitespace-nowrap' color="default">Message</Button>
              </div>
            </div>

            <div>
            <Accordion defaultExpandedKeys={["1", "2", "3"]}>
              <AccordionItem title="Property Info" key={1}>
                <p className="text-left">
                  This charming property offers a spacious living room with natural light, a modern kitchen equipped with the latest appliances, and a comfortable dining area perfect for entertaining guests. Each bedroom features ample closet space and a serene environment for relaxation. 
                </p>
              </AccordionItem>
              <AccordionItem title="Amenities" key={2}>
                <p className="text-left">
                  Residents can enjoy a variety of amenities including a fully-equipped fitness center, a sparkling outdoor pool, a community clubhouse, and a business center. The property also boasts a secure parking garage and pet-friendly accommodations.
                </p>
              </AccordionItem>
              <AccordionItem title="Fees" key={3}>
                <p className="text-left">
                  The monthly rent includes water, gas, and trash services. A refundable security deposit equal to one month's rent is required. Additional fees include a $50 application fee per adult and a $250 pet deposit. Amenities such as parking and storage units are available for an additional monthly fee.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
          </div>

          {/* Right Column */}
          <div className="col-span-1">
            {/* Form Section */}
            <Card className="mb-6">
              <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                {/* Price per bedroom */}
                <div className="mb-2 font-bold text-xl">
                  $1700/month per bedroom
                </div>
                
                {/* Date range */}
                <div className="mb-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    June 1, 2023 - May 31, 2023
                  </label>
                </div>

                {/* Invite Roommates Checkbox */}
                <Checkbox className="mb-2" {...register('inviteRoommates')}>
                  Invite Roommates to Application
                </Checkbox>
                
                {/* Roommate emails */}
                <Input
                  isClearable
                  type="email"
                  onClear={() => console.log("input cleared")}
                  bordered
                  label="Roommate email"
                  placeholder="Enter roommate's email"
                  className="mt-4"
                  {...register('roommate1', { required: 'Email is required' })}
                />
                {errors.roommate1 && <span>{errors.roommate1.message}</span>}
                
                <Input
                  isClearable
                  type="email"
                  onClear={() => console.log("input cleared")}
                  bordered
                  label="Roommate email"
                  placeholder="Enter roommate's email"
                  className="mt-4"
                  {...register('roommate2', { required: 'Email is required' })}
                />
                {errors.roommate2 && <span>{errors.roommate2.message}</span>}

                {/* Submit button */}
                <Button type="submit" color="default" variant="ghost" bordered className="mt-4">
                  Add to my OneApp
                </Button>
              </form>
            </Card>

            {/* Map Section */}
            <Card>
              <div id='mapContainer' className='w-full h-64'>
                {/* Your Map Component */}
                <Card>
                <div
                  id='mapContainer'
                  className='inline-block w-full text-center rounded-xl justify-center'>
                  <Map longitude={-118.2866715} latitude={34.0317912} zoom={15} />
                </div>
              </Card>
              </div>
            </Card>
          </div>
        </div>
      </div>
      </div>
  );
}