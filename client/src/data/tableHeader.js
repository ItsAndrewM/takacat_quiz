import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faWeightHanging, faGauge, faRulerCombined, faCampground } from "@fortawesome/free-solid-svg-icons"
import DinghySvg from "../components/DinghySvg";

export const tableHeader = [
    {
        name: "Product",
        icon: ""
    },
    {
        name: "Activities",
        icon: <FontAwesomeIcon icon={faCampground} />
    },
    {
        name: "Model Number",
        icon: <DinghySvg />
    },
    {
        name: "Capacity/Weight",
        icon: <FontAwesomeIcon icon={faUsers} />
    },
    // {
    //     name: "Onboard Motor"
    // },
    {
        name: "Max Motor Size",
        icon: <FontAwesomeIcon icon={faGauge} />
    },
    {
        // name: "Transportation"
        name: "Weight",
        icon: <FontAwesomeIcon icon={faWeightHanging} />
    },
    // {
    //     name: "Storage"
    // },
    {
        // name: "Gear Capacity"
        name: "Size (inflated)",
        icon: <FontAwesomeIcon icon={faRulerCombined} />
    },

]