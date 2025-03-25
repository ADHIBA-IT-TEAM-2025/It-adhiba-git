import React from 'react';
import careerImage from '../../../assets/career.png';
import Image from 'next/image';

const CareerPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <Image 
            src={careerImage} 
            className='mx-auto' 
            alt="Career Banner" 
            width={1200} 
            height={400} 
            // style={{ width: '100%', height: 'auto' }}
            />
            <h1>Career Opportunities</h1>
            <p>Explore the exciting career opportunities we have to offer.</p>
        </div>
    );
};

export default CareerPage;

