import React, { forwardRef } from "react";
import CardView from "../components/CardView";
import './project.css';
import clerk_auth from "../post thumbnail/clrek_auth_post_web.jpg";
import dream_travel from "../post thumbnail/dream travel.jpg";
import lanka_news from "../post thumbnail/lanka news.png";
import google_book from "../post thumbnail/goole book seach app.jpg";
import weather_app from "../post thumbnail/weather_app.png";
import vscode_theme from "../post thumbnail/vscode theme.png";
import giftOfhope from '../post thumbnail/GiftofHope.png';
import rocket_rush from '../post thumbnail/Rocket_rush.png';



function Project() {
  return (
    <>

<div className="threre_card_row"  >
        <CardView
          link="https://github.com/dananjaya6005/Clrek-auth-with-expo.git"
          projectName="Rocket Rush | Betting App"
          Tool="React Native Expo"
          Discription="RocketRush is a unique mobile game where users bet on the flight duration of a rocket that can crash anytime within the first 10 seconds. The longer the flight, the higher the winnings. Developed using React Native and Expo CLI, RocketRush offers a simple yet suspenseful gaming experience. We envision it evolving into a platform with various themes and game modes for a unique gaming experience. 😊"
          Image={rocket_rush}
        />

        <CardView
          projectName="Lanka News App"
          link="https://github.com/dananjaya6005/Lanka-News-app.git"
          Tool="React + Supabase + Stripe + Clrek"
          Discription="TWelcome to our platform, a lifeline for economically challenged students and children in Sri Lanka. We provide a unique opportunity for you to make a difference. Create donation events and contribute using Visa, Mastercard, or other online payment methods. We ensure transparency with an admin feature tracking payment history and managing users. Sign up today with a verified email address and join us in transforming lives. Stay tuned for exciting new features! "
          Image={giftOfhope}
        />

      <CardView
          projectName="Lanka News App"
          link="https://github.com/dananjaya6005/Lanka-News-app.git"
          Tool="React Native + Web Scraping"
          Discription="This app was developed using React Native and web scraping to display Sinhala news from sources such as Ada Derana, Lankadeepa, BBC, and Mawbima. The app also utilizes RapidAPI to access various APIs and enhance its functionality. With its user-friendly interface and comprehensive coverage of current events, this app is a must-have for anyone looking to stay informed about the latest news in Sri Lanka."
          Image={lanka_news}
        />
      </div>






























      <div className="threre_card_row"  >
        <CardView
          link="https://github.com/dananjaya6005/Clrek-auth-with-expo.git"
          projectName="React Native auth + Clerk"
          Tool="Expo + clerk auth"
          Discription="I have created an app using React Native, Expo, and Clerk to test authentication. The app takes the user’s email, password, first name, and last name. After entering this information, an OTP code is sent to the user’s email. Once the user enters the correct code, they can log in. The best part is that once the user logs in, they don’t need to log in over and over again. "
          Image={clerk_auth}
        />

      <CardView
          projectName="Dream Travel"
          Tool="Android stuido"
          link="https://github.com/dananjaya6005/dream_travel_android_app.git"
          Discription="This project involves the development of a mobile application using Android Studio that aims to enhance the travel experience for users. The app provides a range of features designed to address common challenges and problems faced by travellers. Travelers often struggle to find reliable and up-to-date information about travel-related news, local services, and attractions when visiting a new city or country."
          Image={dream_travel}
        />
        <CardView
          projectName="Weather app"
          Tool="React native + API"
          link="https://github.com/dananjaya6005/weather-app.git"
          Discription="This app is build with to display real-time weather information with current location based.the app automatically adjusts its design based on day and night, providing a visually pleasing experience. In addition to displaying the current weather, the app also includes a 10-day forecast feature, allowing users to plan ahead.  "
          Image={weather_app}
        />
      </div>

      <div className="threre_card_row">
       

        <CardView
          projectName="Google Book search app"
          link="https://drive.google.com/file/d/1ypebj36ao13JSdCQepFeQ5UEDNyGlIFa/view?usp=drivesdk"
          Tool="React native + Graphql"
          Discription="This app allows users to search for books using the Google Books API, a public API that is free for anyone to use. The app utilizes StepZen GraphQL to seamlessly integrate the Google Books API and provide users with a fast and efficient book search experience. With its user-friendly interface and powerful search capabilities, this app is a must-have for book lovers everywhere.  "
          Image={google_book}
        />

        <CardView
          projectName="Black Rose vs code Theme"
          link="https://github.com/dananjaya6005/Black-Rose-vs-code-theme.git"
          Tool="Visial studio Theme"
          Discription="This project is a VS Code theme that features a dark pink color scheme. The theme is available for free on the VS Code Marketplace, where users can easily download and install it. With its eye-catching design and user-friendly interface, this theme is a great choice for anyone looking to add a touch of style to their coding environment."
          Image={vscode_theme}
        />
      </div>
    </>
  );
}

export default forwardRef(Project);
