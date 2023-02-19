"use client"
// import styles from './page.module.css'
import { ChakraProvider } from '@chakra-ui/react'
// const inter = Inter({ subsets: ['latin'] })
import About from "./TodoApp"
import Navbar from "./NavBar"
export default function Home() {
  return (
    <>
    <ChakraProvider>
    <Navbar/>
    <About/>
    </ChakraProvider>
    </>
  )
}
