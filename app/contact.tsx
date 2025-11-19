// app/contact.tsx
import Navbar from '@/components/layout/navbar';
import { Stack } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

export default function ContactScreen() {
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
                            <Text className="absolute left-[70px] top-[129px] font-helvetica font-normal text-[16px] leading-[44px] text-black">
                                Call Us
                            </Text>

                            {/* Phone Number */}
                            <Text className="absolute left-[80px] top-[160px] font-helvetica font-bold text-[24px] leading-[74px] tracking-[-0.01em] text-black whitespace-nowrap">
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
                            <Text className="absolute left-[145px] top-[129px] font-helvetica font-normal text-[16px] leading-[44px] text-black">
                                Email Us
                            </Text>

                            {/* Email Address */}
                            <Text className="absolute left-[85px] top-[160px] font-helvetica font-bold text-[24px] leading-[74px] tracking-[-0.01em] text-black whitespace-nowrap">
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
                            <Text className="absolute left-[150px] top-[107px] font-helvetica font-normal text-[16px] leading-[44px] text-black">
                                Visit Us
                            </Text>

                            {/* Address */}
                            <Text className="absolute left-[28px] top-[138px] font-helvetica font-medium text-[18px] leading-[26px] tracking-[-0.01em] text-black text-center w-[294px]">
                                Nile Mill, Oldham, Greater Manchester, OL9 8NT
                            </Text>
                        </View>

                    </View>
                </View>

                {/* Add more sections below if needed */}
                <View className="h-20" />
                
            </ScrollView>
        </>
    );
}