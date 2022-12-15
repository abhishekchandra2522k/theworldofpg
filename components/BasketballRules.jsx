import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const BasketBallRules = () => (
  <div className='mb-8 py-2 px-3 relative'>
    <Head>
      <title>Basketball Rules and History | The World of PG</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    {/* <div className='absolute left-0 right-0 -top-14'></div> */}
    <div className='flex flex-col items-center text-white p-2'>
      <h3 className='text-white mt-4 mb-4 text-xl font-bold p-3 rounded-lg'>
        <span className='text-4xl text-white uppercase decoration-solid font-black'>
          Basketball <span className='text-red-400'>Rules</span> and{' '}
          <span className='text-lime-400'>Key Points</span>:
        </span>
      </h3>

      <div className='bg-black bg-opacity-50 rounded-lg py-6 px-10'>
        <ol className='text-white leading-loose list-disc'>
          <li>
            There are two teams with 12 selected players. Five players from each
            team may be on the court at one time.
          </li>
          <li>
            A player can be substituted from the remaining 7 players in the
            'Playing 5'. Substitutions are unlimited but can only be done when
            play is stopped.
          </li>
          <li>
            A field basket is worth 2 points, unless made from behind the 3
            point line.
          </li>
          <li>
            Games are played in four quarters of 10 (FIBA) or 12 minutes (NBA).
          </li>
          <li>Teams exchange baskets for the second half.</li>
          <li>
            If there is a foul, timed play stops and the player fouled or
            designated to shoot a technical foul is given one or two one-point
            free throws.
          </li>
          <li>The team with the most points at the end of the game wins.</li>
          <li>
            If regulation play expires with the score tied, an additional period
            of play (overtime) is mandated.
          </li>
          <li>
            Players advance the ball by bouncing it while walking or running
            (dribbling) or by passing it to a teammate.{' '}
          </li>
          <li>
            On offense, players may use a variety of shots – the 'layup', the
            'jump shot' or a 'dunk'.
          </li>
          <li>
            On defense, they may steal the ball from a dribbler, intercept
            passes, or block shots.
          </li>
          <li>
            Either offense or defense may collect a rebound, that is a missed
            shot that bounces from rim or backboard.
          </li>
          <li>
            It is a violation to lift or drag one's pivot foot without dribbling
            the ball, to carry it or to hold the ball with both hands.
          </li>
          <li>
            A successful shot is worth two points, or three points if it is
            taken from beyond the three-point arc i.e. 6.75 metres (22 ft 2 in)
            from the basket in international games and 23 feet 9 inches (7.24 m)
            in NBA games. A one-point shot can be earned when shooting from the
            foul line after a foul is made.
          </li>
          <li>
            A block is performed when, after a shot is attempted, a defender
            succeeds in altering the shot by touching the ball. In almost all
            variants of play, it is illegal to touch the ball after it is in the
            downward path of its arc; this is known as goaltending.
          </li>
          <li>
            A regulation basketball court in international games is 28 meters
            (92 feet) long and 15 meters (49 feet) wide. In the NBA and NCAA,
            the court is 94 by 50 feet (29 by 15 meters).
          </li>
          <li>
            The size of the Basketball is approx. 9.4 inches (24 cm) in
            diameter.
          </li>
          <li>The size of the Basket is 18 inches (46 cm) in diameter.</li>
          <li>
            The basket is mounted 10 ft high (3.048 m) from the ground to a
            backboard.
          </li>
          <li>
            The game was invented in 1891 by James Naismith, Canadian professor
            of physical education and instructor at the YMCA (Young Men’s
            Christian Association) training school in Springfield,
            Massachusetts, United States.
          </li>
          <li>
            The National Basketball Association (NBA) is one of the most popular
            professional basketball leagues in the world.
          </li>
        </ol>
      </div>

      <h3 className='text-white mt-4 mb-4 text-xl font-bold'>
        <span className='text-3xl text-white uppercase underline decoration-solid font-black'>
          Basketball Court
        </span>
      </h3>

      <img
        src='https://res.cloudinary.com/abhishek25/image/upload/v1671010137/court-dimensions_xmtpmi.jpg'
        alt="Basketball Court's Dimensions"
        className='sm:h-196 sm:w-126 h-120 w-120'
      />
    </div>

    <div className='flex flex-col items-center'></div>
  </div>
)

export default BasketBallRules
