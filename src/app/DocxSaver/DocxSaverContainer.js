import React from 'react'
import {
    AlignmentType,
    BorderStyle,
    Document,
    MaxRightTabStop,
    Packer,
    Paragraph,
    Table,
    TextRun,
    VerticalAlign
} from "docx";

import Button from "@material-ui/core/Button";
import {saveSync} from "save-file";
import {connect} from "react-redux";

//import {Columns} from "docx/build/file/document/body/section-properties/columns/columns";


const DocxSaverContainer = ({invoice, seller, customer, products}) => {
    console.log('propsy', invoice, seller, customer, products);
    const locationParagraph = (document) => {
        const paragraph = new Paragraph({
            children: [
                new TextRun('Miejscowość: ' + invoice.location).break(),
                new TextRun('Data wystawienia: ' + invoice.date).break(),
                new TextRun('Data sprzedaży: ' + invoice.sellDate).break(),
            ],
            alignment: AlignmentType.RIGHT
        });
        return paragraph
    };

    const titleParagraph = () => {
        const paragraph = new Paragraph({
            children: [
                new TextRun('FAKTURA VAT NR ' + invoice.number + ' orginał')
            ],
            alignment: AlignmentType.CENTER
        });
        return paragraph
    };

    const sellerParagraph = () => {

        const paragraph = new Paragraph({
            children: [
                new TextRun('Sprzedawca'),
                new TextRun('Nabywca').tab(),
                new TextRun('').break(),

                new TextRun(seller.nameLine1),
                new TextRun(customer.nameLine1).tab(),
                new TextRun('').break(),

                new TextRun(seller.nameLine2),
                new TextRun(customer.nameLine2).tab(),
                new TextRun('').break(),

                new TextRun(seller.addressLine1),
                new TextRun(customer.addressLine1).tab(),
                new TextRun('').break(),


                new TextRun(seller.addressLine2),
                new TextRun(customer.addressLine2).tab(),
                new TextRun('').break(),


                new TextRun('NIP ' + seller.nip + ' REGON ' + seller.regon),
                new TextRun('NIP ' + customer.nip + ' REGON ' + customer.regon).tab(),
                new TextRun('').break(),

            ],
            tabStop: {maxRight: MaxRightTabStop},
            alignment: AlignmentType.CENTER
        });

        /*     paragraph.cr('Sprzedawca');
             paragraph.createTextRun('Nabywca ').tab();
             paragraph.createTextRun(' ').break();

             paragraph.createTextRun('GRZEGORZ KASPERSKI');
             paragraph.createTextRun('Orlen ').tab();
             paragraph.createTextRun(' ').break();

             paragraph.createTextRun('AMBER');
             paragraph.createTextRun('Spólka Cywilna').tab();
             paragraph.createTextRun(' ').break();

             paragraph.createTextRun('UL.WŁODAWSKA 2');
             paragraph.createTextRun('42-200 CZESTOCHOWA').tab();
             paragraph.createTextRun(' ').break();

             paragraph.createTextRun('21-221 Czestochowa');
             paragraph.createTextRun('kowalskiego 8/13').tab();
             paragraph.createTextRun(' ').break();

             paragraph.createTextRun('NIP 537 140 30 11 REGON 243364691');
             paragraph.createTextRun('NIP %$( 38 13 448').tab();
             paragraph.createTextRun(' ').break();*/


        return paragraph;

    };

    const productTable = () => {
        const table = new Table({
            rows: products.list.length + 2,
            columns: 10,
            width: 0,
            columnWidths: [380, 2889, 755, 360, 600, 626, 800, 755, 800, 800],

        });
        const row = table.getRow(0).setTableHeader();
        row.getCell(0).add(new Paragraph('Lp.')).setVerticalAlign(VerticalAlign.CENTER);
        row.getCell(1).add(new Paragraph('Nazwa towaru lub usługi')).setVerticalAlign(VerticalAlign.CENTER);
        row.getCell(2).add(new Paragraph('Symbol PKWiU PKOB')).setVerticalAlign(VerticalAlign.CENTER);
        row.getCell(3).add(new Paragraph('j.m.')).setVerticalAlign(VerticalAlign.CENTER);
        row.getCell(4).add(new Paragraph('ilość')).setVerticalAlign(VerticalAlign.CENTER);
        row.getCell(5).add(new Paragraph('cena netto zł')).setVerticalAlign(VerticalAlign.CENTER);
        row.getCell(6).add(new Paragraph('wartość netto zł')).setVerticalAlign(VerticalAlign.CENTER);
        row.getCell(7).add(new Paragraph('stawka podatku %')).setVerticalAlign(VerticalAlign.CENTER);
        row.getCell(8).add(new Paragraph('wartość podatku zł')).setVerticalAlign(VerticalAlign.CENTER);
        row.getCell(9).add(new Paragraph('wartość brutto zł')).setVerticalAlign(VerticalAlign.CENTER);

        products.list.forEach((product, index) => {
            const tmpRow = table.getRow(index + 1);
            tmpRow.getCell(0).add(new Paragraph(index + '.')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(1).add(new Paragraph(product.name)).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(2).add(new Paragraph(product.symbol)).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(3).add(new Paragraph(product.unit)).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(4).add(new Paragraph(product.count + '')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(5).add(new Paragraph(product.unitPrice.value + '')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(6).add(new Paragraph(product.nettoPrice.value + '')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(7).add(new Paragraph(product.vat + '')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(8).add(new Paragraph(product.vatPrice.value + '')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(9).add(new Paragraph(product.bruttoPrice.value + '')).setVerticalAlign(VerticalAlign.CENTER);
        });

        const summaryRoe = table.getRow(products.list.length + 1);
        summaryRoe.mergeCells(0, 9);
        const cell = summaryRoe.getCell(0);
        cell.Borders.addBottomBorder(BorderStyle.NONE, 0, "white");
        cell.Borders.addLeftBorder(BorderStyle.NONE, 0, "white");
        cell.Borders.addRightBorder(BorderStyle.NONE, 0, "white");
        cell.setVerticalAlign(VerticalAlign.CENTER);
        summaryRoe.getCell(0).add(new Paragraph({
            children: [
                new TextRun('RAZEM BRUTTO: 5810,64 ZŁ')
            ],
            alignment: AlignmentType.RIGHT
        }));


        //table.setWidth("100%", WidthType.PERCENTAGE);

        return table;
    };

    const onSave = () => {
        const document = new Document();
        document.addSection({
            children: [
                locationParagraph(),
                titleParagraph(),
                sellerParagraph(),
                productTable()
            ]
        });
        console.log(document);

        Packer.toBlob(document).then((blob) => {
            // saveAs from FileSaver will download the file
            saveSync(blob, 'aaa.docx')
        });

    };

    return <div><Button onClick={onSave}>save</Button></div>
};

const mapStateToProps = (state) => ({
    invoice: state.invoice,
    seller: state.seller,
    customer: state.customer,
    products: state.products
});

export default connect(mapStateToProps, {})(DocxSaverContainer)
