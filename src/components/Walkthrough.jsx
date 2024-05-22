"use client";
import React, { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Button,
  Box,
  Input,
  VStack,
  ButtonGroup,
} from '@chakra-ui/react';

export default function WalkthroughPopover() {

  const initialFocusRef = React.useRef();
  const [tasks, setTasks] = useState([
    { label: 'Setup Username', completed: false, value: '' },
    { label: 'Setup recovery email', completed: false, value: '' },
    { label: 'Add phone number', completed: false, value: '' },
    { label: 'Add a bio', completed: false, value: '' },
  ]);
  const [step, setStep] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const newTasks = tasks.map((task, i) =>
      i === step ? { ...task, completed: true, value: inputValue } : task
    );
    setTasks(newTasks);
    setInputValue('');
    if (step < tasks.length - 1) {
      setStep(step + 1);
    } else {
      setUpdateMessage('Details updated successfully!');
    }
  };


  return (
    <Popover initialFocusRef={initialFocusRef} placement='bottom' closeOnBlur={false}>
      <PopoverTrigger>
        <Button className="bg-blue-500 text-black border-solid border-2 border-black rounded-md p-2">To-Do List</Button>
      </PopoverTrigger>
      <PopoverContent className="border-solid border-2 border-black rounded-md bg-sky-400 ml-2 p-2 w-200">
        <PopoverHeader className="pt-4 font-bold border-0 text-black">
          Still to complete...
        </PopoverHeader>
        <PopoverArrow className="bg-light-blue-500" />
        <PopoverCloseButton className="absolute top-2 right-2 text-red-500" display={updateMessage ? 'block' : 'none'} />
        <PopoverBody>
          {updateMessage ? (
            <Box className="text-black">{updateMessage}</Box>
          ) : (
            <VStack align='start'>
              <Box className="text-black">{tasks[step].label}</Box>
              <Input
                value={inputValue}
                onChange={handleInputChange}
                placeholder={`${tasks[step].label.toLowerCase()}`}
                className="text-black bg-white placeholder-gray-500 border-solid border-2 border-black p-1 rounded-md"
              />
              <Button className="bg-green-500 border-solid border-2 border-black text-black mt-2  rounded-md p-1" onClick={handleSubmit}>
                Submit
              </Button>
            </VStack>
          )}
        </PopoverBody>
        <PopoverFooter className="border-0 flex items-center justify-between pb-4 text-black">
          <Box className="text-sm">
            Step {step + 1} of {tasks.length}
          </Box>
          <ButtonGroup size='sm'>
          
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

 