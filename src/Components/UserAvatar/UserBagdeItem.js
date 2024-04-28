import { CloseIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import React from 'react'

const UserBagdeItem = ({user , handleFunction}) => {
  return (
    
    <Box
    px={2}
    py={2}
    borderRadius="lg"
    m={1}
    mt={2}
    mb={1}
    variant="solid"
    fontSize={12}
    bg="purple"
    color="white"
    display="flex"
    alignItems="center"
    gap="5px"
    cursor="pointer"
    onClick={handleFunction}
    > 
    {user.name}
    <CloseIcon/>
    </Box>
  )
}

export default UserBagdeItem
