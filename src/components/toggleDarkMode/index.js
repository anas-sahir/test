import React from 'react'
import useColor from "../../utils/useColor"
import { Icon } from '@chakra-ui/react'
import { BsFillMoonFill } from "react-icons/bs"
import { RiSunFill } from "react-icons/ri"

export default function ToggleDarkMode() {
    const { toggle, mode } = useColor();
    console.log(mode);
    return (
        <Icon onClick={toggle} zIndex={9}
            as={(mode === "light") ? BsFillMoonFill : RiSunFill}
            color={(mode === "light") ? "gray.700" : "orange.300"}
        >

        </Icon>
    );
}