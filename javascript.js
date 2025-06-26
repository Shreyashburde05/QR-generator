let qrCode; 

function generateQRCode() {
  const input = document.getElementById("text-input").value.trim();
  const qrContainer = document.getElementById("qrcode");

  qrContainer.innerHTML = "";

  if (input) {
    qrCode = new QRCode(qrContainer, {
      text: input,
      width: 200,
      height: 200,
      colorDark: "#00ffcc", 
      colorLight: "#000000",
      correctLevel: QRCode.CorrectLevel.H 
    });
  } else {
    alert("Please enter text or URL to generate QR code.");
  }
}
