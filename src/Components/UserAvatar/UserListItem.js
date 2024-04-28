import React from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";

const UserListItem = ({ user, handleFunction }) => {

  return (
    <>
      <Box
        onClick={handleFunction}
        cursor="pointer"
        bg="#E8E8E8"
        _hover={{
          background: "#795ac2",
          color: "white",
        }}
        // overflowX="hidden"
        w="100%"
        display="flex"
        alignItems="center"
        color="black"
        px={2}
        py={2}
        mb={2}
        mt={2}
        borderRadius="lg"
      >
        <Avatar
          mr={2}
          size="md"
          cursor="pointer"
          name={user.name}
          src={user.pic}
        />
        <Box>
          <Text><strong>{user.name}</strong></Text>
          <Text fontSize="x5">
            <b>Email : </b>
            {user.email}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default UserListItem;
