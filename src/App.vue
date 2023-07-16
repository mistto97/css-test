<template>
  <div id="app" class>
    <nav class="nav-bar nav-bg z-40">
      <ul
        class="pt-[15vh] hidden lg:w-auto lg:flex lg:relative lg:pb-3 lg:flex-row lg:gap-6 gap-1 pb-[5vh] lg:text-[2.8vh] text-[3vh] font-scondary font-medium"
      >
        <li
          v-for="(nav, index) in navLinks"
          :key="index"
          class="xl:px-6 hover:text-[#f65b3c] cursor-pointer lg:px-2 lg:py-[3vhh] mx-2 px-4 transition py-4"
        >
          <a :href="nav.link" class="w-full">{{nav.title}}</a>
        </li>
      </ul>

      <ul
        id="small-nav"
        class="flex lg:hidden flex-col hide-nav transition-all ease-out duration-300 absolute overflow-hidden h-[100vh] pt-[15vh] top-0 z-30 text-black right-0 bg-gray-800 text-gray-50 pb-[5vh] gap-1 text-[2.5vh] font-scondary font-medium"
      >
        <li v-for="(nav, index) in navLinks" :key="index" class="mx-2 px-4 py-4">
          <a :href="nav.link" class="w-full">{{ nav.title }}</a>
        </li>
      </ul>

      <div class="py-1 z-40">
        <img class="w-[15vh] aspect-square" :src="logo" />
      </div>
      <button @click="toggleNav" class="lg:hidden text-white text-black z-40">
        <img class="md:w-[7vw] w-[10vw] aspect-square" :src="menu" alt />
      </button>
    </nav>
    <div
      class="bg-cover h-screen w-screen lg:bg-[url('./assets/covers/cover.jpg')] bg-[url('./assets/covers/small-cover.jpg')] bg-top bg-no-repeat pt-[15vh]"
    >
      <div
        class="lg:w-1/2 w-full lg:pl-28 px-5 mt-[10vh] text-white"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h1
          class="xl:text-[10vh] lg:text-[8vh] md:text-[6vh] text-[5vh] leading-[1.1] font-secondary font-extrabold"
        >{{ heroPage.title }}</h1>
        <p
          class="lg:text-[3vh] lg:my-[5vh] md:text-[3vh] text-[3vh] md:my-[4vh] my-[5vh] leading-[1.3] font-nunito"
        >{{ heroPage.text }}</p>
        <button
          class="bg-[#f64b3c] hover:bg-[#CE372A] hover:drop-shadow-xl transition text-white lg:text-[3vh] md:text-[2vh] text-[2vh] font-extrabold py-[1.9vh] md:px-[11vh] px-[6vh] rounded-full"
        >ORDER NOW</button>
      </div>
    </div>

    <div class="page-1 overflow-hidden">
      <div class="absolute w-full h-full z-0" data-aos="fade" data-aos-duration="2000">
        <img
          class="absolute xl:w-[25vh] lg:w-[20vh] md:[13vh] w-[8vh] aspect-square md:right-10 right-2"
          :src="burgerSvg"
          alt
        />
        <img
          class="absolute xl:w-[13vh] lg:w-[20vh] md:[13vh] w-[4vh] aspect-square md:right-4 right-2 top-[45%]"
          :src="pepperSvg"
          alt
        />
        <img
          class="absolute xl:w-[9.5vh] lg:w-[14vh] md:[13vh] w-[8vh] aspect-square md:bottom-[19%] bottom-[30vh] lg:right-[30%] right-[10vw]"
          :src="mashroomSvg"
          alt
        />
        <img
          class="scale-x-[-1] absolute xl:w-[26vh] bottom-1/2 left-[-3vw] lg:w-[18vh] md:[13vh] w-[8vh] aspect-square"
          :src="potatoSvg"
          alt
        />
        <img
          class="absolute xl:left-[13vw] xl:w-[12vh] md:top-0 top-[5vh] lg:w-[10vh] md:[8vh] w-[6vh] aspect-square"
          :src="garlicSvg"
          alt
        />
        <img
          class="absolute xl:w-[13vh] bottom-[19%] left-[30%] lg:w-[20vh] md:[13vh] w-[8vh] aspect-square"
          :src="leafSvg"
          alt
        />
      </div>

      <h2 class="page-1-title z-10" data-aos="fade" data-aos-duration="400">{{ourChefPage.title}}</h2>

      <div class="page-1-text z-10" data-aos="fade" data-aos-duration="400">
        <p>{{ ourChefPage.text }}</p>
      </div>
      <div class="chefs z-10" data-aos="fade-up" data-aos-duration="1000">
        <div v-for="(chef, index) in ourChefPage.chefs" :key="index" class="chef">
          <div class="chef-img">
            <img class="w-full" v-bind:src="chef.photo" alt />
          </div>
          <div>
            <h3
              class="font-bold lg:text-[3.8vh] md:text-[2.6vh] text-[1.9vh] uppercase my-[1vh]"
            >{{ chef.name }}</h3>
            <p class="lg:text-[3.4vh] text-[1.7vh] md:text-[2vh]">{{ chef.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="page-2">
      <div
        class="flex lg:flex-row flex-col lg:w-auto lg:justify-around justify-center lg:content-around content-center items-center lg:px-14"
      >
        <div
          class="lg:w-2/5 w-[30vh] flex justify-end"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            class="object-cover w-[95%] rounded-full aspect-square"
            :src="bestBurgerPage.image"
            alt
          />
        </div>
        <div
          class="flex flex-col lg:w-2/5 h-full mt-[8vh] gap-[3.8vh] mx-10 lg:items-start items-center lg:text-left text-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h2
            class="xl:text-[10.3vh] lg:text-[7vh] md:text-[6vh] text-[4vh] font-bold"
          >{{ bestBurgerPage.title }}</h2>
          <p class="xl:text-[3.6vh] text-[2vh] mb-[3.8vh] font-nunito">{{ bestBurgerPage.text }}</p>
          <button
            class="bg-white text-[#f64b3c] hover:bg-gray-200 transition hover:drop-shadow-xl lg:text-[3vh] md:text-[2vh] text-[2vh] font-extrabold py-[1.9vh] md:px-[11vh] px-[6vh] rounded-full"
          >ORDER NOW</button>
        </div>
      </div>
    </div>

    <div class="page-3 overflow-hidden">
      <div class="absolute w-full h-full z-0" data-aos="fade" data-aos-duration="2000">
        <img
          class="absolute xl:w-[19.5vh] scale-x-[-1] lg:w-[18vh] md:[13vh] lg:top-[11vh] md:top-1/3 w-[8vh] aspect-square lg:right-1/2 md:right-[12vw] lg:translate-x-1/2 top-1/2 right-2"
          :src="burgerSvg"
          alt
        />
        <img
          class="absolute xl:w-[13vh] scale-x-[-1] lg:w-[20vh] md:[13vh] w-[4vh] aspect-square left-[-1vw] right-2 md:top-[19vh] top-1/2"
          :src="pepperSvg"
          alt
        />
        <img
          class="absolute xl:w-[9.5vh] scale-x-[-1] lg:w-[14vh] md:w-[6vh] w-[4vh] aspect-square lg:bottom-[9vh] md:bottom-[7vh] bottom-[6vh] lg:right-1/2 right-1/2"
          :src="mashroomSvg"
          alt
        />
        <img
          class="absolute xl:w-[20vh] bottom-[4vh] right-[1vw] lg:w-[18vh] md:[13vh] w-[8vh] aspect-square"
          :src="potatoSvg"
          alt
        />
        <img
          class="absolute xl:left-[11vw] scale-x-[-1] xl:w-[10vh] md:bottom-[5ch] bottom-[5vh] lg:w-[10vh] md:[8vh] w-[6vh] aspect-square"
          :src="garlicSvg"
          alt
        />
        <img
          class="absolute xl:w-[13vh] top-[14vh] rotate-[-77deg] scale-x-[-1] right-[4.4vw] lg:w-[20vh] md:[13vh] w-[8vh] aspect-square"
          :src="leafSvg"
          alt
        />
      </div>
      <div
        class="flex lg:flex-row-reverse flex-col lg:w-auto lg:justify-around justify-center lg:content-around content-center items-center lg:px-14"
      >
        <div
          class="lg:w-2/5 w-[30vh] flex justify-end"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            class="object-cover w-[95%] rounded-full aspect-square"
            :src="bigBurgerPage.image"
            alt
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          class="flex flex-col lg:w-2/5 h-full mt-[8vh] gap-[3.8vh] mx-10 lg:items-start items-center lg:text-left text-center"
        >
          <h2
            class="xl:text-[10.3vh] lg:text-[7vh] md:text-[6vh] text-[4vh] font-bold"
          >{{ bigBurgerPage.title }}</h2>
          <p class="xl:text-[3.6vh] text-[2vh] mb-[3.8vh] font-nunito">{{ bigBurgerPage.text }}</p>
          <button
            class="bg-[#f64b3c] hover:bg-[#CE372A] transition text-white lg:text-[3vh] md:text-[2vh] text-[2vh] font-extrabold py-[1.9vh] md:px-[11vh] px-[6vh] rounded-full"
          >ORDER NOW</button>
        </div>
      </div>
    </div>

    <div class="page-4">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        ref="counterSection"
        class="flex flex-col justify-center content-center items-center gap-[2vh] mb-[3vh] lg:mx-[5vw] mx-[0.5vw]"
      >
        <h2 class="md:text-[8vh] text-[5vh] font-bold">{{ statisticsPage.title }}</h2>
        <p class="md:text-[3vh] w-8/12 md:mb-[5vh] mb-[2vh] font-nunito">{{ statisticsPage.text }}</p>
        <div class="flex md:flex-row flex-col md:gap-[7vw] gap-[2vh] flex-wrap">
          <div v-for="(counter, index) in counters" :key="index" class="statistic">
            <p class="statistic-number">{{counter.value}}k</p>
            <p class="statistic-name">{{ counter.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="page-5">
      <div class="absolute w-full h-full z-0" data-aos="fade" data-aos-duration="1000">
        <img
          class="absolute xl:w-[15vh] lg:w-[10vh] md:w-[7vh] lg:top-[-5vh] top-0 w-[5vh] aspect-square lg:right-[19vw] right-[2vw] rotate-12 lg:translate-x-1/2 right-2"
          :src="burgerSvg"
          alt
        />
        <img
          class="absolute xl:w-[13vh] scale-x-[-1] lg:w-[20vh] md:w-[8vh] w-[4vh] aspect-square left-[1vw] lg:top-[6vh] top-1/2"
          :src="pepperSvg"
          alt
        />
        <img
          class="absolute xl:w-[9.5vh] scale-x-[-1] lg:w-[14vh] md:w-[6vh] w-[4vh] aspect-square bottom-[19vh] left-0"
          :src="mashroomSvg"
          alt
        />
        <img
          class="absolute xl:w-[20vh] bottom-[14vh] right-[0vw] lg:w-[18vh] md:w-[13vh] w-[9vh] aspect-square"
          :src="potatoSvg"
          alt
        />
        <img
          class="absolute right-[-0.5vw] scale-y-[-1] xl:w-[10vh] lg:top-[12vh] top-1/3 rotate-[107deg] lg:w-[10vh] md:[8vh] w-[6vh] aspect-square"
          :src="garlicSvg"
          alt
        />
        <img
          class="absolute xl:w-[13vh] top-0 rotate-[-77deg] scale-x-[-1] lg:left-[14vw] md:left-[4vw] left-0 lg:w-[20vh] md:w-[10vh] w-[5vh] aspect-square"
          :src="leafSvg"
          alt
        />
      </div>
      <div
        class="flex flex-col lg:gap-[4vh] z-30 md:gap-[7vh] gap-[3.9vh] items-center justify-between h-full w-full md:px-10 px-[2vw]"
      >
        <h2
          class="lg:text-[10.5vh] leading-tight md:text-[5vh] text-[4vh] font-bold"
          data-aos="fade"
          data-aos-duration="1000"
        >{{ popularPackagePage.title }}</h2>
        <div
          class="flex w-full md:flex-row md:justify-around justify-between items-center md:flex-wrap flex-col px-[2vw]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            v-for="(pack, index) in popularPackagePage.packages"
            :key="index"
            class="package hover:scale-105 transition duration-300 hover:drop-shadow-xl"
          >
            <h3 class="package-title">{{ pack.name}}</h3>
            <img class="package-img" :src="pack.image" alt />
            <p class="package-price">{{ pack.price }}</p>
            <p class="package-des">{{ pack.text }}</p>
            <button
              class="package-button hover:bg-[#CE372A] transition hover:drop-shadow-xl"
            >order now</button>
          </div>
        </div>
      </div>
    </div>
    <div class="page-6 bg-imagge">
      <p
        class="lg:text-[4vh] font-medium leading-tight lg:w-[50vw] text-[2.4vh] px-[3vh]"
        data-aos="fade"
        data-aos-duration="1000"
      >{{ barryPage.text }}</p>
      <h2
        class="font-primary lg:text-[6vh] text-[3vh]"
        data-aos="fade"
        data-aos-duration="1000"
      >{{ barryPage.title }}</h2>
    </div>

    <div class="page-7">
      <div class="absolute w-full h-full z-0" data-aos="fade" data-aos-duration="2000">
        <img
          class="absolute xl:w-[23vh] lg:w-[14vh] md:w-[7vh] top-[12vh] w-[5vh] aspect-square lg:right-[10vw] right-[2vw] rotate-12 lg:translate-x-1/2 right-2"
          :src="burgerSvg"
          alt
        />
        <img
          class="absolute xl:w-[13vh] scale-x-[-1] lg:w-[20vh] md:w-[8vh] w-[4vh] aspect-square right-[10vw] bottom-[6vh]"
          :src="pepperSvg"
          alt
        />
        <img
          class="absolute xl:w-[9.5vh] scale-x-[-1] lg:w-[14vh] md:w-[6vh] w-[4vh] aspect-square lg:top-[40vh] top-[20vh] left-[5vw]"
          :src="mashroomSvg"
          alt
        />
        <img
          class="absolute xl:w-[23vh] bottom-[12vh] left-[7vw] lg:w-[20vh] md:w-[13vh] w-[9vh] aspect-square"
          :src="potatoSvg"
          alt
        />
        <img
          class="absolute lg:right-[7vw] right-1/2 scale-y-[-1] xl:w-[10vh] lg:top-1/2 bottom-[5vh] rotate-[107deg] lg:w-[10vh] md:[8vh] w-[6vh] aspect-square"
          :src="garlicSvg"
          alt
        />
        <img
          class="absolute xl:w-[13vh] top-[9vh] rotate-[-77deg] scale-x-[-1] lg:left-[14vw] md:left-[4vw] left-0 lg:w-[20vh] md:w-[10vh] w-[5vh] aspect-square"
          :src="leafSvg"
          alt
        />
      </div>
      <div
        class="flex flex-col text-center gap-[7vh] lg:gap-[4vh]"
        data-aos="fade"
        data-aos-duration="1000"
      >
        <h2
          class="lg:text-[10vh] md:text-[5vh] text-[3vh] font-bold leading-tight"
        >{{ updatePage.title }}</h2>
        <p
          class="lg:w-[50vw] px-[2vw] md:text-[2.8vh] lg:text-[3.5vh] text-center mx-auto font-nunito mb-[5vh]"
        >{{ updatePage.text }}</p>
        <div
          class="lg:w-[52vw] lg:mx-auto mx-[5vw] text-[1.5vh] md:text-[2.3vh] lg:text-[3.1vh] rounded-full overflow-hidden font-nunito"
        >
          <input
            type="text"
            placeholder="Your Email"
            class="w-9/12 pl-[3vw] outline-0 text-black lg:py-[1.9vh] py-[0.8vh]"
          />
          <button
            class="bg-[#f64b3c] w-3/12 text-white lg:py-[1.9vh] py-[0.8vh] px-[1vw] transition hover:drop-shadow-xl hover:bg-[#CE372A]"
          >SUBSCRIBE</button>
        </div>
      </div>
    </div>

    <div class="footer">
      <div
        class="mx-[1vh] flex lg:flex-row flex-col lg:gap-0 gap-[5vh] justify-around md:text-left text-center"
      >
        <div class="lg:w-5/12 w-full flex flex-col gap-[3.2vh] pl-[5vw] pr-[6vw]">
          <h2 class="lg:text-[4vh] text-[3vh] font-semibold">{{ footerPage.titleHere.title }}</h2>
          <p
            class="lg:text-[2.6vh] text-[1.8vh] mb-[1vh] font-nunito"
          >{{ footerPage.titleHere.text }}</p>
          <div class="flex flex-row gap-4 md:mx-0 mx-auto">
            <a
              v-for="(social ,index ) in footerPage.titleHere.socials"
              :key="index"
              :href="social.link"
              class="rounded-full bg-white hover:scale-110 transition aspect-square md:p-[0.9vh] p-[0.6vh]"
            >
              <img :src="social.icon" alt />
            </a>
          </div>
        </div>
        <div
          class="flex md:flex-row md:flex-wrap flex-col md:items-start items-center md:text-left text-center justify-around lg:px-[5vw] md:gap-0 gap-[5vh] lg:grow"
        >
          <div class="flex flex-col gap-1">
            <h3
              class="lg:text-[4vh] md:text-[3vh] text-[2.7vh] font-semibold mb-[1vh] mb-1"
            >{{ footerPage.about.title }}</h3>
            <a
              v-for="(link, index) in footerPage.about.links"
              :key="index"
              class="lg:text-[3vh] md:text-[2vh] text-[2vh] hover:text-[#f64b3c] transition font-light font-nunito"
              :href="link.link"
            >{{ link.text }}</a>
          </div>

          <div class="flex flex-col gap-1">
            <h3
              class="lg:text-[4vh] md:text-[3vh] text-[2.7vh] font-semibold mb-[1vh] mb-1"
            >{{ footerPage.services.title }}</h3>
            <a
              v-for="(link, index) in footerPage.services.links"
              :key="index"
              class="lg:text-[3vh] md:text-[2vh] text-[2vh] hover:text-[#f64b3c] transition font-light font-nunito"
              :href="link.link"
            >{{ link.text }}</a>
          </div>

          <div class="flex flex-col gap-1">
            <h3
              class="lg:text-[4vh] md:text-[3vh] text-[2.7vh] font-semibold mb-[1vh] mb-1"
            >{{ footerPage.other.title }}</h3>
            <a
              v-for="(link, index) in footerPage.other.links "
              :key="index"
              class="lg:text-[3vh] md:text-[2vh] text-[2vh] hover:text-[#f64b3c] transition font-light font-nunito"
              :href="link.link"
            >{{ link.text }}</a>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import anime from "animejs";
import "aos/dist/aos.css";
import AOS from "aos";
import logo from "./assets/logos/logo.png";
import menu from "./assets/icons/menu.svg";

import chef1 from "./assets/images/chefs/chef1.png";
import chef2 from "./assets/images/chefs/chef2.png";
import chef3 from "./assets/images/chefs/chef3.png";
import bestBurger from "./assets/images/burgers/best_burger.jpg";
import burgerPackage from "./assets/images/burgers/burger_package.svg";
import instagram from "./assets/icons/socials/instagram.svg";
import facebook from "./assets/icons/socials/facebook.svg";
import twitter from "./assets/icons/socials/twitter.svg";
import whatsap from "./assets/icons/socials/whatsapp.svg";
import burger from "./assets/images/background-svgs/brbr.svg";
import pepper from "./assets/images/background-svgs/flfl.svg";
import mashroom from "./assets/images/background-svgs/shrm.svg";
import potato from "./assets/images/background-svgs/potato.svg";
import garlic from "./assets/images/background-svgs/garlic.svg";
import leaf from "./assets/images/background-svgs/leaf.svg";

export default {
  data: () => ({
    logo: logo,
    menu: menu,
    burgerSvg: burger,
    pepperSvg: pepper,
    mashroomSvg: mashroom,
    potatoSvg: potato,
    garlicSvg: garlic,
    leafSvg: leaf,
    counterValue: 0,

    navLinks: [
      {
        title: "Home",
        link: "https://www.google.com"
      },
      {
        title: "PRODUCT",
        link: "https://www.google.com"
      },
      {
        title: "PROMO",
        link: "https://www.google.com"
      },
      {
        title: "ABOUT",
        link: "https://www.google.com"
      },
      {
        title: "CONTACT",
        link: "https://www.google.com"
      }
    ],
    heroPage: {
      title: "Get Cashback up to 50 %",
      text:
        "Lorem ipsum dolor sit amet, tempor latine iuvaret vis ex, atqui delicatissimi qui eu. Sea esse libris no, has no paulo accusata volutpat. Cu mea vidisse complectitur, nec an voluptua facilisis constituam,"
    },

    ourChefPage: {
      title: "Our Chef",
      text:
        "Lorem ipsum dolor sit amet, has justo dolorum ne, no mea commodo numquam, eum natum vitae persecuti ex.",
      chefs: [
        { name: "aiden hunter", role: "Founder", photo: chef3 },
        {
          name: "ethal ramsey",
          role: "Co-Founder",
          photo: chef2
        },
        {
          name: "fannie stewart",
          role: "Co-Founder",
          photo: chef1
        }
      ]
    },

    bestBurgerPage: {
      title: "Best Burger",
      text:
        "Lorem ipsum dolor sit amet, soleat alterum erroribus quo ad. Duo quod diam lobortis ex. An has prima mucius,",
      image: bestBurger
    },

    bigBurgerPage: {
      title: "Big Burger",
      text:
        "Lorem ipsum dolor sit amet, soleat alterum erroribus quo ad. Duo quod diam lobortis ex. An has prima mucius,",
      image: bestBurger
    },

    statisticsPage: {
      title: "Statistics",
      text:
        "Lorem ipsum dolor sit amet, soleat alterum erroribus quo ad. Duo quod diam lobortis ex. An has prima mucius,"
    },
    counters: [
      { value: 0, name: "CUSTOMER" },
      { value: 0, name: "OUTLETS" },
      { value: 0, name: "COUNTRY" }
    ],

    popularPackagePage: {
      title: "Popular Package",
      packages: [
        {
          name: "package i",
          image: burgerPackage,
          price: "$10.00",
          text: "Lorem ipsum dolor sit amet, soleat alterum erroribus quo ad."
        },
        {
          name: "package ii",
          image: burgerPackage,
          price: "$20.00",
          text: "Lorem ipsum dolor sit amet, soleat alterum erroribus quo ad."
        },
        {
          name: "package iii",
          image: burgerPackage,
          price: "$30.00",
          text: "Lorem ipsum dolor sit amet, soleat alterum erroribus quo ad."
        }
      ]
    },

    barryPage: {
      title: "Barry Henderson",
      text:
        "Lorem ipsum dolor sit amet, fastidii delicata per in. Has ex aeterno officiis necessitatibus, est te accumsan vulputate. An mea augue eleifend."
    },

    updatePage: {
      title: "Don't miss Our Update",
      text:
        "Lorem ipsum dolor sit amet, fastidii delicata per in. Has ex aeterno officiis necessitatibus, est te accumsan vulputate."
    },

    footerPage: {
      titleHere: {
        title: "Title Here",
        text:
          "Lorem ipsum dolor sit amet, fastidii delicata per in. Has ex aeterno officiis necessitatibus, est te accumsan vulputate. An mea augue eleifend. Mel ut probo alterum eruditi.",
        socials: [
          {
            name: "Instagram",
            link: "https://www.google.com",
            icon: instagram
          },
          { name: "Facebook", link: "https://www.google.com", icon: facebook },
          { name: "Twitter", link: "https://www.google.com", icon: twitter },
          { name: "Whatsapp", link: "https://www.google.com", icon: whatsap }
        ]
      },
      about: {
        title: "About",
        links: [
          { text: "History", link: "https://www.google.com" },
          { text: "Our Team", link: "https://www.google.com" },
          { text: "Brand Guidelines", link: "https://www.google.com" },
          { text: "Terms & Condition", link: "https://www.google.com" },
          { text: "Privacy Policy", link: "https://www.google.com" }
        ]
      },
      services: {
        title: "Services",
        links: [
          { text: "How to Order", link: "https://www.google.com" },
          { text: "Our Product", link: "https://www.google.com" },
          { text: "Order Status", link: "https://www.google.com" },
          { text: "Promo", link: "https://www.google.com" },
          { text: "Payment Method", link: "https://www.google.com" }
        ]
      },
      other: {
        title: "Other",
        links: [
          { text: "Contact Us", link: "https://www.google.com" },
          { text: "Help", link: "https://www.google.com" },
          { text: "Privacy", link: "https://www.google.com" }
        ]
      }
    },
    showNav: false
  }),

  methods: {
    toggleNav() {
      const nav = document.querySelector("#small-nav");
      nav.classList.toggle("show-nav");
      nav.classList.toggle("hide-nav");
    },

    animateCounter() {
      anime({
        targets: this.counters[0],
        value: 7,
        duration: 2200,
        round: 1,
        easing: "easeOutCubic",
        update: () => {
          this.counters[0].value = Math.round(this.counters[0].value);
        }
      });
      anime({
        targets: this.counters[1],
        value: 109,
        duration: 2200,
        round: 1,
        easing: "easeOutCubic",
        update: () => {
          this.counters[1].value = Math.round(this.counters[1].value);
        }
      });
      anime({
        targets: this.counters[2],
        value: 35,
        duration: 2200,
        round: 1,
        easing: "easeOutCubic",
        update: () => {
          this.counters[2].value = Math.round(this.counters[2].value);
        }
      });
    }
  },

  build: {
    transpile: ["mdi-vue"]
  },

  mounted() {
    AOS.init();

    const cs = this.$refs.counterSection;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(cs);
  },
  created() {}
};
</script>


<style>
#app {
  overflow-x: hidden;
}
.bg-imagge {
  background-image: linear-gradient(
      rgba(246, 75, 60, 0.7),
      rgba(246, 75, 60, 0.5)
    ),
    url("./assets/covers/page_6_cover.jpg");
}
.nav-bg {
  background: linear-gradient(
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.65),
    rgba(0, 0, 0, 0)
  );
}
.show-nav {
  @apply w-[90vw];
}
.hide-nav {
  @apply w-0;
}
</style>
