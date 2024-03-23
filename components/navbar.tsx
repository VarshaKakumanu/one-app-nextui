"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";

import { Logo } from "@/components/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import React from "react";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label='Search'
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement='outside'
      placeholder='Search...'
      startContent={
        <SearchIcon className='text-base text-default-400 pointer-events-none flex-shrink-0' />
      }
      type='search'
    />
  );
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <NextUINavbar maxWidth='xl' position='sticky'>
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink className='flex justify-start items-center gap-1' href='/'>
            <Logo />
            <p className='font-bold text-inherit'>OneApp Housing</p>
          </NextLink>
        </NavbarBrand>
        <ul className='hidden lg:flex gap-4 justify-start ml-2'>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color='foreground'
                href={item.href}>
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className='hidden sm:flex basis-1/5 sm:basis-full'
        justify='end'>
        <NavbarItem className='hidden lg:flex'>{searchInput}</NavbarItem>
        <NavbarItem className='hidden sm:flex gap-2'>
          <ThemeSwitch />
        </NavbarItem>{" "}
        <NavbarItem>
          <Popover showArrow placement='bottom'>
            <PopoverTrigger>
              <Avatar
                isBordered
                as='button'
                name='Adhi'
                className='transition-transform'
              />
            </PopoverTrigger>
            <PopoverContent className='p-1'>
              <Card
                shadow='none'
                className='max-w-[300px] border-none bg-transparent'>
                <CardHeader className='justify-between'>
                  <div className='flex gap-3'>
                    <Avatar
                      isBordered
                      radius='full'
                      size='md'
                      src='https://i.pravatar.cc/150?u=a04258114e29026702d'
                    />
                    <div className='flex flex-col items-start justify-center'>
                      <h4 className='text-small font-semibold leading-none text-default-600'>
                        Zoey Lang
                      </h4>
                      <h5 className='text-small tracking-tight text-default-500'>
                        @zoeylang
                      </h5>
                    </div>
                  </div>
                  <Button
                    className={
                      isFollowed
                        ? "bg-transparent text-foreground border-default-200"
                        : ""
                    }
                    color='primary'
                    radius='full'
                    size='sm'
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}>
                    {isFollowed ? "Unfollow" : "Follow"}
                  </Button>
                </CardHeader>
                <CardBody className='px-3 py-0'>
                  <p className='text-small pl-px text-default-500'>
                    Full-stack developer, @getnextui lover she/her
                    <span aria-label='confetti' role='img'>
                      🎉
                    </span>
                  </p>
                </CardBody>
                <CardFooter className='gap-3'>
                  <div className='flex gap-1'>
                    <p className='font-semibold text-default-600 text-small'>
                      4
                    </p>
                    <p className=' text-default-500 text-small'>Following</p>
                  </div>
                  <div className='flex gap-1'>
                    <p className='font-semibold text-default-600 text-small'>
                      97.1K
                    </p>
                    <p className='text-default-500 text-small'>Followers</p>
                  </div>
                </CardFooter>
              </Card>
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href='#'
                size='lg'>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
