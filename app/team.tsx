// app/team.tsx
import Navbar from '@/components/layout/navbar';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function TeamScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  
  const images = [
    { id: 1, src: '/bike.png' },
    { id: 2, src: '/wh.png' },
    { id: 3, src: '/ct.png' },
    { id: 4, src: '/box.png' },
    { id: 5, src: '/happy.png' }
  ];
  useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    setCurrentSlide((prev) => {
      const nextSlide = prev + 1;
      // Reset to 0 when we reach the end of original images for seamless loop
      return nextSlide >= images.length ? 0 : nextSlide;
    });
  }, 3000);

  return () => clearInterval(interval);
}, [isPaused, images.length]);

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: 'Our Team',
          headerShown: false,
        }} 
      />
      
      <Navbar />
      
      <ScrollView 
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View className="relative min-h-screen">
          {/* PNG Background */}
          <View className="absolute inset-0 z-0">
            <img 
              src="/bg.png"
              alt="Background pattern"
              className="w-full h-full object-cover"
            />
          </View>

          {/* Hero Content */}
          <View className="relative z-10 min-h-screen flex items-center justify-center pt-20">
            {/* Main Title */}
            <Text className="font-helvetica font-bold text-[84px] leading-[84px] text-black text-center mb-8">
              Meet Our Team
            </Text>
            
            {/* Breadcrumb Navigation */}
            <View className="flex flex-row items-center justify-center">
              <Text className="font-helvetica font-normal text-[20px] leading-[40px] text-black">
                Home
              </Text>
              <View className="w-1 h-1 bg-[#C10016] rounded-full mx-4" />
              <Text className="font-helvetica font-medium text-[20px] leading-[40px] text-[#C10016]">
                Team
              </Text>
            </View>
          </View>
        </View>

        {/* Team Section */}
        <View className="w-full bg-white py-20">
          {/* Skilled Staff Badge */}
          <View className="flex flex-row justify-center items-center mx-auto w-[240px] h-[48px] bg-[rgba(193,0,22,0.1)] rounded-[120px] mb-8">
            <Text className="font-helvetica font-medium text-[16px] leading-[40px] tracking-[0.2em] uppercase text-[#C10016]">
              Skilled Staff
            </Text>
          </View>

          {/* Main Heading */}
          <Text className="text-center font-helvetica font-bold text-[64px] leading-[74px] tracking-[-0.01em] text-black mb-16">
            Meet Our Qualified <span className='text-[#C10016]'>Experts</span>
          </Text>

          {/* Team Members Grid */}
          <View className="flex flex-col gap-8 px-8">
            
            {/* First Row */}
            <View className="flex flex-row justify-center gap-8">
              
              {/* Team Member 1 - Nas */}
              <View className="relative w-[720px] h-[380px] bg-white border border-black/10 backdrop-blur-[12.5px] rounded-[20px] overflow-hidden">
                {/* Member Image */}
                <View className="absolute w-[300px] h-[340px] left-8 top-4 rounded-[12px] overflow-hidden">
                  <img 
                    src="/nas.png" 
                    alt="Nas"
                    className="w-full h-full object-cover"
                  />
                </View>
                
                {/* Member Info */}
                <View className="absolute left-[360px] top-8 w-[340px]">
                  <Text className="font-helvetica font-bold text-[26px] leading-[80px] text-black">
                    Nas
                  </Text>
                  <Text className="font-helvetica font-normal text-[18px] leading-[38px] text-black mb-4">
                    Co-Founder & CEO
                  </Text>
                  <Text className="font-helvetica font-normal text-[18px] leading-[30px] text-black">
                    In the realm of luxury goods, where the <br/>value lies not only in the product itself but<br/>in the entire customer experience, the importance.
                  </Text>
                </View>
                
                {/* Email Icon */}
                <View className="absolute left-[360px] bottom-8 w-12 h-12 bg-[#C10016] rounded-full flex items-center justify-center cursor-pointer">
                  <img 
                    src="/mail.svg" 
                    alt="Email"
                    className="w-4 h-4 object-contain filter brightness-0 invert"
                  />
                </View>
              </View>

              {/* Team Member 2 - Anson */}
              <View className="relative w-[720px] h-[380px] bg-white border border-black/10 backdrop-blur-[12.5px] rounded-[20px] overflow-hidden">
                {/* Member Image */}
                <View className="absolute w-[300px] h-[340px] left-8 top-4 rounded-[12px] overflow-hidden">
                  <img 
                    src="/Anson.png" 
                    alt="Anson"
                    className="w-full h-full object-cover"
                  />
                </View>
                
                {/* Member Info */}
                <View className="absolute left-[360px] top-8 w-[360px]">
                  <Text className="font-helvetica font-bold text-[26px] leading-[80px] text-black">
                    Anson
                  </Text>
                  <Text className="font-helvetica font-normal text-[18px] leading-[38px] text-black mb-4">
                    Operations Manager
                  </Text>
                  <Text className="font-helvetica font-normal text-[18px] leading-[30px] text-black">
                    In the realm of luxury goods, where the <br/>value lies not only in the product itself but<br/>in the entire customer experience, the importance.
                  </Text>
                </View>
                
                {/* Email Icon */}
                <View className="absolute left-[360px] bottom-8 w-12 h-12 bg-[#C10016] rounded-full flex items-center justify-center cursor-pointer">
                  <img 
                    src="/mail.svg" 
                    alt="Email"
                    className="w-4 h-4 object-contain filter brightness-0 invert"
                  />
                </View>
              </View>

            </View>

            {/* Second Row */}
            <View className="flex flex-row justify-center gap-8">
              
              {/* Team Member 3 - Nat */}
              <View className="relative w-[720px] h-[380px] bg-white border border-black/10 backdrop-blur-[12.5px] rounded-[20px] overflow-hidden">
                {/* Member Image */}
                <View className="absolute w-[300px] h-[340px] left-8 top-4 rounded-[12px] overflow-hidden">
                  <img 
                    src="/Nat.png" 
                    alt="Nat"
                    className="w-full h-full object-cover"
                  />
                </View>
                
                {/* Member Info */}
                <View className="absolute left-[360px] top-8 w-[340px]">
                  <Text className="font-helvetica font-bold text-[26px] leading-[80px] text-black">
                    Nat
                  </Text>
                  <Text className="font-helvetica font-normal text-[18px] leading-[38px] text-black mb-4">
                    Team Leader - Ops
                  </Text>
                  <Text className="font-helvetica font-normal text-[18px] leading-[30px] text-black">
                    In the realm of luxury goods, where the <br/>value lies not only in the product itself but<br/>in the entire customer experience, the importance.
                  </Text>
                </View>
                
                {/* Email Icon */}
                <View className="absolute left-[360px] bottom-8 w-12 h-12 bg-[#C10016] rounded-full flex items-center justify-center cursor-pointer">
                  <img 
                    src="/mail.svg" 
                    alt="Email"
                    className="w-4 h-4 object-contain filter brightness-0 invert"
                  />
                </View>
              </View>

              {/* Team Member 4 - Ste */}
              <View className="relative w-[720px] h-[380px] bg-white border border-black/10 backdrop-blur-[12.5px] rounded-[20px] overflow-hidden">
                {/* Member Image */}
                <View className="absolute w-[300px] h-[340px] left-8 top-4 rounded-[12px] overflow-hidden">
                  <img 
                    src="/Ste.png" 
                    alt="Ste"
                    className="w-full h-full object-cover"
                  />
                </View>
                
                {/* Member Info */}
                <View className="absolute left-[360px] top-8 w-[340px]">
                  <Text className="font-helvetica font-bold text-[26px] leading-[80px] text-black">
                    Ste
                  </Text>
                  <Text className="font-helvetica font-normal text-[18px] leading-[38px] text-black mb-4">
                    Team Leader - Warehouse
                  </Text>
                  <Text className="font-helvetica font-normal text-[18px] leading-[30px] text-black">
                    In the realm of luxury goods, where the value lies not only in the product itself but in the entire customer experience, the importance.
                  </Text>
                </View>
                
                {/* Email Icon */}
                <View className="absolute left-[360px] bottom-8 w-12 h-12 bg-[#C10016] rounded-full flex items-center justify-center cursor-pointer">
                  <img 
                    src="/mail.svg" 
                    alt="Email"
                    className="w-4 h-4 object-contain filter brightness-0 invert"
                  />
                </View>
              </View>

            </View>

            {/* Third Row - Centered */}
            <View className="flex flex-row justify-center">
              
              {/* Team Member 5 - Jordy */}
              <View className="relative w-[720px] h-[380px] bg-white border border-black/10 backdrop-blur-[12.5px] rounded-[20px] overflow-hidden">
                {/* Member Image */}
                <View className="absolute w-[300px] h-[340px] left-8 top-4 rounded-[12px] overflow-hidden">
                  <img 
                    src="/jordy.png" 
                    alt="Jordy"
                    className="w-full h-full object-cover"
                  />
                </View>
                
                {/* Member Info */}
                <View className="absolute left-[360px] top-8 w-[340px]">
                  <Text className="font-helvetica font-bold text-[26px] leading-[80px] text-black">
                    Jordy
                  </Text>
                  <Text className="font-helvetica font-normal text-[18px] leading-[38px] text-black mb-4">
                    Warehouse Manager
                  </Text>
                  <Text className="font-helvetica font-normal text-[18px] leading-[30px] text-black">
                    In the realm of luxury goods, where the value lies not only in the product itself but in the entire customer experience, the importance.
                  </Text>
                </View>
                
                {/* Email Icon */}
                <View className="absolute left-[360px] bottom-8 w-12 h-12 bg-[#C10016] rounded-full flex items-center justify-center cursor-pointer">
                  <img 
                    src="/mail.svg" 
                    alt="Email"
                    className="w-4 h-4 object-contain filter brightness-0 invert"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Career Opportunities Section */}
        <View className="relative w-full min-h-[900px] py-20 overflow-hidden">
          {/* Background Gradient Fix */}
          <View className="absolute inset-0">
            <div 
              className="w-full h-full"
              style={{
                background: `url(/job.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </View>

          {/* Content Container - Centered */}
          <View className="relative z-10 max-w-[1500px] mx-auto px-8 h-full flex items-center">
            {/* 2 Column Layout - Centered vertically */}
            <View className="flex flex-row gap-20 w-full items-center">
              {/* LEFT COLUMN - Centered horizontally */}
              <View className="flex-1 flex flex-col justify-center">
                {/* Badge */}
                <View className="w-[320px] h-[48px] bg-[rgba(193,0,22,0.1)] rounded-[120px] mb-10 flex items-center justify-center">
                  <Text className="font-helvetica font-medium text-[16px] tracking-[0.2em] text-[#C10016] uppercase">
                    Career Opportunities
                  </Text>
                </View>

                <Text className="font-helvetica font-bold text-[60px] leading-[74px] text-white mb-8">
                  Discover the <Text className="text-[#C10016]">Path</Text> to Your Dream <Text className="text-[#C10016]">Career</Text>
                </Text>

                <Text className="font-helvetica text-[20px] leading-[38px] text-white/90 mb-12 max-w-[670px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
                </Text>

                <button className="bg-[#C10016] hover:bg-[#a00012] rounded-[6px] px-8 py-4 flex flex-row items-center gap-2 w-[200px] transition-all">
                  <Text className="font-helvetica font-bold text-[18px] text-white">View All Jobs</Text>
                  <img src="/arrow.svg" className="w-3 h-3 filter brightness-0 invert" alt="arrow" />
                </button>
              </View>

              {/* RIGHT COLUMN - Fixed card dimensions */}
              <View className="flex-1 flex flex-col justify-center">
                <View className="space-y-6">
                  {/* CARD 1 — Dark (Top) */}
                  <View className="w-[680px] h-[225px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] rounded-[20px] p-8">
                    <Text className="font-helvetica font-bold text-[22px] leading-[44px] text-white mb-2">
                      Warehouse Manager
                    </Text>
                    <View className="flex flex-row items-center justify-between mb-6">
                      <Text className="font-helvetica text-[16px] leading-[26px] text-white/90 max-w-[500px]">
                        Felis cursus ornare cubilia leo montes penatibus fermentum<br/>dapibus convallis. Nisl nunc quis senectus platea.
                      </Text>
                      <button className="bg-[#C10016] hover:bg-[#a00012] rounded-[6px] px-8 py-4 flex flex-row items-center gap-3">
                        <Text className="font-helvetica text-[16px] text-white font-bold">View Job</Text>
                        <img src="/arrow.svg" className="w-3 h-3 filter brightness-0 invert" />
                      </button>
                    </View>
                    <View className="flex flex-row gap-4">
                      <View className="bg-[rgba(255,255,255,0.1)] rounded-[80px] px-6 py-2">
                        <Text className="font-helvetica text-[16px] text-white">Remote</Text>
                      </View>
                      <View className="bg-[rgba(255,255,255,0.1)] rounded-[80px] px-6 py-2">
                        <Text className="font-helvetica text-[16px] text-white">Full Time</Text>
                      </View>
                      <View className="bg-[rgba(255,255,255,0.1)] rounded-[80px] px-6 py-2">
                        <Text className="font-helvetica text-[16px] text-white">Dubai</Text>
                      </View>
                    </View>
                  </View>

                  {/* CARD 2 — WHITE (Middle) */}
                  <View className="w-[680px] h-[225px] bg-white rounded-[20px] p-8 shadow-2xl">
                    <Text className="font-helvetica font-bold text-[22px] leading-[44px] text-black mb-2">
                      Warehouse Manager
                    </Text>
                    <View className="flex flex-row items-center justify-between mb-6">
                      <Text className="font-helvetica text-[16px] leading-[26px] text-black/80 max-w-[500px]">
                        Felis cursus ornare cubilia leo montes penatibus fermentum<br/>dapibus convallis. Nisl nunc quis senectus platea.
                      </Text>
                      <button className="bg-[#C10016] hover:bg-[#a00012] rounded-[6px] px-8 py-4 flex flex-row items-center gap-3">
                        <Text className="font-helvetica text-[16px] text-white font-bold">View Job</Text>
                        <img src="/arrow.svg" className="w-3 h-3 filter brightness-0 invert" />
                      </button>
                    </View>
                    <View className="flex flex-row gap-4">
                      <View className="bg-[rgba(193,0,22,0.1)] rounded-[80px] px-6 py-2">
                        <Text className="font-helvetica text-[16px] text-[#C10016]">Remote</Text>
                      </View>
                      <View className="bg-[rgba(193,0,22,0.1)] rounded-[80px] px-6 py-2">
                        <Text className="font-helvetica text-[16px] text-[#C10016]">Full Time</Text>
                      </View>
                      <View className="bg-[rgba(193,0,22,0.1)] rounded-[80px] px-6 py-2">
                        <Text className="font-helvetica text-[16px] text-[#C10016]">Dubai</Text>
                      </View>
                    </View>
                  </View>

                  {/* CARD 3 — Dark (Bottom) */}
                  <View className="w-[680px] h-[225px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] rounded-[20px] p-8">
                    <Text className="font-helvetica font-bold text-[22px] leading-[44px] text-white mb-2">
                      Warehouse Manager
                    </Text>
                    <View className="flex flex-row items-center justify-between mb-6">
                      <Text className="font-helvetica text-[16px] leading-[26px] text-white/90 max-w-[500px]">
                        Felis cursus ornare cubilia leo montes penatibus fermentum<br/>dapibus convallis. Nisl nunc quis senectus platea.
                      </Text>
                      <button className="bg-[#C10016] hover:bg-[#a00012] rounded-[6px] px-8 py-4 flex flex-row items-center gap-3">
                        <Text className="font-helvetica text-[16px] text-white font-bold">View Job</Text>
                        <img src="/arrow.svg" className="w-3 h-3 filter brightness-0 invert" />
                      </button>
                    </View>
                    <View className="flex flex-row gap-4">
                      <View className="bg-[rgba(255,255,255,0.1)] rounded-[80px] px-6 py-2">
                        <Text className="font-helvetica text-[16px] text-white">Remote</Text>
                      </View>
                      <View className="bg-[rgba(255,255,255,0.1)] rounded-[80px] px-6 py-2">
                        <Text className="font-helvetica text-[16px] text-white">Full Time</Text>
                      </View>
                      <View className="bg-[rgba(255,255,255,0.1)] rounded-[80px] px-6 py-2">
                        <Text className="font-helvetica text-[16px] text-white">Dubai</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Auto-Sliding Gallery with Infinite Loop */}
<View className="relative w-full h-[380px] mt-20 mb-20 overflow-hidden">
  <div 
    className="relative w-full h-full"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
  >
    <View 
      className="flex flex-row absolute top-0 left-6 transition-transform duration-500 ease-in-out"
      style={{ 
        transform: `translateX(-${currentSlide * 404}px)` 
      }}
    >
      {/* Original images */}
      {images.map((image) => (
        <View
          key={image.id}
          className="w-[380px] h-[380px] mr-6 rounded-[20px] bg-cover bg-center flex-shrink-0 hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(${image.src})` }}
        />
      ))}
      {/* Duplicate images for seamless loop */}
      {images.map((image) => (
        <View
          key={`${image.id}-duplicate`}
          className="w-[380px] h-[380px] mr-6 rounded-[20px] bg-cover bg-center flex-shrink-0 hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(${image.src})` }}
        />
      ))}
    </View>
  </div>
</View>
        {/* Accomplishments Section */}
        <section className="relative w-full">
          {/* Two Column Layout */}
          <div className="flex">
            
            {/* Left Section - White Background */}
            <div className="w-1/2 bg-white relative min-h-[520px] flex items-center justify-center">
              <img src="/bg.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
              {/* Left Section Content - Centered */}
              <div className="max-w-[740px] w-full text-center px-8">
                
                {/* Heading */}
                <h2 className="font-bold text-[42px] leading-[54px] tracking-tight text-black mb-8">
                  Our Accomplishments
                </h2>

                {/* Red Line - Centered */}
                <div className="w-[100px] h-[1px] bg-[#C10016] mx-auto mb-12"></div>

                {/* Image Grid - Centered */}
                <div className="flex justify-center gap-16 mb-12">
                  <div className="w-[84px] h-[84px] bg-cover bg-center" style={{backgroundImage: 'url(/award1.png)'}}></div>
                  <div className="w-[84px] h-[84px] bg-cover bg-center" style={{backgroundImage: 'url(/award2.png)'}}></div>
                  <div className="w-[84px] h-[84px] bg-cover bg-center" style={{backgroundImage: 'url(/award3.png)'}}></div>
                  <div className="w-[84px] h-[84px] bg-cover bg-center" style={{backgroundImage: 'url(/award4.png)'}}></div>
                  <div className="w-[84px] h-[84px] bg-cover bg-center" style={{backgroundImage: 'url(/award5.png)'}}></div>
                </div>
              </div>
            </div>

            {/* Right Section - Red Background */}
            <div className="w-1/2 bg-[#DA192F] relative min-h-[520px] flex items-center justify-center">
              {/* Right Section Content - Centered */}
              <div className="max-w-[650px] w-full text-center px-8">
                
                {/* Heading */}
                <h2 className="font-bold text-[42px] leading-[54px] tracking-tight text-white mb-8">
                  Advanced Tech Solutions
                </h2>

                {/* White Line - Centered */}
                <div className="w-[100px] h-[1px] bg-white mx-auto mb-12"></div>

                {/* Subtitle - Centered */}
                <p className="font-normal text-[24px] leading-[44px] text-white mb-12">
                  Exceptional Quality Service
                </p>

                {/* CTA Button - Centered */}
                <button className="border border-white rounded-[6px] flex items-center justify-center gap-[10px] px-8 py-4 transition-colors duration-300 mx-auto">
                  <span className="text-white font-bold text-[18px] leading-[36px]">Let's Talk</span>
                  <img src="/arrow.svg" alt="arrow" className="w-4 h-4 object-contain" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full relative min-h-screen" style={{ backgroundImage: "url(/footerbg.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
          <div className="max-w-7xl mx-auto px-8 py-20">
            <div className="flex flex-col lg:flex-row justify-between gap-16">
              {/* Left Column (Logo + Subscribe) */}
              <div className="flex flex-col gap-6 w-full lg:w-2/5">
                <div className="h-16 w-80">
                  <img src="/wlogo.png" alt="logo" />
                </div>

                <p className="text-[18px] font-normal text-white">
                  Subscribe to receive Fulfil.X updates
                </p>

                <div className="w-full border border-white/20 rounded-lg flex items-center px-4 h-14">
                  <input
                    className="bg-transparent text-white font-normal placeholder-white/40 outline-none flex-1"
                    type="email"
                    placeholder="Enter your mail id"
                  />
                  <div className="h-6 w-6 rounded flex items-center justify-center cursor-pointer">
                    <img src="/sub.svg" alt="plane" className='w-6 h-6 object-contain' />
                  </div>
                </div>

                <label 
                  className="flex items-center gap-3 mt-3 cursor-pointer"
                  onClick={() => setAgreedToPolicy(!agreedToPolicy)}
                >
                  <div className={`h-5 w-5 rounded ${agreedToPolicy ? 'bg-white' : 'bg-transparent border-2 border-white'} flex items-center justify-center`}>
                    {agreedToPolicy && (
                      <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    )}
                  </div>
                  <span className="text-white/90 font-normal text-base">
                    I agree to the privacy policy
                  </span>
                </label>

                <div className="mt-4">
                  <p className="text-3xl font-normal text-white mb-4">
                    Find us on the socials
                  </p>
                  <div className="flex gap-4">
                    <button 
                      className="h-14 w-14 bg-[#C10016] rounded-full flex items-center justify-center hover:bg-[#a00012] transition-colors"
                      aria-label="Facebook"
                    >
                      <img src="/fb.svg" alt="facebook" className='w-6 h-6 object-contain' />
                    </button>
                    <button 
                      className="h-14 w-14 bg-[#C10016] rounded-full flex items-center justify-center hover:bg-[#a00012] transition-colors"
                      aria-label="Instagram"
                    >
                      <img src="/ig.svg" alt="instagram" className='w-6 h-6 object-contain' />
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Section - Right Column */}
              <div className="w-full lg:w-3/5">
                {/* Contact Container */}
                <div 
                  className="w-full pt-4 px-6 pb-7"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '20px',
                    minWidth: '950px',
                  }}
                >
                  {/* Warehouse Buttons Row */}
                  <button className="flex flex-col sm:flex-row gap-4 mb-3">
                    <div 
                      className="flex justify-center items-center py-4 px-8"
                      style={{
                        background: '#C10016',
                        borderRadius: '60px',
                        minWidth: '200px',
                      }}
                    >
                      <span className="text-white font-bold text-xl">
                        UK Warehouse
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white font-bold text-xl">
                        UAE Warehouse
                      </span>
                    </div>
                  </button>
                  
                  {/* Contact Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Phone */}
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#C10016' }}
                      >
                        <img src="/phone.svg" alt="phone" className="w-5 h-5" />
                      </div>
                      <span className="text-white text-lg font-normal">
                        +44 161 399 2348
                      </span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#C10016' }}
                      >
                        <img src="/mail.svg" alt="email" className="w-5 h-5" />
                      </div>
                      <span className="text-white text-lg font-normal">
                        info@fulfilx.co.uk
                      </span>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#C10016' }}
                      >
                        <img src="/map.svg" alt="location" className="w-5 h-5" />
                      </div>
                      <div className="text-white text-left">
                        <div className="font-bold text-lg">FulfilX HQ</div>
                        <div className="text-base font-normal">
                          Nile Mill, Oldham,
                          Greater Manchester,
                          OL9 8NT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links Section */}
                <div className="w-full mt-16">
                  {/* Quick Links Title - Left Aligned */}
                  <div className="text-left mb-1">
                    <h3 
                      className="text-white font-bold"
                      style={{
                        fontSize: '32px',
                        lineHeight: '88px',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      Quick Links
                    </h3>
                  </div>

                  {/* Links Grid - Left Aligned */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-28 max-w-4xl">
                    {/* Column 1 */}
                    <div 
                      className="text-white font-normal text-left"
                      style={{
                        fontSize: '18px',
                        lineHeight: '60px',
                      }}
                    >
                      <a href="/home" className="block hover:text-[#C10016] transition-colors cursor-pointer">Home</a>
                      <a href="/about" className="block hover:text-[#C10016] transition-colors cursor-pointer">About Us</a>
                      <a href="/services" className="block hover:text-[#C10016] transition-colors cursor-pointer">Services</a>
                      <a href="/sectors" className="block hover:text-[#C10016] transition-colors cursor-pointer">Sectors</a>
                      <a href="/news" className="block hover:text-[#C10016] transition-colors cursor-pointer">News</a>
                    </div>

                    {/* Column 2 */}
                    <div 
                      className="text-white font-normal text-left"
                      style={{
                        fontSize: '18px',
                        lineHeight: '60px',
                      }}
                    >
                      <a href="/team" className="block hover:text-[#C10016] transition-colors cursor-pointer">Team</a>
                      <a href="/partners" className="block hover:text-[#C10016] transition-colors cursor-pointer">Our Partners</a>
                      <a href="/story" className="block hover:text-[#C10016] transition-colors cursor-pointer">Our Story</a>
                      <a href="/locations" className="block hover:text-[#C10016] transition-colors cursor-pointer">Store Locations</a>
                      <a href="/press" className="block hover:text-[#C10016] transition-colors cursor-pointer">Press Release</a>
                    </div>

                    {/* Column 3 */}
                    <div 
                      className="text-white font-normal text-left"
                      style={{
                        fontSize: '18px',
                        lineHeight: '60px',
                      }}
                    >
                      <a href="/contact" className="block hover:text-[#C10016] transition-colors cursor-pointer">Contact Us</a>
                      <a href="/shipping" className="block hover:text-[#C10016] transition-colors cursor-pointer">Shipping</a>
                      <a href="/delivery" className="block hover:text-[#C10016] transition-colors cursor-pointer">Delivery System</a>
                      <a href="/returns" className="block hover:text-[#C10016] transition-colors cursor-pointer">Returning Policy</a>
                      <a href="/career" className="block hover:text-[#C10016] transition-colors cursor-pointer">Career</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 pt-2 pb-4 text-center">
              <p className="text-white text-[16px] opacity-90">
                Copyright © 2025. <span className='text-[#C10016]'>Fulfil X</span>. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

      </ScrollView>
    </>
  );
}