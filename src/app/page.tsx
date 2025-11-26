import Features from "../components/features";
import HeroSection from "../components/heroSection";
import ReliableServices from "../components/reliableServices";
import Services from "./services/page";
import Testimonials from "../components/testimonials";
import ThankYouPage from "../components/thankyouPage";
import WhyChooseUs from "../components/whychooseUs";


export default function Page (){
  return(
    <>
    <HeroSection />
    <Features />
     <Services /> 
  
    <WhyChooseUs />
    <Testimonials />
    <ReliableServices />
    <ThankYouPage />
    </>
  )
}