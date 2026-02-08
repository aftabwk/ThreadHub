import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { deleteProduct, findProducts } from "../../state/product/Action";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Card, CardHeader } from "@mui/material";

const ProductsTableView = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    const data = {
      category: "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 100000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
      stock: "",
    };
    dispatch(findProducts(data));
  }, []);
  return (
    <div>
      <Card className="mt-2">
        <CardHeader title="Recent Products" />
        <TableContainer
          component={Paper}
          sx={{ maxHeight: 500, width: "100%" }}
        >
          <Table sx={{ width: "100%", tableLayout: "fixed" }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: 80 }}>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell sx={{ width: 120 }} align="left">
                  Category
                </TableCell>
                <TableCell sx={{ width: 90 }} align="left">
                  Price
                </TableCell>
                <TableCell sx={{ width: 90 }} align="left">
                  Quantity
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.content?.slice(0, 5).map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Avatar
                      sx={{ width: 40, height: 40 }}
                      src={item.imageUrl}
                    ></Avatar>
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    {item.title}
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                    }}
                  >
                    {item.category?.name}
                  </TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default ProductsTableView;
