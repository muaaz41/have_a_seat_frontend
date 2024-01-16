import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { LucideLink } from "lucide-react";
import LinkDialogue from "../linkDialogue";

const LinkPageDialogue = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-purple-600 mt-4 mx-auto">
            <LucideLink className="mr-2 h-4 w-4" />
            Link Accounts
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[605px]">
          <DialogHeader>
            <DialogTitle>Link Accounts</DialogTitle>
            <DialogDescription>
              Make sure to connect your accounts before reservation
            </DialogDescription>
          </DialogHeader>
          <LinkDialogue />
          <DialogFooter>
            {/* <Button className="w-24 text-md">Link</Button> */}
            <DialogClose asChild>
              <Button className="w-24 text-md">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LinkPageDialogue;
