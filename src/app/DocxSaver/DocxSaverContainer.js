import React from 'react'
import {AlignmentType, Document, Packer, Paragraph, Table, TabStopItem, TabValue, TextRun, VerticalAlign} from "docx";

import Button from "@material-ui/core/Button";
import {saveSync} from "save-file";

//import {Columns} from "docx/build/file/document/body/section-properties/columns/columns";


const DocxSaverContainer = () => {

    const locationParagraph = (document) => {
        const paragraph = new Paragraph({
            children: [
                new TextRun('Miejscowość: Częstochowa').break(),
                new TextRun('Data wystawienia: 20.01.2011').break(),
                new TextRun('Data sprzedaży: 20.01.2011').break(),
            ],
            alignment: AlignmentType.RIGHT
        });

        return paragraph
    };

    const titleParagraph = () => {
        const paragraph = new Paragraph({
            children: [
                new TextRun('FAKTURA VAT NR 1052015 orginał')
            ],
            alignment: AlignmentType.CENTER
        });
        return paragraph
    };

    const sellerParagraph = () => {

        const paragraph = new Paragraph({
            children: [
                new TextRun('Sprzedawca'),
                new TextRun('Nabywca').tab().tab().tab().tab().tab().tab().tab().tab(),
                new TextRun('').break(),

                new TextRun('Grzegorz'),
                new TextRun('orlen').tab().tab().tab().tab().tab().tab().tab().tab(),

            ],
            tabStop: {right: new TabStopItem(TabValue.RIGHT, 7000)},
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
            rows: 2,
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

        for (let i = 1; i < 2; i++) {
            const tmpRow = table.getRow(i);
            tmpRow.getCell(0).add(new Paragraph(i + '.')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(1).add(new Paragraph('Korytko kablowe perf. stal ocynkk 100x42 L2mb')).setVerticalAlign(VerticalAlign.CENTER);
            //tmpRow.getCell(2).add(new Paragraph('')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(3).add(new Paragraph('szt')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(4).add(new Paragraph('44')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(5).add(new Paragraph('12,50')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(6).add(new Paragraph('550,00')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(7).add(new Paragraph('23')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(8).add(new Paragraph('126,50')).setVerticalAlign(VerticalAlign.CENTER);
            tmpRow.getCell(9).add(new Paragraph('676,50')).setVerticalAlign(VerticalAlign.CENTER);
        }


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
        //document.add(productTable());

        console.log(document);

        Packer.toBlob(document).then((blob) => {
            // saveAs from FileSaver will download the file
            saveSync(blob, 'aaa.docx')
        });

    };

    return <div><Button onClick={onSave}>save</Button></div>
};

export default DocxSaverContainer
