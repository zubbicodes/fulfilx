import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { Stack, useRouter } from 'expo-router';
import { Image, ScrollView, Text, useWindowDimensions, View } from 'react-native';

export default function SustainabilityScreen() {
    const { width } = useWindowDimensions();
    const isMobile = width < 1024;
    const router = useRouter();

    return (
        <>
            <Stack.Screen 
                options={{ 
                    headerShown: false,
                    header: () => null
                }} 
            />
            
            <Navbar />
            
            {/* Main Scrollable Content */}
            <ScrollView 
                className="flex-1 bg-white"
            >
                {/* Hero Section */}
                <View className="relative">
                    {/* PNG Background */}
                    <View className="absolute inset-0 z-0 h-[calc(100%-100px)]">
                        <Image 
                            source={{ uri: "/bg.webp" }}
                            alt="Background pattern"
                            className="w-full h-full lg:h-[600px]"
                            resizeMode="cover"
                        />
                    </View>

                    {/* Hero Content */}
                    <View className="relative z-10 flex items-center justify-center pt-20 lg:pt-60 px-4">
                        {/* Main Title */}
                        <Text className="font-helvetica font-bold text-3xl lg:text-[84px] lg:leading-[84px] text-black text-center mb-6">
                            Sustainability
                        </Text>
                        
                        {/* Breadcrumb Navigation */}
                        <View className="flex flex-row items-center justify-center mt-2 flex-wrap">
                            <Text className="font-helvetica font-normal text-sm lg:text-[20px] lg:leading-[40px] text-black">
                                Home
                            </Text>
                            <View className="w-1 h-1 bg-black rounded-full mx-2 lg:mx-4" />
                            <Text className="font-helvetica font-medium text-sm lg:text-[20px] lg:leading-[40px] text-[#C10016]">
                                Sustainability
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Text Content Section */}
                <View className="relative z-20 bg-white pt-10 lg:pt-32 px-4 pb-10">
                    <View className="w-full lg:max-w-[1296px] mx-auto">
                        <Text className="font-helvetica font-bold text-2xl lg:text-[32px] lg:leading-[42px] text-black text-left mb-8">
                            Our Commitment to Sustainability
                        </Text>
                        <Text className="font-helvetica font-normal text-base lg:text-[22px] lg:leading-[44px] text-black text-left mb-8">
                            At FULFIL.X, sustainability is embedded into everything we do. As a UK-based 3PL with global fulfilment hubs, we recognise our responsibility to reduce environmental impact while supporting our clients’ growth in a responsible way.
                        </Text>
                        <Text className="font-helvetica font-normal text-base lg:text-[22px] lg:leading-[44px] text-black text-left mb-8">
                            We design our operations to be digital-first and paperless wherever possible, minimising unnecessary resource use across our workflows. Our fulfilment processes are optimised to calculate the smallest possible packaging size for every shipment, reducing waste and improving transport efficiency.
                        </Text>
                        <Text className="font-helvetica font-normal text-base lg:text-[22px] lg:leading-[44px] text-black text-left mb-8">
                            To lower emissions, we consolidate courier collections and offer carbon-friendly shipping options to our clients. We also actively invest in environmental initiatives, including tree planting as a business, to help offset our footprint.
                        </Text>

                        <Text className="font-helvetica font-bold text-xl lg:text-[24px] lg:leading-[32px] text-black text-left mb-6 mt-8">
                            Sustainable Materials & Waste Reduction
                        </Text>
                        <View className="mb-8 pl-4">
                            {[
                                "95% of all cardboard waste is recycled",
                                "Pallet wrap plastics are recycled through specialist partners",
                                "Transitioning fully to paper tape and paper void fill",
                                "Use of biodegradable shipping bags as standard",
                                "Packaging choices designed to minimise excess materials"
                            ].map((item, index) => (
                                <Text key={index} className="font-helvetica font-normal text-base lg:text-[22px] lg:leading-[44px] text-black text-left mb-2">
                                    • {item}
                                </Text>
                            ))}
                        </View>

                        <Text className="font-helvetica font-bold text-xl lg:text-[24px] lg:leading-[32px] text-black text-left mb-6 mt-8">
                            Responsible Operations
                        </Text>
                        <View className="mb-8 pl-4">
                            {[
                                "Low-energy LED lighting across our facilities",
                                "Low-energy heating systems to reduce consumption",
                                "Digital systems replacing paper-based processes"
                            ].map((item, index) => (
                                <Text key={index} className="font-helvetica font-normal text-base lg:text-[22px] lg:leading-[44px] text-black text-left mb-2">
                                    • {item}
                                </Text>
                            ))}
                        </View>

                        <Text className="font-helvetica font-bold text-xl lg:text-[32px] lg:leading-[40px] text-black text-left mb-6 mt-8">
                            Circular Economy Support
                        </Text>
                        <Text className="font-helvetica font-normal text-base lg:text-[22px] lg:leading-[44px] text-black text-left mb-4">
                            FULFIL.X goes beyond fulfilment by supporting responsible brand returns, offering recycling solutions for:
                        </Text>
                        <View className="mb-8 pl-4">
                            {[
                                "E-waste",
                                "Clothing and textiles",
                                "Other recyclable product categories"
                            ].map((item, index) => (
                                <Text key={index} className="font-helvetica font-normal text-base lg:text-[22px] lg:leading-[44px] text-black text-left mb-2">
                                    • {item}
                                </Text>
                            ))}
                        </View>

                        <Text className="font-helvetica font-bold text-xl lg:text-[32px] lg:leading-[40px] text-black text-left mb-6 mt-8">
                            Supporting Our People
                        </Text>
                        <Text className="font-helvetica font-normal text-base lg:text-[22px] lg:leading-[44px] text-black text-left mb-8">
                            We believe sustainability includes people as well as the planet. Our ride-to-work scheme encourages greener commuting choices and supports employee wellbeing.
                        </Text>
                        <Text className="font-helvetica font-bold text-base lg:text-[22px] lg:leading-[44px] text-black text-left">
                            Sustainability is not a one-time initiative at FULFIL.X — it is an ongoing commitment. We continually review our processes, materials, and partnerships to ensure we are delivering fulfilment solutions that are efficient, responsible, and future-focused.
                        </Text>
                    </View>
                </View>

                <Footer />
            </ScrollView>
        </>
    );
};
