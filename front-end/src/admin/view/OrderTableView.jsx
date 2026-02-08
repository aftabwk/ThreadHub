import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../state/admin/order/Action";
import {
  Avatar,
  AvatarGroup,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const OrderTableView = () => {
  const dispatch = useDispatch();

  const adminOrder = useSelector((store) => store.adminOrder);
  //Status

  useEffect(() => {
    dispatch(getOrders());
  }, [
    adminOrder.confirmed,
    adminOrder.shipped,
    adminOrder.delivered,
    adminOrder.cancelled,
    adminOrder.deleteOrder,
  ]);

  return (
    <div>
      <Card className="mt-2">
        <CardHeader title="Recent Orders" />
        <TableContainer
          component={Paper}
          sx={{ maxHeight: 500, width: "100%" }}
        >
          <Table sx={{ width: "100%", tableLayout: "fixed" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 85 }}>Image</TableCell>
                <TableCell sx={{ width: 156 }} align="left">
                  Title
                </TableCell>
                <TableCell sx={{ width: 50 }} align="center">
                  Id
                </TableCell>
                <TableCell sx={{ width: 50 }} align="center">
                  Price
                </TableCell>
                <TableCell sx={{ width: 80 }} align="center">
                  Quantity
                </TableCell>
                <TableCell sx={{ width: 150 }} align="left">
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.slice(0, 5).map((item, index) => (
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
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell align="center">{item.totalPrice}</TableCell>
                  <TableCell align="center">{item.totalItems}</TableCell>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTableView;
