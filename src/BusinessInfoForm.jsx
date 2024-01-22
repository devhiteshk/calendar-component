import React from "react";
import { GoTag } from "react-icons/go";
import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";

function BusinessInfoForm() {
  return (
    <Box>
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
            <GoTag size={20} color="rgba(11, 69, 34, 1)" />
          </Box>
          <Box>
            <Text fontSize={16} fontWeight0={500}>
              Business Info
            </Text>
            <Text
              fontSize={14}
              fontWeight={400}
              color={"rgba(102, 112, 133, 1)"}
            >
              Provide the necessary information for efficient account management
            </Text>
          </Box>
        </Box>
        <Box mt={"40px"} display={"flex"} flexDir={"column"} gap={"16px"}>
          <Box display={"flex"} justifyContent={"space-between"} gap={"16px"}>
            <FormControl>
              <FormLabel marginBottom={"4px"}>Address Line 1</FormLabel>
              <Input variant="outline" placeholder="Outline" />
            </FormControl>
            <FormControl>
              <FormLabel marginBottom={"4px"}>Address Line 2</FormLabel>
              <Input variant="outline" placeholder="Outline" />
            </FormControl>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} gap={"16px"}>
            <FormControl>
              <FormLabel marginBottom={"4px"}>Zip Code</FormLabel>
              <Input variant="outline" placeholder="Outline" />
            </FormControl>
            <FormControl>
              <FormLabel marginBottom={"4px"}>City</FormLabel>
              <Input variant="outline" placeholder="Outline" />
            </FormControl>
            <FormControl>
              <FormLabel marginBottom={"4px"}>Country</FormLabel>
              <Select placeholder="Select country">
                <option>United Arab Emirates</option>
                <option>Nigeria</option>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default BusinessInfoForm;