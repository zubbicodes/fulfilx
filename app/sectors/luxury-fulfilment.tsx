import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { Stack } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

export default function LuxuryScreen() {
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
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View className="relative">
          {/* PNG Background */}
          <View className="absolute inset-0 z-0 h-[calc(100%-100px)]">
            <img 
              src="/bg.png"
              alt="Background pattern"
              className="w-[1920px] h-[600px] object-cover"
            />
          </View>

          {/* Hero Content */}
          <View className="relative z-10 flex items-center justify-center pt-60">
            {/* Main Title */}
            <Text className="font-helvetica font-bold text-[84px] leading-[84px] text-black text-center mb-8">
              Luxury Fulfilment
            </Text>
            
            {/* Breadcrumb Navigation */}
            <View className="flex flex-row items-center justify-center mt-4">
              <Text className="font-helvetica font-normal text-[20px] leading-[40px] text-black">
                Home
              </Text>
              <View className="w-1 h-1 bg-black rounded-full mx-4" />
              <Text className="font-helvetica font-medium text-[20px] leading-[40px]">
                Sectors
              </Text>
              <View className="w-1 h-1 bg-[#C10016] rounded-full mx-4" />
              <Text className="font-helvetica font-medium text-[20px] leading-[40px] text-[#C10016]">
                Luxury Fulfilment
              </Text>
            </View>

            {/* LuxBanner Image - Embedded in Hero Section */}
            <View className="w-full flex items-center justify-center mt-16"> {/* Added margin top */}
              <View 
                className="w-[1296px] h-[650px] rounded-[34px] bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url(/luxbanner.png)',
                  backdropFilter: 'blur(12.5px)'
                }}
              />
            </View>
          </View>
        </View>
         {/* Text Content Section - Align with image left edge */}
<View className="relative z-20 bg-white pt-32 px-4">
  {/* Heading - Same width as image and left aligned */}
  <View className="w-full max-w-[1296px] mx-auto mb-8"> {/* Changed to 1296px to match image */}
    <Text className="font-helvetica font-bold text-[60px] leading-[80px] text-black text-left">
    Mastering Luxury Fulfillment with FULFILX. <span className='text-[#C10016]'>Elegance, Efficiency, Exclusivity</span>    </Text>
  </View>

  {/* Paragraph - Same width as image and left aligned */}
  <View className="w-full max-w-[1296px] mx-auto"> {/* Changed to 1296px to match image */}
    <Text className="font-helvetica font-normal text-[22px] leading-[44px] text-black text-left"> {/* Changed to text-left */}
      In the realm of luxury goods, where the value lies not only in the product itself but in the entire customer experience, the importance of specialized fulfillment services cannot be overstated. FULFILX stands as a premier provider in the fulfillment center industry, specializing in the nuanced field of luxury fulfillment. We understand that luxury brands demand nothing less than perfection, from the moment a customer places an order to the unboxing experience. FULFILX is dedicated to delivering this level of service, utilizing a vast network of couriers and sophisticated integrations with multiple e-commerce platforms to manage and deliver your luxury goods with the elegance, efficiency, and exclusivity your clients expect. This page will detail how FULFILX can transform your luxury brand's logistics into a seamless extension of your brand's promise.
    </Text>
  </View>
</View>
{/* Bespoke Solutions Section - Two Columns */}
<View className="relative z-20 bg-white py-20">
  <View className="max-w-[1393px] mx-auto px-4">
    
    {/* Badge - Moved outside the flex container */}
    <View className="flex flex-row justify-center items-center px-11 py-4 bg-[#C10016] bg-opacity-10 rounded-[120px] w-[320px] mb-6 ml-[648px]">
      <Text className="font-helvetica font-medium text-[16px] leading-[40px] tracking-[0.2em] uppercase text-[#C10016]">
        Bespoke Solutions
      </Text>
    </View>

    <View className="flex flex-row items-start gap-16">
      
      {/* Left Column - Image */}
      <View className="w-[600px] flex-shrink-0">
        <View 
          className="w-[600px] h-[760px] rounded-[30px] bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/heels.png)',
            backdropFilter: 'blur(12.5px)'
          }}
        />
      </View>

      {/* Right Column - Content */}
      <View className="flex-1 max-w-[709px]">
        
        {/* Main Title */}
        <Text className="font-helvetica font-bold text-[54px] leading-[68px] tracking-tight text-black mb-6">
          Bespoke Fulfillment Solutions for <Text className="text-[#C10016]">Luxury Brands</Text>
        </Text>

        {/* Description */}
        <Text className="font-helvetica font-normal text-[22px] leading-[44px] text-black mb-12">
          FULFILX offers tailored fulfillment services designed to meet the unique requirements of luxury brands. We recognize that high-value items require white-glove handling, secure storage, and premium packaging to maintain their integrity and allure.
        </Text>

        {/* Features List */}
        <View className="">
          
          {/* Feature 1 */}
          <View className="flex flex-row items-start gap-4 mb-12">
            {/* Check Icon */}
            <View className="w-5 h-5 flex items-center justify-center mt-2 flex-shrink-0">
              <img src="/check.svg" alt="check" className="w-[19px] h-[16px]"/>
            </View>
            {/* Feature Text */}
            <View className="flex-1">
              <Text className="font-helvetica font-bold text-[20px] leading-[38px] text-black">
                Secure, Climate-Controlled Storage:
              </Text>
              <Text className="font-helvetica font-normal text-[20px] leading-[40px] text-black">
                Luxury items often demand specific storage conditions to preserve their quality and craftsmanship. FULFILX's secure, climate-controlled warehousing ensures that your products are protected from environmental factors, maintaining their pristine condition until they reach your clients.
              </Text>
            </View>
          </View>

          {/* Feature 2 */}
          <View className="flex flex-row items-start gap-4">
            {/* Check Icon */}
            <View className="w-5 h-5 flex items-center justify-center mt-2 flex-shrink-0">
              <img src="/check.svg" alt="check" className="w-[19px] h-[16px]"/>
            </View>
            {/* Feature Text */}
            <View className="flex-1">
              <Text className="font-helvetica font-bold text-[20px] leading-[38px] text-black">
                White-Glove Handling & Packaging:
              </Text>
              <Text className="font-helvetica font-normal text-[20px] leading-[40px] text-black">
                Every aspect of our order fulfillment process is handled with the utmost care and attention to detail. FULFILX provides white-glove handling and utilizes premium packaging materials that reflect the high standards of your luxury brand, ensuring that the unboxing experience is as luxurious as the product itself.
              </Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  </View>
</View>
{/* Bespoke Solutions Section - Two Columns */}
<View className="relative z-20 bg-white py-20">
      {/* Background */}
  <View className="absolute inset-0 z-0">
    <img 
      src="/bg.png"
      alt="Background pattern"
      className="w-full h-full object-cover"
    />
  </View>
  <View className="max-w-[1393px] mx-auto px-4">
    
    {/* Badge - Moved outside the flex container */}
    <View className="flex flex-row justify-center items-center px-11 py-4 bg-[#C10016] bg-opacity-10 rounded-[120px] w-[320px] mb-6 ml-0">
      <Text className="font-helvetica font-medium text-[16px] leading-[40px] tracking-[0.2em] uppercase text-[#C10016]">
        Global Reach
      </Text>
    </View>

    <View className="flex flex-row items-start gap-16">
      
      {/* Right Column - Content - Now on LEFT side */}
      <View className="flex-1 max-w-[709px]">
        
        {/* Main Title */}
        <Text className="font-helvetica font-bold text-[54px] leading-[68px] tracking-tight text-black mb-6">
          Global Reach with <Text className="text-[#C10016]">Precision</Text> and <Text className="text-[#C10016]">Care</Text>
        </Text>

        {/* Description */}
        <Text className="font-helvetica font-normal text-[22px] leading-[44px] text-black mb-12">
          To cater to a discerning global clientele, FULFILX utilizes an extensive
network of courier services, chosen for their reliability and ability to deliver high-value items with care. Our logistics strategies are crafted to offer flexible, secure delivery options for both international and domestic clients.
        </Text>

        {/* Features List */}
        <View className="">
          
          {/* Feature 1 */}
          <View className="flex flex-row items-start gap-4 mb-12">
            {/* Check Icon */}
            <View className="w-5 h-5 flex items-center justify-center mt-2 flex-shrink-0">
              <img src="/check.svg" alt="check" className="w-[19px] h-[16px]"/>
            </View>
            {/* Feature Text */}
            <View className="flex-1">
              <Text className="font-helvetica font-bold text-[20px] leading-[38px] text-black">
                Tailored Delivery Experiences:
              </Text>
              <Text className="font-helvetica font-normal text-[20px] leading-[40px] text-black">
Recognizing the importance of personalization in luxury service, FULFILX offers customizable delivery options, including scheduled deliveries and personal hand-offs, to create an exclusive experience for your clients. This attention to detail reinforces the premium nature of your brand and fosters lasting customer loyalty.
              </Text>
            </View>
          </View>

          {/* Feature 2 */}
          <View className="flex flex-row items-start gap-4">
            {/* Check Icon */}
            <View className="w-5 h-5 flex items-center justify-center mt-2 flex-shrink-0">
              <img src="/check.svg" alt="check" className="w-[19px] h-[16px]"/>
            </View>
            {/* Feature Text */}
            <View className="flex-1">
              <Text className="font-helvetica font-bold text-[20px] leading-[38px] text-black">
                Competitive, Transparent Shipping Solutions:
              </Text>
              <Text className="font-helvetica font-normal text-[20px] leading-[40px] text-black">
                Despite the premium service, FULFILX ensures that shipping costs remain competitive and transparent, allowing luxury brands to offer their clients clear, upfront pricing without hidden fees. This transparency is crucial in maintaining the trust and confidence of luxury shoppers.
              </Text>
            </View>
          </View>

        </View>
      </View>

      {/* Left Column - Image - Now on RIGHT side */}
      <View className="w-[600px] flex-shrink-0">
        <View 
          className="w-[600px] h-[760px] rounded-[30px] bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/shipper.png)',
            backdropFilter: 'blur(12.5px)'
          }}
        />
      </View>
    </View>
  </View>
</View>
{/* Bespoke Solutions Section - Image left, Content right, No Background */}
<View className="relative z-20 bg-white py-20">
  <View className="max-w-[1393px] mx-auto px-4">
    
    {/* Badge */}
    <View className="flex flex-row justify-center items-center px-11 py-4 bg-[#C10016] bg-opacity-10 rounded-[120px] w-[320px] mb-6 ml-[648px]">
      <Text className="font-helvetica font-medium text-[16px] leading-[40px] tracking-[0.2em] uppercase text-[#C10016]">
        Bespoke Solutions
      </Text>
    </View>

    <View className="flex flex-row items-start gap-16">
      
      {/* Image - LEFT side */}
      <View className="w-[600px] flex-shrink-0">
        <View 
          className="w-[600px] h-[760px] rounded-[30px] bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/laptop.png)',
            backdropFilter: 'blur(12.5px)'
          }}
        />
      </View>

      {/* Content - RIGHT side */}
      <View className="flex-1 max-w-[709px]">
        
        {/* Main Title */}
        <Text className="font-helvetica font-bold text-[54px] leading-[68px] tracking-tight text-black mb-6">
          Seamless E-commerce Platform <Text className="text-[#C10016]">Integrations</Text>
        </Text>

        {/* Description */}
        <Text className="font-helvetica font-normal text-[22px] leading-[44px] text-black mb-12">
          In the digital age, a seamless online shopping experience is paramount. FULFILX integrates effortlessly with leading e-commerce platforms, automating the fulfillment process and ensuring that your luxury goods are managed with the same level of sophistication and precision that defines your brand.
        </Text>

        {/* Features List */}
        <View className="">
          
          {/* Feature 1 */}
          <View className="flex flex-row items-start gap-4 mb-12">
            {/* Check Icon */}
            <View className="w-5 h-5 flex items-center justify-center mt-2 flex-shrink-0">
              <img src="/check.svg" alt="check" className="w-[19px] h-[16px]"/>
            </View>
            {/* Feature Text */}
            <View className="flex-1">
              <Text className="font-helvetica font-bold text-[20px] leading-[38px] text-black">
                Real Time Inventory & Order Management:
              </Text>
              <Text className="font-helvetica font-normal text-[20px] leading-[40px] text-black">
                Our integrations provide luxury brands with real-time insights into
inventory levels and order statuses, enabling effective management of your
online presence. This system ensures that your stock is accurately reflected
on your website, avoiding over-selling and under-stocking scenarios.
              </Text>
            </View>
          </View>

          {/* Feature 2 */}
          <View className="flex flex-row items-start gap-4">
            {/* Check Icon */}
            <View className="w-5 h-5 flex items-center justify-center mt-2 flex-shrink-0">
              <img src="/check.svg" alt="check" className="w-[19px] h-[16px]"/>
            </View>
            {/* Feature Text */}
            <View className="flex-1">
              <Text className="font-helvetica font-bold text-[20px] leading-[38px] text-black">
                Enhancing the Luxury Experience Online:
              </Text>
              <Text className="font-helvetica font-normal text-[20px] leading-[40px] text-black">
                 By streamlining the logistics behind your e-commerce operations,
FULFILX not only enhances operational efficiency but also elevates the overall
customer experience. From personalized shopping journeys to impeccable
delivery, we ensure that every interaction with your brand online is an extension
of its luxury identity.
              </Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  </View>
</View>
{/* Conclusion Section */}
<View className="relative z-20 bg-white py-20">
          {/* Background */}
  <View className="absolute inset-0 z-0">
    <img 
      src="/bg.png"
      alt="Background pattern"
      className="w-full h-full object-cover"
    />
  </View>
  <View className="w-full max-w-[1296px] mx-auto px-4">
    
    {/* Heading */}
    <View className="w-full max-w-[1296px] mx-auto mb-8">
      <Text className="font-helvetica font-bold text-[60px] leading-[80px] text-black text-left">
        Conclusion
      </Text>
    </View>

    {/* Paragraph */}
    <View className="w-full max-w-[1296px] mx-auto">
      <Text className="font-helvetica font-normal text-[22px] leading-[44px] text-black text-left">
        In the luxury fulfillment domain, where expectations are unparalleled, FULFILX offers a service that goes beyond mere logistics. We provide an elegant, efficient, and exclusive fulfillment solution that mirrors the exceptional quality of your luxury goods. Partnering with FULFILX means entrusting your brand’s reputation to a team that understands the intricacies of luxury service, ensuring that your products are not just delivered but presented in a manner befitting their stature.      
        </Text>
    </View>
        <View className="w-full max-w-[1296px] mx-auto pt-10">
      <Text className="font-helvetica font-normal text-[22px] leading-[44px] text-black text-left">
        Elevate your luxury brand with FULFILX’s fulfillment services and offer your clients an unrivaled experience that begins the moment they place an order.      
        </Text>
    </View>
    
  </View>
</View>

        {/* Rest of your content sections below */}
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
        
        <Footer/>
      </ScrollView>
    </>
    );
}