# The Wild Oasis Website

## Description

The Wild Oasis Website is a modern and responsive web application for a luxury hotel specializing in luxury cabins. It allows users to explore available cabins, make reservations, and manage their bookings and profiles. Built using Next.js, styled with Tailwind CSS, and utilizing Supabase for backend services, this project provides a seamless experience for users looking to book a luxurious stay. The website is optimized for desktops and tablets, providing a user-friendly interface across these devices.

## Live Demo

Check out the live demo: [The Wild Oasis Website](https://the-wild-oasis-website-by-antonis.vercel.app/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Supabase Setup](#supabase-setup)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Cabin Booking System**: Users can choose the dates they want to book luxury cabins.
- **Google Sign-In**: Users can easily sign in using their Google profiles for a quick and secure login experience.
- **About Page**: Provides information about the luxury hotel and its offerings.
- **Guest Area**: A dedicated section where users can view and manage their reservations.
- **Profile Management**: Users can update and manage their profiles within the guest area.
- **Cabin Gallery**: A page showcasing all available cabins with images and descriptions.
- **Cabin Filter**: Users can filter cabins based on the number of guests to find the perfect fit for their stay.
- **Responsive Design**: Optimized for desktop and tablet devices, providing a consistent and enjoyable user experience.

## Installation

To get a local copy up and running, follow these simple steps:

1. Clone the repository
   ```bash
   git clone https://github.com/Atsidas/the-wild-oasis-website.git
2. Navigate to the project directory:
   ```bash 
   cd the-wild-oasis-website
3. Install dependencies
   ```bash 
   npm install
   #or
   yarn install
4. Run the development server
   ```bash
   npm run dev
   #or
   yarn dev
   #or
   pnpm dev
   #or
   pnpm dev
   #or
   bun dev

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.js. The page auto-updates as you edit the file.

Supabase Setup

To use Supabase as the backend for this project, you need to set up the database and authentication. Here are the steps to configure Supabase:
1. Create a Supabase Account

    Sign up at Supabase and create a new project.

2. Database Tables

Set up the following tables in your Supabase project:

    Bookings Table: Stores booking information.
        id: bigint (Primary Key)
        created_at: timestamp with time zone
        startDate: timestamp without time zone
        endDate: timestamp without time zone
        numNights: smallint
        numGuests: smallint
        cabinPrice: real
        extrasPrice: real
        totalPrice: real
        status: text
        hasBreakfast: boolean
        isPaid: boolean
        observations: text
        cabinId: bigint (Foreign Key to Cabins)
        guestId: bigint (Foreign Key to Guests)

    Cabins Table: Stores information about the available cabins.
        id: bigint (Primary Key)
        created_at: timestamp with time zone
        name: text
        maxCapacity: smallint
        regularPrice: smallint
        discount: smallint
        description: text
        image: text (URL or path to the image)

    Guests Table: Stores information about guests.
        id: bigint (Primary Key)
        created_at: timestamp with time zone
        fullName: text
        email: text
        nationalID: text
        nationality: text
        countryFlag: text (URL or path to the flag image)

    Settings Table: Stores application settings related to bookings.
        id: bigint (Primary Key)
        created_at: timestamp with time zone
        minBookingLength: smallint
        maxBookingLength: smallint
        maxGuestsPerBooking: smallint
        breakfastPrice: real

3. Storage Buckets

Create the following storage buckets in Supabase:

    avatars: For storing user profile pictures.
    cabin-images: For storing images of the cabins.

4. Authentication

Supabase automatically creates a Users table when authentication is set up. This table includes:

    Display Name
    Email
    Phone
    Provider
    Created
    Last Sign In
    User UID

Enable the desired authentication providers (e.g., Google) in the Supabase dashboard under the "Auth" section.

5. Configure Environment Variables

    Create a .env.local file in the root of your project with the following variables:

    ```bash 
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your-google-client-secret

Replace your-supabase-url, your-supabase-anon-key, your-google-client-id, and your-google-client-secret with your actual Supabase and Google credentials.

Usage

    Explore Cabins: Use the Cabin Gallery to browse available luxury cabins. Apply filters to find cabins that meet your needs based on the number of guests.
    Booking: Select your desired dates and make a reservation directly through the website.
    Account Management: Sign in using your Google account, and manage your bookings and personal profile through the Guest Area.
    About: Visit the About Page to learn more about The Wild Oasis and its luxury offerings.

Technologies Used

    Next.js: A React framework for server-side rendering and static site generation.
    Tailwind CSS: A utility-first CSS framework for rapid UI development.
    Supabase: An open-source Firebase alternative providing backend services like database and authentication.
    Google Authentication: Secure and fast authentication using Google profiles.
