import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const ActionsModal = ({ children, title, desc = null, onClick, disabled }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h2>{title}</h2>
            </DialogTitle>
          </DialogHeader>
          {desc && <DialogDescription>{desc}</DialogDescription>}
          <DialogFooter>
            <Button disabled={disabled} type="button" onClick={onClick}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default ActionsModal;
