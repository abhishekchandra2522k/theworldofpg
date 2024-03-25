import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition, Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const [categories, setCategories] = useState([])
  // console.log(categories)
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <Disclosure as='nav' className='bg-rose-50 mb-5 w-full fixed z-10'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>

              <div className='flex flex-1 sm:static sm:inset-auto items-center justify-center sm:items-stretch sm:justify-between'>
                <div className='flex flex-shrink-0 items-center font-black vibes'>
                  <Link href='/'>Home</Link>
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4 vibes'>
                    <Link
                      href='/about'
                      className='hover:bg-gray-700 hover:text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium'
                    >
                      About
                    </Link>

                    <Menu
                      as='div'
                      className='relative inline-block text-left ml-4'
                    >
                      <div>
                        <Menu.Button className='inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-700 hover:text-white focus:outline-none'>
                          Scripts
                          <ChevronDownIcon
                            className='-mr-1 ml-2 h-5 w-5'
                            aria-hidden='true'
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <div className='py-1'>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href='/category/monologues'
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  Monologues
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  href='/category/duologues'
                                  className={classNames(
                                    active
                                      ? 'bg-gray-100 text-gray-900'
                                      : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  Duologues
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>

                    <Link
                      href='/contact'
                      className='hover:bg-gray-700 hover:text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium'
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>

              {/* Profile dropdown */}
              {/* <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                      <span className='sr-only'>Open user menu</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div> */}
            </div>
          </div>

          {/* Small Screen Menu */}
          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              <Disclosure.Button
                as='a'
                className={classNames(
                  true ? 'text-black' : 'hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base w-full'
                )}
                aria-current={true ? 'page' : undefined}
              >
                <Link href='/'>Home</Link>
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                className={classNames(
                  true ? 'text-black' : 'hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base w-full'
                )}
                aria-current={true ? 'page' : undefined}
              >
                <Link href='/about'>About</Link>
              </Disclosure.Button>

              <Menu
                as='div'
                className='relative inline-block text-left text-base w-full'
              >
                <div>
                  <Menu.Button className='inline-flex w-full rounded-md px-3 py-2 font-medium shadow-sm hover:text-white focus:outline-none'>
                    Scripts
                    <ChevronDownIcon
                      className='-mr-1 ml-2 h-5 w-5'
                      aria-hidden='true'
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <div className='py-1'>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href='/category/Monologues'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-3 py-2 text-sm'
                            )}
                          >
                            Monologues
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href='/category/duologues'
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-3 py-2 text-sm'
                            )}
                          >
                            Duologues
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <Disclosure.Button
                as='a'
                className={classNames(
                  true ? 'text-black' : 'hover:bg-gray-700 hover:text-white',
                  'block px-3 py-2 rounded-md text-base w-full'
                )}
                aria-current={true ? 'page' : undefined}
              >
                <Link href='/contact'>Contact</Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header
