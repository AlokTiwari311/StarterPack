import React from 'react';

const cardsData = [
    {
        title: "Find mentors within your field of expertise.",
        description: "Connect with experienced mentors from different domains in your network. Get your projects reviewed and receive guidance on topics of your choice.",
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        title: "Schedule sessions anytime and anywhere.",
        description: "Once you discover mentors in your domain, check the available date and time and book a session with them. You get timely notifications before the session and ample time to talk to your mentors regarding your queries.",
        imageUrl: "https://via.placeholder.com/300"
    },
    {
        title: "Improve your skills by learning from industry experts.",
        description: "Learn from industry experts, take notes, and receive feedback to upskill and be the best. Gain the latest skills from experienced mentors.",
        imageUrl: "https://via.placeholder.com/300"
    }
];

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="w-[30%] flex flex-col justify-center items-center md:max-w-sm rounded-[16px] overflow-hidden shadow-lg bg-[#2BB17A] py-4 px-8">
            <img className="w-[50%] rounded-[8px]" src={imageUrl} alt="Card" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

const Cards = () => {
    return (
        <div className="flex justify-center items-center flex-col md:flex-row space-x-4 w-full border-2 border-red-500 space-y-4">
            {cardsData.map((card, index) => (
                <Card

                    key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                />
            ))}
        </div>
    );
};

export default Cards;
