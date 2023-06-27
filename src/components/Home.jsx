import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "60vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src="https://images.unsplash.com/photo-1639454276085-9f55d2db6570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyeXB0b2N1cnJlbmN5JTIwc21hbGwlMjBwaWN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"bottom"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        πCrypto
      </Text>
    </Box>
  );
};

export default Home;