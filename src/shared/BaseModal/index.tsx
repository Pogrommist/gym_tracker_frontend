import { Dialog, DialogTitle } from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: any
}

const BaseModal = (props: SimpleDialogProps) => {
  const { onClose, open, children,  } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
        {
          children
        }
    </Dialog>
  );
}

export default BaseModal