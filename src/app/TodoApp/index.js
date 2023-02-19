"use client";
import { Box, filter, Flex } from "@chakra-ui/react";
import { Input, Button, Text, Checkbox, CheckboxGroup,Heading } from "@chakra-ui/react";
import { useState,useEffect, Fragment } from "react";

export default function About() {
 const getLocalStorageData=()=>{
  let list=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[]
  return list;
}

  const [todoData, setTodoData] = useState(getLocalStorageData);
  const [data, setData] = useState("");

  const AddToData = () => {
    setTodoData((prev) => [...prev, data]);
    setData("");
    console.log(todoData);
  };

  const DeleteItem=(ele)=>{
 let filterData=todoData?.filter((e)=>e!==ele)
 setTodoData(filterData);
  }

  const EditItem=(ele)=>{
    setData(ele)
    let data_=todoData?.filter((elem)=>ele!=elem)
    setTodoData(data_)
  }
const StatusChanged=(e)=>{
  console.log(e.target.checked)
  console.log(e.target.value)
}
  useEffect(()=>{
   localStorage.setItem("todo",JSON.stringify(todoData))
  },[todoData])
  return (
    <Box bg={"#02718F"} h="90vh" border={"1px solid yellow"}  >
      <Heading pt="5%" textAlign={"center"} color="orange">Todo App</Heading>
      <Box width={{base:"90%",md:"60%",lg:"40%"}} mx="auto" pt="5%" >
        <Flex justifyContent={"space-between"}>
          <Input
            size="md"
            p={"20px"}
            width={"70%"}
            placeholder="Enter Data..."
            color={"white"}
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <Button colorScheme="green" size="md" onClick={AddToData}>
            Add
          </Button>
        </Flex>
      </Box>
      <Box width={{base:"90%",md:"60%",lg:"40%"}}mx="auto" mt="3%">
        {todoData?.map((ele, i) => {
          return (
            <Fragment key={i}>
              <Flex
                justifyContent="space-between"
                width={"100%"}
                fontSize="40px"
                bg="gray"
                p={'10px'}
                borderRadius="10px"
              >
                <Checkbox onChange={StatusChanged} color={"white"} size="lg" colorScheme='green' value={ele} >
                  {ele}
                </Checkbox>
                <Flex>
                  <Button mr="20px"  colorScheme="teal" width={"60%"} onClick={()=>EditItem(ele)}>Edit</Button>
                  <Button  colorScheme="red"  width={"60%"} onClick={()=>DeleteItem(ele)} >Delete</Button>
                </Flex>
              </Flex>
              <br />
            </Fragment>
          );
        })}
      </Box>
    </Box>
  );
}
