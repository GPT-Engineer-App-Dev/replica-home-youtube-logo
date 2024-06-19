import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex justify="space-between" align="center" mb={4}>
        <Image src="/logo.svg" alt="Logo" boxSize="50px" />
        <Text fontSize="2xl" fontWeight="bold">YouTube Replica</Text>
      </Flex>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Text mt={4}>Video 1</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Text mt={4}>Video 2</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Text mt={4}>Video 3</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;