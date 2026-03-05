
// ==========================================
// LOGIKA UNTUK HALAMAN GARIS HIDUP
// ==========================================
const ghTgl = document.getElementById("gh-tgl");
const ghBln = document.getElementById("gh-bln");
const ghThn = document.getElementById("gh-thn");
const btnKirimGh = document.getElementById("btn-kirim-gh");
const btnResetGh = document.getElementById("btn-reset-gh");
const ghOutputSection = document.getElementById("gh-output-section");

const outTgl = document.getElementById("out-tgl");
const outBln = document.getElementById("out-bln");
const outThn = document.getElementById("out-thn");
const outH1 = document.getElementById("out-h1");
const outH2 = document.getElementById("out-h2");
const outHAkhir = document.getElementById("out-hakhir");
const outNum = document.getElementById("out-num");
const ghResultDesc = document.getElementById("gh-result-desc");

if (ghTgl) {
  btnKirimGh.addEventListener("click", function () {
    const tglVal = ghTgl.value;
    const blnVal = ghBln.value;
    const thnVal = ghThn.value;

    if (tglVal === "" || thnVal === "") {
      alert("Mohon lengkapi tanggal dan tahun lahir!");
      return;
    }

    const rawString = String(tglVal) + String(blnVal) + String(thnVal);

    let sum1 = 0;
    for (let char of rawString) {
      sum1 += parseInt(char);
    }

    let sum2 = 0;
    if (sum1 > 9) {
      for (let char of String(sum1)) {
        sum2 += parseInt(char);
      }
    } else {
      sum2 = sum1;
    }

    let finalSum = 0;
    if (sum2 > 9) {
      for (let char of String(sum2)) {
        finalSum += parseInt(char);
      }
    } else {
      finalSum = sum2;
    }

    outTgl.value = tglVal;
    outBln.value = blnVal;
    outThn.value = thnVal;
    outH1.value = sum1;
    outH2.value = sum2;
    outHAkhir.value = finalSum;
    outNum.textContent = finalSum;

    let desc = "";
    switch (finalSum) {
      case 1:
        desc =
          "Bagi mereka yang jumlah angka hari lahirnya 1, Takdir Anda adalah menciptakan jalan bagi diri Anda sendiri dan menjadi nomor satu dalam segala hal yang Anda lakukan dalam hidup. Angka ini melambangkan kualitas kepemimpinan yang tertanam bersama dengan kemandirian dan alam perintis.";
        break;
      case 2:
        desc =
          "Bagi mereka yang jumlah angka hari lahirnya 2, Orang dengan ekspresi nomor ini dilahirkan untuk menciptakan suasana cinta dan harmoni kemanapun mereka pergi. Angka ini dikaitkan dengan keseimbangan, kepekaan, kasih sayang, kebaikan, dan empati. Semua ini disatukan menjadi sebuah pembawa damai yang luar biasa.";
        break;
      case 3:
        desc =
          "Bagi mereka yang jumlah angka hari lahirnya 3, individu yang kreatif sangat optimis dan menyenangkan berada di sekitar. Mereka sangat berbakat dalam berekspresi, mudah bergaul, percaya diri, dan berkembang dalam menciptakan dan memelihara hubungan.";
        break;
      case 4:
        desc =
          "Bagi mereka yang jumlah angka hari lahirnya 4, Individu dengan Takdir Nomor 4 berusaha untuk meninggalkan sesuatu yang bernilai positif untuk dikagumi orang lain. Mereka adalah orang-orang yang bertanggung jawab dan berdedikasi yang tidak pernah menyerah dan bertekad untuk melakukannya mencapai tujuan mereka.";
        break;
      case 5:
        desc =
          "Bagi mereka yang jumlah angka hari lahirnya 5, Kemandirian, kebebasan, kemajuan, petualangan, dan pemikiran bebas adalah apa yang menentukan angka 5. Bagi individu seperti itu, perubahan adalah a faktor konstan dalam hidup mereka. Mereka benci terkurung pada suatu hal atau tempat tertentu untuk waktu yang lama dan terus mengubah lingkungan dan bidang minatnya. Variasi adalah hal yang sangat didambakan.";
        break;
      case 6:
        desc =
          "Bagi mereka yang jumlah angka hari lahirnya 6, misi untuk memelihara dan silahkan dan orang-orang di sekitarmu. Sebagai seorang perfeksionis yang menginginkan yang terbaik dalam hidup, Anda selalu bersemangat memberikan kenyamanan kepada mereka yang membutuhkan. Ketidakegoisan Anda menambah keindahan dunia.";
        break;
      case 7:
        desc =
          "Bagi mereka yang jumlah angka hari lahirnya 7, Individu dengan nomor 7 adalah ahli dan lambang pengetahuan di bidangnya masing-masing. Tujuan hidup mereka adalah mencari informasi, menganalisisnya, dan menjadi logis dan ekspresif. Jiwa lembut ini adalah detektif numerologi.";
        break;
      case 8:
        desc =
          "Bagi mereka yang jumlah angka hari lahirnya 8, individu ambisius yang bercita-cita untuk mencapai tingkat yang lebih tinggi dalam hidup. Mereka berhasil keuangan keberhasilan, dan kekayaan materi serta tetap unggul dalam segala aspek kehidupan. Terlebih lagi, orang-orang ini memiliki temperamen kompetitif.";
        break;
      case 9:
        desc =
          "Bagi mereka yang jumlah angka hari lahirnya 9, individu dengan rasa altruisme, kreativitas, dan wawasan spiritual yang kuat. Orang-orang ini penuh kasih sayang dan sering kali tertarik pada upaya amal. Termotivasi oleh tujuan yang mendalam, mereka memilikinya kualitas kepemimpinan dan keinginan untuk memberikan dampak positif pada dunia.";
        break;
    }

    ghResultDesc.innerText = desc;

    ghOutputSection.style.display = "block";
  });

  btnResetGh.addEventListener("click", function () {
    ghTgl.value = "";
    ghBln.value = "1";
    ghThn.value = "";
    ghOutputSection.style.display = "none";
  });
}
