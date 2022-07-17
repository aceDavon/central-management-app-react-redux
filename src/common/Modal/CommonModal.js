import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid goldenrod",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ data, sx = style }) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={sx}>{data}</Box>
      </Modal>
    </div>
  );
}
