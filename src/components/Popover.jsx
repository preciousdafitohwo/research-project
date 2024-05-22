import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";


export default function PopoverComponent (){
    return (
        <div>
            <Popover>
  <PopoverTrigger>
    <Button className="bg-blue-500 text-black border-solid border-2 border-black rounded-md p-2">Read More...</Button>
  </PopoverTrigger>
  <PopoverContent className="border-solid border-2 border-black rounded-md bg-sky-400 ml-2 p-2 content ">
    <PopoverArrow />
    <PopoverCloseButton className="text-red-600"/>
    <PopoverHeader className="text-center text-red-600 font-bold underline">Warning!</PopoverHeader>
    <PopoverBody>Clicking on this link will redirect you to another site, are you sure you want to continue?
    <Button className="bg-green-600 border-solid border-1 rounded-md p-1 font-bold border-black m-1 "><Link href="https://unsplash.com/">Yes</Link></Button>
    </PopoverBody>
  </PopoverContent>
</Popover>
        </div>
    )
}