import React from 'react'
import {Document, Packer, Paragraph} from "docx";

import Button from "@material-ui/core/Button";
import {saveSync} from "save-file";
//import {Columns} from "docx/build/file/document/body/section-properties/columns/columns";


const DocxSaverContainer = () => {

    const locationParagraph = (document) => {
        const paragraph = new Paragraph().right();
        paragraph.createTextRun('Miejscowość: Częstochowa').break();
        paragraph.createTextRun('Data wystawienia: 20.01.2011').break();
        paragraph.createTextRun('Data sprzedaży: 20.01.2011').break();
        return paragraph
    };

    const titleParagraph = () => {
        const paragraph = new Paragraph().heading3().center();
        paragraph.createTextRun("FAKTURA VAT NR 1052015 orginał").bold();
        return paragraph
    };

    const sellerParagraph = () => {

        const paragraph = new Paragraph();
        paragraph.rightTabStop(2067 * 4);

        paragraph.createTextRun('Sprzedawca');
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
        paragraph.createTextRun(' ').break();


        return paragraph;

    };

    const onSave = () => {
        const document = new Document();

        //document.addSection(new SectionProperties({column: {space: 200, count: 2}}));
        document.addParagraph(locationParagraph());
        document.addParagraph(titleParagraph());
        document.addParagraph(sellerParagraph());
        //locationParagraph(doc);
        console.log(document);
        const packer = new Packer();
        packer.toBuffer(document).then((buffer) => {
            saveSync(buffer, 'aaa.docx')
        })
    };

    return <div><Button onClick={onSave}>save</Button></div>
};

export default DocxSaverContainer
