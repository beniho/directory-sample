"use client";

import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardProps extends BoxProps {
  children: ReactNode;
}

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <Box
      bg="white"
      shadow="sm"
      rounded="md"
      p={4}
      _dark={{ bg: "gray.800" }}
      {...props}
    >
      {children}
    </Box>
  );
};
