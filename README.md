# B O O K - i T

**B O O K - i T** is a hotel booking platform built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to search for hotels, view details, and make bookings. Payments are securely processed through **Stripe**, and images are stored in the cloud using **Cloudinary**.

The app is hosted on **Render.com** for quick deployment and scalability.

### Live Demo

You can try the live version of the app here:

[Live Demo](https://booking-app-o84e.onrender.com/)

### Login Credentials for Demo

Use the following credentials to log in as a demo user:

- **Email**: `recruit@demo.com`
- **Password**: `DemoPass123`

### Stripe Payment Test Card

For testing Stripe payments, use the following test card details:

- **Card Number**: 4242 4242 4242 4242
- **Expiration Date**: 04/30
- **CVC**: 424
- **ZIP**: 42424

> **Note**: Since the app is hosted on a free-tier subscription, it may take a while to load initially on the deployed server.

## Features

- **Hotel Search**: Search for hotels by location, check-in, and check-out dates.
- **Hotel Details**: View detailed information about each hotel including price per night, amenities, and availability.
- **Booking**: Make hotel bookings by providing guest details and selecting dates.
- **Stripe Payment Integration**: Securely make payments using Stripe.
- **Cloudinary Image Storage**: Hotels' images are hosted on Cloudinary.
- **Responsive Design**: Fully responsive interface for an optimal experience on mobile, tablet, and desktop.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB (for storing bookings, users, hotel details)
- **Payment Gateway**: Stripe
- **Image Storage**: Cloudinary
- **Hosting**: Render.com (for the app and backend)
- **State Management**: React Context API or useState

