import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  ModalOverflow,
  Sheet,
  Stack,
  Typography,
  Button,
} from "@mui/joy";
import React, { useState, useEffect } from "react";

const RevedUpRepairs = () => {
  const [open, setOpen] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(quantity * cost);
  }, [quantity, cost]);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => setOpen(false)}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ModalOverflow>
        <ModalDialog
          sx={{
            background: "white",
            p: 3,
            border: 1,
            borderColor: "grey.300",
            boxShadow: 3,
            width: "80vw",
            maxWidth: "800px",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              borderRadius: "md",
              p: 2,
              boxShadow: "lg",
            }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={2}
            >
              Reved Up Repairs
            </Typography>

            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Item</FormLabel>
              <Input defaultValue="Wind shield" />
            </FormControl>

            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Description</FormLabel>
              <Input defaultValue="Cracked windshield replacement" />
            </FormControl>

            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Quantity</FormLabel>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Cost</FormLabel>
                <Input
                  type="number"
                  value={cost}
                  onChange={(e) => setCost(Number(e.target.value))}
                />
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <FormLabel>Total Amount</FormLabel>
                <Input type="number" value={totalAmount} readOnly />
              </FormControl>
            </Stack>

            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button variant="outlined" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="solid" onClick={() => setOpen(false)}>
                Save
              </Button>
            </Stack>
          </Sheet>
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  );
};

export default RevedUpRepairs;
