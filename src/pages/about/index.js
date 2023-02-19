
import { Box,Heading,Flex,Image ,Text} from "@chakra-ui/react"
import Navbar from "@/app/NavBar"
import { ChakraProvider } from "@chakra-ui/react"
export default function About (){
    return (
        <>
        <ChakraProvider>
        <Navbar/>
        <Box  bg="#BFA8C1" h={"100vh"}>
       <Box textAlign={"center"} width={"80%"} height={"70vh"} mx="auto" pt="13vh">
       <Flex direction={{base:"column",md:"row"}} justifyContent="space-evenly" alignItems={"center"}>
        
        <Image src="/dummy.jpg" h={"200px"} w={"200px"} borderRadius="50%"/>
        <Box width={{base:"100%",md:"60%"}} mt="20px"  textAlign={"start"}>
        <Heading>Malik Usama Bin Nusrat</Heading> 
        <Text fontSize='22px' textAlign={"justify"}>I build this todo app in next.js with Chakra Ui. 
        I enroll web 3 and metaverse course in PIAIC. I'm MERN stack developer. 
        Currently i am working as a react.js developer at software company.</Text>
        </Box>
        </Flex>
       </Box>
       </Box>
       </ChakraProvider>
       </>
    )
}