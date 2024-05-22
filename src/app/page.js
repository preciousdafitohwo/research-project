import PopoverComponent from "@/components/Popover";
import WalkthroughPopover from "@/components/Walkthrough";

export default function Home (){
  return ( 
    <div className="main-container">
      
      <div className="trigger">
      <h2>Example 1</h2>
      <PopoverComponent/>
      </div>
      <div className="walkthrough">
        <h2>Example 2</h2>
      <WalkthroughPopover/>
      </div>
    </div>
  )
}