import React from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
  Heading,
  Avatar,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

const Dashboard = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="gray.100" minH="100vh" p={4}>
      {/* Top Bar */}
      <Flex justify="space-between" align="center" bg="white" p={4} borderRadius="md" shadow="sm">
        <Heading size="md" color="purple.600">
          Immverse AI
        </Heading>
        <Avatar name="Avishkar Watmode" size="sm" />
      </Flex>

      {/* Main Grid */}
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 3fr' }}
        gap={6}
        mt={6}
      >
        {/* Sidebar */}
        <GridItem>
          <VStack
            align="stretch"
            spacing={4}
            bg="white"
            p={4}
            borderRadius="md"
            shadow="sm"
          >
            <Text fontWeight="bold" color="purple.600">
              Dashboard
            </Text>
            <Text>My Journey</Text>
            <Text>My Courses</Text>
            <Text>Progress</Text>
            <Text>DIY</Text>
            <Text>Certificates</Text>
            <Text>Settings</Text>
            <Text>Logout</Text>
          </VStack>
        </GridItem>

        {/* Main Content */}
        <GridItem>
          {/* My Journey */}
          <Box
            bg="white"
            p={4}
            borderRadius="md"
            shadow="sm"
          >
            <Flex justify="space-between" align="center">
              <Heading size="md">My Journey</Heading>
              <Avatar name="Avishkar Watmode" size="lg" />
            </Flex>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={4} mt={4}>
              <Box bg="purple.100" p={4} borderRadius="md">
                <Text>Your Target</Text>
                <Text fontWeight="bold" fontSize="lg">
                  A+
                </Text>
              </Box>
              <Box bg="orange.100" p={4} borderRadius="md">
                <Text>Current Grade</Text>
                <Text fontWeight="bold" fontSize="lg">
                  B+
                </Text>
              </Box>
              <Box bg="blue.100" p={4} borderRadius="md">
                <Text>Target Days</Text>
                <Text fontWeight="bold" fontSize="lg">
                  17 Days
                </Text>
              </Box>
              <Box bg="green.100" p={4} borderRadius="md">
                <Text>Daily Challenge</Text>
                <Text fontWeight="bold" fontSize="lg">
                  Completed
                </Text>
              </Box>
            </Grid>
          </Box>

          {/* Learning Levels */}
          <Box
            bg="white"
            p={4}
            borderRadius="md"
            shadow="sm"
            mt={6}
          >
            <Heading size="sm">Learning Levels</Heading>
            <Flex justify="center" mt={4}>
              <Text>Level-2 (progress visualization here)</Text>
            </Flex>
          </Box>

          {/* Learning Path */}
          <Box
            bg="white"
            p={4}
            borderRadius="md"
            shadow="sm"
            mt={6}
          >
            <Heading size="sm">My Learning Path</Heading>
            <VStack align="stretch" mt={4}>
              {['AI Course 1', 'AI Course 2', 'AI Course 3'].map((course, index) => (
                <Flex
                  key={index}
                  justify="space-between"
                  align="center"
                  bg="purple.50"
                  p={4}
                  borderRadius="md"
                >
                  <Text>{course}</Text>
                  <Button colorScheme="purple">Start</Button>
                </Flex>
              ))}
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
