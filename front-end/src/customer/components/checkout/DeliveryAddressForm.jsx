import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../addressCard/AddressCard";

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const addressData = Object.fromEntries(data.entries());
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 12, lg: 5 }}
          className="border border-gray-300 rounded-e-md shadow-md h-[488px] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b border-gray-300 cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver here
            </Button>
          </div>
        </Grid>
        <Grid size={{ xs: 12, lg: 7 }}>
          <Box className="border rounded-md border-gray-300 shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* First Name */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name" // Correct!
                  />
                </Grid>

                {/* Last Name */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name" // Changed
                  />
                </Grid>

                {/* Address */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="street-address" // Changed
                    multiline
                    rows={4}
                  />
                </Grid>

                {/* City */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="address-level2" // Changed
                  />
                </Grid>

                {/* State */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="address-level1" // Changed
                  />
                </Grid>

                {/* Zip Code */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="postal-code" // Changed
                  />
                </Grid>

                {/* Phone Number */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel" // Changed
                  />
                </Grid>

                {/* Submit Button */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Button
                    sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
