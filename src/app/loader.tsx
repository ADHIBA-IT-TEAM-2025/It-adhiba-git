// components/Loader.js
import Image from 'next/image';
import loaderGif from '../assets/Animation - 1741936606753.gif'; // Replace with your loading GIF

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <Image src={loaderGif} alt="Loading..." width={100} height={100} />
    </div>
  );
};

export default Loader;
