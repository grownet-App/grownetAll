import { usePDF, Document, Page } from "@react-pdf/renderer";
import emailjs from "@emailjs/browser";

export default function PruebaPDF() {
 /* const MyDoc = (
    <Document>
      <Page>// My document data</Page>
    </Document>
  );
  const [instance, updateInstance] = usePDF({ document: MyDoc });*/
  function sendCanvasAsAttachment(canvas) {
    var base64 = canvas.toDataURL("https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80");
    emailjs.send("service_zthtpco", "template_iierimt", {
        content: base64
    });
}
  return (
    <>
    {/*<a href={instance.url} download="test.pdf">
      Download
    </a>*/}
    <form enctype="multipart/form-data" method="post" onsubmit="formSubmit()">

    <input type="file" name="my_file"/> 
    <input type="submit" value="Submit"></input>
    </form>
    </>
  );
}
