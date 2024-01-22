import React, { useState } from "react";
import {
//   InputGroup,
//   InputLeftAddon,
//   Select,
//   Input,
  Box,
  Icon,
  Text,
} from "@chakra-ui/react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function ActivateAccountForm1() {
  const [value, setValue] = useState();
  return (
    <Box>
      <Box display={"flex"} gap={5}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width="48px"
          height={"48px"}
          borderRadius={"50%"}
          bgColor={"rgba(238, 255, 246, 1)"}
        >
          <Icon width="23px" height="23px" viewBox="0 0 23 23" fill={"none"}>
            <path
              d="M14.0499 5C15.0267 5.19057 15.9243 5.66826 16.628 6.37194C17.3317 7.07561 17.8094 7.97326 17.9999 8.95M14.0499 1C16.0792 1.22544 17.9715 2.13417 19.4162 3.57701C20.8608 5.01984 21.7719 6.91101 21.9999 8.94M20.9999 16.92V19.92C21.0011 20.1985 20.944 20.4742 20.8324 20.7293C20.7209 20.9845 20.5572 21.2136 20.352 21.4019C20.1468 21.5901 19.9045 21.7335 19.6407 21.8227C19.3769 21.9119 19.0973 21.9451 18.8199 21.92C15.7428 21.5856 12.7869 20.5341 10.1899 18.85C7.77376 17.3147 5.72527 15.2662 4.18993 12.85C2.49991 10.2412 1.44818 7.27099 1.11993 4.18C1.09494 3.90347 1.12781 3.62476 1.21643 3.36162C1.30506 3.09849 1.4475 2.85669 1.6347 2.65162C1.82189 2.44655 2.04974 2.28271 2.30372 2.17052C2.55771 2.05833 2.83227 2.00026 3.10993 2H6.10993C6.59524 1.99522 7.06572 2.16708 7.43369 2.48353C7.80166 2.79999 8.04201 3.23945 8.10993 3.72C8.23656 4.68007 8.47138 5.62273 8.80993 6.53C8.94448 6.88792 8.9736 7.27691 8.89384 7.65088C8.81408 8.02485 8.6288 8.36811 8.35993 8.64L7.08993 9.91C8.51349 12.4135 10.5864 14.4864 13.0899 15.91L14.3599 14.64C14.6318 14.3711 14.9751 14.1858 15.3491 14.1061C15.723 14.0263 16.112 14.0555 16.4699 14.19C17.3772 14.5286 18.3199 14.7634 19.2799 14.89C19.7657 14.9585 20.2093 15.2032 20.5265 15.5775C20.8436 15.9518 21.0121 16.4296 20.9999 16.92Z"
              stroke="#0B4522"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Icon>
        </Box>
        <Box>
          <Text fontSize={16} fontWeight0={500} mb={"4px"}>
            Business Info
          </Text>
          <Text
            fontSize={14}
            fontWeight={400}
            color={"rgba(102, 112, 133, 1)"}
            mb={"4px"}
          >
            Provide the necessary information for efficient account management
          </Text>
        </Box>
      </Box>
      <Box>
        <Box>
            <PhoneInput
          international
          placeholder="Enter phone number"
          countryCallingCodeEditable={false}
          value={value}
          countrySelectProps={{ unicodeFlags: false }}
          onChange={setValue}
          defaultCountry="IN"
            />
        </Box>
      </Box>
    </Box>
  );
}

export default ActivateAccountForm1;


