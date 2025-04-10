import Image from 'next/image';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner'; // Import the Banner component
import Features from '@/components/Features';
import UploadProcess from '@/components/UploadProcess';
import UserReviews from '@/components/UserReviews';
import FAQSection from '@/components/FAQSection';


export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner /> {/* Use the Banner component */}
      <Features />
      <UploadProcess />
      <UserReviews />
      <FAQSection />
    </div>
  );
}