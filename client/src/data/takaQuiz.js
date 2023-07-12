import { GiBowman, GiSurferVan, GiCampingTent, GiCampfire, GiSailboat, GiBoatFishing, GiMicroscope, GiSpeedBoat, GiHelicopter, GiScubaMask, GiHarborDock } from "react-icons/gi";
import { MdRowing, MdMeetingRoom } from "react-icons/md";
import { FaUserPlus, FaUser, FaClock, FaBolt, FaPeopleCarry, FaTrailer, FaTruckPickup, FaTruck, FaBriefcase, FaSuitcaseRolling, FaSuitcase } from "react-icons/fa";
import { FaSailboat } from "react-icons/fa6"
import { TbBackpackOff, TbBus, TbEngine, TbEngineOff } from "react-icons/tb";
import { BsFillPatchQuestionFill, BsFillBoxSeamFill } from "react-icons/bs";
import { BiDollar, BiSolidCarGarage } from "react-icons/bi"
import { PiGarageFill } from "react-icons/pi";


export const takaQuiz = [
    {
        title: "What will you do with your Takacat?",
        content:
            "Discover the exciting outdoor activities you can enjoy with the versatile Takacat inflatable dinghy.",
        type: "checkbox",
        key: "useCase",
        index: 1,
        questions: [
            {
                name: "RV",
                value: "RV",
                title: "useCase",
                icon: <GiSurferVan />
            },
            {
                name: "Tenting",
                value: "Tenting",
                title: "useCase",
                icon: <GiCampingTent />
            },
            {
                name: "Camping",
                value: "Camping",
                title: "useCase",
                icon: <GiCampfire />
            },
            {
                name: "Search and rescue",
                value: "Search and rescue",
                title: "useCase",
                icon: <GiHelicopter />
            },
            {
                name: "day boat",
                value: "day boat",
                title: "useCase",
                icon: <GiSailboat />
            },
            {
                name: "marine research",
                value: "marine research",
                title: "useCase",
                icon: <GiMicroscope />
            },
            {
                name: "tender",
                value: "tender",
                title: "useCase",
                icon: <GiSpeedBoat />
            },
            {
                name: "fishing",
                value: "fishing",
                title: "useCase",
                icon: <GiBoatFishing />
            },
            {
                name: "scuba/snorkel/swim",
                value: "scuba/snorkel/swim",
                title: "useCase",
                icon: <GiScubaMask />
            },
            {
                name: "hunting",
                value: "hunting",
                title: "useCase",
                icon: <GiBowman />
            },

        ]
    },
    {
        title: "How many people will you have on board?",
        content:
            "Determine the capacity needed to accommodate your adventurous crew during thrilling outings.",
        type: "radio",
        key: "capacity",
        index: 2,
        questions: [
            {
                value: "3 people / 793 lbs",
                name: "3 people / 793 lbs",
                title: "capacity",
                icon: <div style={{ flexDirection: "row" }}><FaUser /><FaUser /><FaUser /></div>
            },
            {
                value: "4 people / 809 lbs",
                name: "4 people / 809 lbs",
                title: "capacity",
                icon: <div style={{ flexDirection: "row" }}><FaUser /><FaUser /><FaUser /><FaUser /></div>
            },
            {
                value: "5 people / 1135 lbs",
                name: "5 people / 1135 lbs",
                title: "capacity",
                icon: <div style={{ flexDirection: "row" }}><FaUser /><FaUser /><FaUser /><FaUser /><FaUser /></div>
            },
            {
                value: "6 people / 1410 lbs",
                name: "6 people / 1410 lbs",
                title: "capacity",
                icon: <div style={{ flexDirection: "row" }}><FaUser /><FaUser /><FaUser /><FaUser /><FaUser /><FaUser /></div>
            },
            {
                value: "7 people / 1576 lbs",
                name: "7 people / 1576 lbs",
                title: "capacity",
                icon: <div style={{ flexDirection: "row" }}><FaUser /><FaUser /><FaUser /><FaUser /><FaUser /><FaUser /><FaUser /></div>

            },
            {
                value: "8 people / 1874 lbs",
                name: "8 people / 1874 lbs",
                title: "capacity",
                icon: <div style={{ flexDirection: "row" }}><FaUser /><FaUser /><FaUser /><FaUser /><FaUser /><FaUser /><FaUser /><FaUser /></div>
            },
            {
                value: "",
                name: "I don't know",
                title: "capacity",
                icon: <FaUserPlus />
            }
        ]
    },
    {
        title: "Do you have an outboard motor?",
        content:
            "Determine if you already have an outboard motor or need to acquire one, specifying the horsepower if applicable.",
        type: "radio",
        key: "ifOutboard",
        index: 3,
        questions: [
            {
                value: true,
                name: "Yes, I have an outboard",
                title: "ifOutboard",
                icon: <TbEngine />
            },
            {
                value: false,
                name: "No, I don't have an outboard",
                title: "ifOutboard",
                icon: <TbEngineOff />
            },
            {
                value: false,
                name: "I plan to purchase an outboard",
                title: "ifOutboard",
                icon: <div style={{ flexDirection: "row" }}><BiDollar /><TbEngine /></div>
            },
            {
                value: true,
                name: "I prefer rowing/paddling",
                title: "ifOutboard",
                icon: <MdRowing />
            },
            {
                value: false,
                name: "I'm not sure yet",
                title: "ifOutboard",
                icon: <BsFillPatchQuestionFill />
            },
            {
                value: false,
                name: "I will rent/borrow an outboard",
                title: "ifOutboard",
                icon: <div style={{ flexDirection: "row" }}><FaClock /><TbEngine /></div>
            }
        ]
    },
    {
        title: "How much HP do you require?",
        content:
            "Determine the horsepower requirement for your Takacat's outboard motor, ensuring it aligns with your desired performance and activities.",
        type: "radio",
        key: "HP",
        index: 4,
        questions: [
            {
                value: "8 HP",
                name: "8 HP",
                title: "HP",
                icon: <div style={{ flexDirection: "row" }}><FaBolt /></div>
            },
            {
                value: "10 HP",
                name: "10 HP",
                title: "HP",
                icon: <div style={{ flexDirection: "row" }}><FaBolt /><FaBolt /></div>
            },
            {
                value: "15 HP",
                name: "15 HP",
                title: "HP",
                icon: <div style={{ flexDirection: "row" }}><FaBolt /><FaBolt /><FaBolt /></div>
            },
            {
                value: "20 HP",
                name: "20 HP",
                title: "HP",
                icon: <div style={{ flexDirection: "row" }}><FaBolt /><FaBolt /><FaBolt /><FaBolt /></div>
            },
            {
                value: "25 HP",
                name: "25 HP",
                title: "HP",
                icon: <div style={{ flexDirection: "row" }}><FaBolt /><FaBolt /><FaBolt /><FaBolt /><FaBolt /></div>
            },
            {
                value: "30 HP",
                name: "30 HP",
                title: "HP",
                icon: <div style={{ flexDirection: "row" }}><FaBolt /><FaBolt /><FaBolt /><FaBolt /><FaBolt /><FaBolt /></div>
            },
            {
                value: "",
                name: "I'm not sure",
                title: "HP",
                icon: <BsFillPatchQuestionFill />
            }
        ]
    },
    {
        title: "How do you plan on transporting it?",
        content:
            "Explore the convenient transportation methods for taking your Takacat on outdoor expeditions with ease.",
        type: "radio",
        key: "weight",
        index: 5,
        questions: [
            {
                name: "Carrying it by hand",
                value: "55 lbs",
                title: "weight",
                icon: <FaPeopleCarry />
            },
            {
                name: "Using a roof rack on my vehicle",
                value: "64 lbs",
                title: "weight",
                icon: <BiSolidCarGarage />
            },
            {
                name: "Using a boat trailer",
                value: "68 lbs",
                title: "weight",
                icon: <FaTrailer />
            },
            {
                name: "Transporting it inside a larger vessel",
                value: "89 lbs",
                title: "weight",
                icon: <TbBus />
            },
            {
                name: "Utilizing a pickup truck bed",
                value: "111 lbs",
                title: "weight",
                icon: <FaTruckPickup />
            },
            {
                name: "I have access to heavier-duty transportation",
                value: "135 lbs",
                title: "weight",
                icon: <FaTruck />
            },
            {
                name: "Size doesn't matter—I won't be transporting it",
                value: "",
                title: "weight",
                icon: <FaSailboat />
            }
        ]
    },
    {
        title: "Will you transport lots of gear?",
        content:
            "Consider the gear-carrying capabilities for your outdoor adventures and ensure your Takacat can accommodate all your equipment.",
        type: "radio",
        key: "widthHeight",
        index: 6,
        questions: [
            {
                name: "No, I won't carry much gear",
                value: "8’ 6” length by 5’ 1” width",
                title: "widthHeight",
                icon: <TbBackpackOff />
            },
            {
                name: "Yes, I will carry minimal gear",
                value: "9’ 10” length by 5’ 1” width",
                title: "widthHeight",
                icon: <FaBriefcase />
            },
            {
                name: "Yes, I will carry moderate gear",
                value: "11’ 2” length by 5’ 5” width",
                title: "widthHeight",
                icon: <FaSuitcaseRolling />
            },
            {
                name: "Yes, I will carry substantial gear",
                value: "12’ 6” length by 5’ 5” width",
                title: "widthHeight",
                icon: <FaSuitcase />
            },
            {
                name: "Yes, I will carry heavy equipment",
                value: "13’ 9” length by 6’ 1” width",
                title: "widthHeight",
                icon: <BsFillBoxSeamFill />
            },
            {
                name: "Yes, I will carry heavy equipment and a lot of it",
                value: "15’ 1” length by 6’ 1” width",
                title: "widthHeight",
                icon: <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}><BsFillBoxSeamFill /><BsFillBoxSeamFill /><BsFillBoxSeamFill /></div>
            },
            {
                name: "I'm not sure yet about the amount of gear",
                value: "",
                title: "widthHeight",
                icon: <BsFillPatchQuestionFill />
            }
        ]
    },
    {
        title: "Where will you store your Takacat?",
        content:
            "Decide whether you will store the Takacat deflated or keep it inflated for convenient storage.",
        type: "radio",
        key: "storage",
        index: 7,
        questions: [
            {
                name: "Store it inflated on the dock/marina",
                value: "Store it inflated on the dock/marina",
                title: "storage",
                icon: <GiHarborDock />
            },
            {
                name: "Store it inflated on a larger vessel",
                value: "Store it inflated on a larger vessel",
                title: "storage",
                icon: <FaSailboat />
            },
            {
                name: "Store it deflated in a garage or shed",
                value: "Store it deflated in a garage or shed",
                title: "storage",
                icon: <PiGarageFill />
            },
            {
                name: "Store it deflated in a basement or storage room",
                value: "Store it deflated in a basement or storage room",
                title: "storage",
                icon: <MdMeetingRoom />
            },
            {
                name: "Store it on a boat trailer",
                value: "Store it on a boat trailer",
                title: "storage",
                icon: <FaTrailer />
            },
            {
                name: "Store it on a rooftop rack",
                value: "Store it on a rooftop rack",
                title: "storage",
                icon: <BiSolidCarGarage />
            },
            {
                name: "I'm not sure where I'll store it",
                value: "I'm not sure where I'll store it",
                title: "storage",
                icon: <BsFillPatchQuestionFill />
            },
        ]
    }
];
