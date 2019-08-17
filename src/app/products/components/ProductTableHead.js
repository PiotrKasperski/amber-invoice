import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import React from "react";

const ProductTableHead = () => {
    return <TableHead>
        <TableRow>
            <TableCell size={"small"}>Lp.</TableCell>
            <TableCell>Nazwa towaru lub usługi</TableCell>
            <TableCell size={"small"} align="right">Symbol PKWiU PKOB</TableCell>
            <TableCell size={"small"} align="right">j.m.</TableCell>
            <TableCell size={"small"} align="right">ilość</TableCell>
            <TableCell size={"small"} align="right">cena netto zł</TableCell>
            <TableCell size={"small"} align="right">wartość netto zł</TableCell>
            <TableCell size={"small"} align="right">stawka podatku %</TableCell>
            <TableCell size={"small"} align="right">wartość podatku zł</TableCell>
            <TableCell size={"small"} align="right">wartość brutto zł</TableCell>
        </TableRow>
    </TableHead>
};
export default ProductTableHead
