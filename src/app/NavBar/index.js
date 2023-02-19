import React from 'react'
import Link from 'next/link'
import { Box,Flex } from '@chakra-ui/react'
export default function Navbar() {
  return (
    <>
    <Box bg="#094C71" color="white" p="20px" boxShadow={"0 8px 6px -6px black"}>
     <Flex justifyContent="center">
        <Box fontSize="30px" mr="20px">
      <Link  href="/">Home</Link> 
      </Box> 
      <Box fontSize="30px">
      <Link  href="/about">About</Link> 
      </Box>
      </Flex>
        </Box> 
        </>
  )
}
