import React from 'react'
import {Document, Packer, Paragraph, TextRun} from "docx";

import Button from "@material-ui/core/Button";
import {saveSync} from "save-file";

const DockSaverContainer = () => {
    const doc = new Document();

    const onSave = () => {
        doc.addSection({
            properties: {},
            children: [
                new Paragraph(
                    {
                        children: [
                            new TextRun("Hello World"),
                            new TextRun({
                                text: "sprawdzam czy to wogole działa",
                                bold: true,
                            }).tab(),
                        ]
                    })
            ]
        });
        Packer.toBuffer(doc).then((buffer) => {
            saveSync(buffer, 'aaa.docx')
        })
    };

    return <div><Button onClick={onSave}>save</Button></div>
};

export default DockSaverContainer
