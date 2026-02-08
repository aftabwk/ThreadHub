import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelOrder,
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../state/admin/order/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const OrderTable = () => {
  const dispatch = useDispatch();

  const adminOrder = useSelector((store) => store.adminOrder);
  //Status
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };
  useEffect(() => {
    dispatch(getOrders());
  }, [
    adminOrder.confirmed,
    adminOrder.shipped,
    adminOrder.delivered,
    adminOrder.cancelled,
    adminOrder.deleteOrder,
  ]);
  const handleShipedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    console.log("order Shipped", orderId);
    handleClose();
  };
  const handleConfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    console.log("order Confirmed", orderId);
    handleClose();
  };
  const handleCancleOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
    console.log("order Cancled", orderId);
    handleClose();
  };
  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    console.log("order Delivered", orderId);
    handleClose();
  };
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
    console.log("order Delete", orderId);
  };
  console.log("admin orders", adminOrder);
  return (
    <div className="p-5 h-screen overflow-scroll">
      <Card className="mt-2">
        <CardHeader title="All Orders" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Place</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <AvatarGroup sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) => (
                        <Avatar src={orderItem.product.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.orderItems.map((orderItem) => (
                      <p key={orderItem.id}>{orderItem.product.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">{item.id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <div>
                      <p>
                        {item.shippingAddress.city},{" "}
                        {item.shippingAddress.state}
                      </p>
                      <p>
                        {item.shippingAddress.streetAddress},{" "}
                        {item.shippingAddress.zipCode},{" "}
                        {item.shippingAddress.mobile}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell align="left">{item.totalItems}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-sm 
                        ${
                          item.orderStatus === "CONFIRMED"
                            ? "bg-green-500"
                            : item.orderStatus === "SHIPPED"
                              ? "bg-blue-500"
                              : item.orderStatus === "DELIVERED"
                                ? "bg-purple-500"
                                : item.orderStatus === "CANCELLED"
                                  ? "bg-red-500"
                                  : item.orderStatus === "PLACED"
                                    ? "bg-yellow-500"
                                    : "bg-gray-500"
                        }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        background: "green",
                        pointerEvents: "auto",
                      }}
                      id="basic-button"
                      aria-haspopup="true"
                      aria-controls={`bacic-menu-${item.id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                      onClick={(event) => handleClick(event, index)}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${item.id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      slotProps={{
                        list: {
                          "aria-labelledby": "basic-button",
                        },
                      }}
                    >
                      <MenuItem onClick={() => handleConfirmedOrder(item.id)}>
                        Confirm Order
                      </MenuItem>
                      <MenuItem onClick={() => handleShipedOrder(item.id)}>
                        Shipped Order
                      </MenuItem>
                      <MenuItem onClick={() => handleDeliveredOrder(item.id)}>
                        Delievred Order
                      </MenuItem>
                      <MenuItem onClick={() => handleCancleOrder(item.id)}>
                        Cancle Order
                      </MenuItem>
                    </Menu>
                  </TableCell>

                  <TableCell align="left">
                    <Button
                      variant="contained"
                      onClick={() => handleDeleteOrder(item.id)}
                      sx={{
                        color: "white",
                        background: "red",
                        pointerEvents: "auto",
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTable;
