// app/contact.tsx
import Navbar from '@/components/layout/navbar';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function ContactScreen() {
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const primaryRed = 'bg-[#C10016]';
  
  return (
    <>
      <Stack.Screen 
        options={{ 
          title: 'Contact Us',
          headerShown: false,
        }} 
      />
      
      <Navbar />
      
      {/* Main Scrollable Content */}
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
              Contact Us
            </Text>
            
            {/* Breadcrumb Navigation */}
            <View className="flex flex-row items-center justify-center">
              <Text className="font-helvetica font-normal text-[20px] leading-[40px] text-black">
                Home
              </Text>
              <View className="w-1 h-1 bg-[#C10016] rounded-full mx-4" />
              <Text className="font-helvetica font-medium text-[20px] leading-[40px] text-[#C10016]">
                Contact Us
              </Text>
            </View>
          </View>
        </View>

        {/* Get in Touch Section */}
        <View className="w-full bg-white py-20">
          {/* Contact Us Badge */}
          <View className="flex flex-row justify-center items-center mx-auto w-[200px] h-[48px] bg-[rgba(193,0,22,0.1)] rounded-[120px] mb-8">
            <Text className="font-helvetica font-medium text-[16px] leading-[40px] tracking-[0.2em] uppercase text-[#C10016]">
              contact us
            </Text>
          </View>

          {/* Get in Touch Heading */}
          <Text className="text-center font-helvetica font-bold text-[64px] leading-[74px] tracking-[-0.01em] text-black mb-16">
            Get in Touch
          </Text>

          {/* Contact Cards Grid */}
          <View className="flex flex-row justify-center items-start gap-8 px-8">
            {/* Phone Card */}
            <View className="relative w-[350px] h-[227px]">
              {/* Background Card */}
              <View className="absolute w-[350px] h-[180px] top-[47px] bg-white border border-[rgba(0,0,0,0.1)] backdrop-blur-[12.5px] rounded-[20px]" />
              
              {/* Outer Circle */}
              <View className="absolute w-[124px] h-[124px] left-[113px] top-0 bg-white border border-[rgba(0,0,0,0.1)] rounded-full" />
              
              {/* Inner Red Circle */}
              <View className="absolute w-[94px] h-[94px] left-[128px] top-[15px] bg-[#C10016] rounded-full flex items-center justify-center">
                <img 
                  src="/phone.svg" 
                  alt="Phone" 
                  className="w-8 h-8 object-contain"
                />
              </View>

              {/* Call Us Text */}
              <Text className="absolute left-6 top-[129px] font-helvetica font-normal text-[16px] leading-[44px] text-black">
                Call Us
              </Text>

              {/* Phone Number */}
              <Text className="absolute left-6 top-[160px] font-helvetica font-bold text-[18px] leading-[74px] tracking-[-0.01em] text-black">
                +44 161 399 2348
              </Text>
            </View>

            {/* Email Card */}
            <View className="relative w-[350px] h-[227px]">
              {/* Background Card */}
              <View className="absolute w-[350px] h-[180px] top-[47px] bg-white border border-[rgba(0,0,0,0.1)] backdrop-blur-[12.5px] rounded-[20px]" />
              
              {/* Outer Circle */}
              <View className="absolute w-[124px] h-[124px] left-[113px] top-0 bg-white border border-[rgba(0,0,0,0.1)] rounded-full" />
              
              {/* Inner Red Circle */}
              <View className="absolute w-[94px] h-[94px] left-[128px] top-[15px] bg-[#C10016] rounded-full flex items-center justify-center">
                <img 
                  src="/mail.svg" 
                  alt="Email" 
                  className="w-8 h-8 object-contain"
                />
              </View>

              {/* Email Us Text */}
              <Text className="absolute left-6 top-[129px] font-helvetica font-normal text-[16px] leading-[44px] text-black">
                Email Us
              </Text>

              {/* Email Address */}
              <Text className="absolute left-6 top-[160px] font-helvetica font-bold text-[18px] leading-[74px] tracking-[-0.01em] text-black">
                info@fulfilx.co.uk
              </Text>
            </View>

            {/* Visit Card */}
            <View className="relative w-[350px] h-[227px]">
              {/* Background Card */}
              <View className="absolute w-[350px] h-[180px] top-[47px] bg-white border border-[rgba(0,0,0,0.1)] backdrop-blur-[12.5px] rounded-[20px]" />
              
              {/* Outer Circle */}
              <View className="absolute w-[124px] h-[124px] left-[113px] top-0 bg-white border border-[rgba(0,0,0,0.1)] rounded-full" />
              
              {/* Inner Red Circle */}
              <View className="absolute w-[94px] h-[94px] left-[128px] top-[15px] bg-[#C10016] rounded-full flex items-center justify-center">
                <img 
                  src="/map.svg" 
                  alt="Location" 
                  className="w-8 h-8 object-contain"
                />
              </View>

              {/* Visit Us Text */}
              <Text className="absolute left-6 top-[129px] font-helvetica font-normal text-[16px] leading-[44px] text-black">
                Visit Us
              </Text>

              {/* Email Address */}
              <Text className="absolute left-6 top-[160px] font-helvetica font-bold text-[14px] leading-[74px] tracking-[-0.01em] text-black">
                Nile Mill, Oldham, Greater Manchester, OL9 8NT
              </Text>
            </View>
          </View>
        </View>

        {/* Contact Form Section */}
        <div className="relative w-full bg-white py-20">
          {/* Two Column Layout */}
          <div className="flex flex-row justify-center items-start gap-16 px-8">
            
            {/* Left Column - Image */}
            <div className="w-[720px] h-[936px] rounded-[30px] overflow-hidden">
              <img 
                src="/locate.png" 
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-[720px] h-[936px] bg-white border border-black/10 rounded-[30px] flex flex-col">
              
              {/* Form Content with proper padding */}
              <div className="flex-1 px-12 pt-12 pb-6">
                {/* Section Title */}
                <h2 className="font-bold text-[40px] leading-[1.2] tracking-[-0.01em] text-black mb-8">
                  Contact For <span className='text-[#C10016]'>Queries?</span>
                </h2>

                {/* Form */}
                <div className="space-y-6">
                  
                  {/* Name Row - Two Columns */}
                  <div className="flex flex-row gap-6">
                    {/* First Name */}
                    <div className="flex-1">
                      <label className="block font-medium text-[18px] text-black mb-2">
                        Name <span className='text-[#C10016]'>*</span>
                      </label>
                      <input 
                        type="text"
                        placeholder="First Name"
                        className="w-full h-[50px] bg-white border border-black/10 rounded-[8px] px-4 text-[16px] text-black placeholder:text-black/25 focus:outline-none focus:border-[#C10016]"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="flex-1">
                      <label className="block font-medium text-[18px] text-black mb-2 invisible">
                        Last Name
                      </label>
                      <input 
                        type="text"
                        placeholder="Last Name"
                        className="w-full h-[50px] bg-white border border-black/10 rounded-[8px] px-4 text-[16px] text-black placeholder:text-black/25 focus:outline-none focus:border-[#C10016]"
                      />
                    </div>
                  </div>

                  {/* Brand Name */}
                  <div>
                    <label className="block font-medium text-[18px] text-black mb-2">
                      Brand Name <span className='text-[#C10016]'>*</span>
                    </label>
                    <input 
                      type="text"
                      placeholder="Enter your brand name"
                      className="w-full h-[50px] bg-white border border-black/10 rounded-[8px] px-4 text-[16px] text-black placeholder:text-black/25 focus:outline-none focus:border-[#C10016]"
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block font-medium text-[18px] text-black mb-2">
                      Contact Number for Call Back <span className='text-[#C10016]'>*</span>
                    </label>
                    <input 
                      type="tel"
                      placeholder="e.g. 000 000 0000"
                      className="w-full h-[50px] bg-white border border-black/10 rounded-[8px] px-4 text-[16px] text-black placeholder:text-black/25 focus:outline-none focus:border-[#C10016]"
                    />
                  </div>

                  {/* Ideal Time for Call Back */}
                  <div className="w-full">
                    <label className="block font-medium text-[18px] text-black mb-2">
                      Ideal Time for Call Back <span className="text-[#C10016]">*</span>
                    </label>

                    <div className="relative">
                      <select className="w-full h-[50px] bg-white border border-black/10 rounded-[8px] px-4 pr-10 text-[16px] text-black focus:outline-none focus:border-[#C10016] appearance-none">
                        <option value="">Select your time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 8PM)</option>
                      </select>

                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <img src="/down.svg" alt="" className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block font-medium text-[18px] text-black mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email"
                      placeholder="e.g. john@domain.com"
                      className="w-full h-[50px] bg-white border border-black/10 rounded-[8px] px-4 text-[16px] text-black placeholder:text-black/25 focus:outline-none focus:border-[#C10016]"
                    />
                  </div>

                  {/* Comment or Message */}
                  <div>
                    <label className="block font-medium text-[18px] text-black mb-2">
                      Comment or Message
                    </label>
                    <textarea 
                      placeholder="Type your comment or message here..."
                      rows={3}
                      className="w-full min-h-[104px] bg-white border border-black/10 rounded-[8px] px-4 py-3 text-[16px] text-black placeholder:text-black/25 focus:outline-none focus:border-[#C10016] resize-vertical"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button at the bottom */}
              <div className="px-12 pb-12">
                <button className="bg-[#C10016] rounded-[6px] px-8 py-4 flex flex-row items-center gap-3 w-[200px] hover:bg-[#a00012] transition-colors">
                  <span className="font-bold text-[18px] text-white">
                    Submit Now
                  </span>
                  <img 
                    src="/arrow.svg" 
                    alt="Arrow" 
                    className="w-4 h-4 object-contain filter brightness-0 invert"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

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