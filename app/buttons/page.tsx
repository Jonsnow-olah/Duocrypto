import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
    return (
        <div className="text-green-500">
        <Button>
          DEFAULT
        </Button>
        
        <Button variant="primary">
          Primary
        </Button>
  
        <Button variant="primaryOutline">
          Outline
        </Button>
  
        <Button variant="secondary">
          Secondary
        </Button>
  
        <Button variant="secondaryOutline">
          secondary Outline
        </Button>
  
        <Button variant="danger">
          Danger
        </Button>
  
        <Button variant="dangerOutline">
          danger Outline
        </Button>
  
        <Button variant="super">
          Super
        </Button>
  
        <Button variant="superOutline">
          Super Outline
        </Button>
  
        <Button variant="ghost">
          Ghost
        </Button>
  
        <Button variant="sidebar">
          Sidebar
        </Button>
  
        <Button variant="sidebarOutline">
          Sidebar Outline
        </Button>
      </div>
    );
};

export default ButtonsPage;