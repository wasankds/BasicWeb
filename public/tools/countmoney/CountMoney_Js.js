
// ตอนโหลดเอกสาร
document.addEventListener("DOMContentLoaded", () => {
  showDate()
  startTime()
  
  // // //=== ทดสอบกรอกฟอร์ม 
  // const mainForm = document.getElementById("mainForm")  
  // mainForm.unit.value = "ปตท.สะเดียง"
  // mainForm.sender.value = "วสันต์ คุณดิลกเศวต"
  // const rowList = document.querySelectorAll('.row-list')  
  // rowList[0].children[1].value = 2
  // rowList[0].children[1].dispatchEvent(new Event('input', {bubbles:true}));
  // rowList[1].children[1].value = 2
  // rowList[1].children[1].dispatchEvent(new Event('input', {bubbles:true}));
  // rowList[2].children[1].value = 2
  // rowList[2].children[1].dispatchEvent(new Event('input', {bubbles:true}));
  // rowList[3].children[1].value = 2   
  // rowList[3].children[1].dispatchEvent(new Event('input', {bubbles:true}));
  // rowList[4].children[1].value = 2  
  // rowList[4].children[1].dispatchEvent(new Event('input', {bubbles:true}));
  // rowList[5].children[1].value = 2  
  // rowList[5].children[1].dispatchEvent(new Event('input', {bubbles:true}));
  // rowList[6].children[1].value = 2 
  // rowList[6].children[1].dispatchEvent(new Event('input', {bubbles:true}));
  // rowList[7].children[1].value = 2
  // rowList[7].children[1].dispatchEvent(new Event('input', {bubbles:true}));
  // rowList[8].children[1].value = 2
  // rowList[8].children[1].dispatchEvent(new Event('input', {bubbles:true}));
  // // setTimeout( () => { print80() },1)
})


//========================================================================== 
//
//
function showDate() {
  const today = new Date();
  const todayFm = today
  document.getElementById('dateCtn').textContent = formatDateAndTime(today)
  setTimeout(startTime, 60*60*1000);
}
//=============================================================
//
function formatDateAndTime(dateObj=new Date(),
                           isBuddhist=false,
                           isMonthLong=false,
                           isYearLong=false,
                           isShowTime=false,
                           isSecond=true){
  const date = dateObj.getDate()
  const month = dateObj.getMonth()
  const monthThaiLong = [ "มกราคม","กุมภาพันธ์","มีนาคม",
                          "เมษายน","พฤษภาคม","มิถุนายน",
                          "กรกฎาคม","สิงหาคม","กันยายน",
                          "ตุลาคม","พฤศจิกายน","ธันวาคม"]
  const monthThaiShort = ["ม.ค.","ก.พ.","มี.ค.",
                          "เม.ย.","พ.ค.","มิ.ย.",
                          "ก.ค.","ส.ค.","ก.ย.",
                          "ต.ค.","พ.ย.","ธ.ค."]
  const monthDisplay = isMonthLong == true ? monthThaiLong[month] : monthThaiShort[month]
  var year = isBuddhist == false ? dateObj.getFullYear() :  dateObj.getFullYear()+543
  year = isYearLong == false ? year.toString().substring(2,4) : year
  if(isShowTime == true){
    const hour = dateObj.getHours() < 10 ? "0"+dateObj.getHours() : dateObj.getHours()
    const minute = dateObj.getMinutes() < 10 ? "0"+dateObj.getMinutes() : dateObj.getMinutes()
    if(isSecond == true){
      const second = dateObj.getSeconds() < 10 ? "0"+dateObj.getSeconds() : dateObj.getSeconds()
      return `${date} ${monthDisplay} ${year} ${hour}:${minute}:${second}`
    }else{
      return `${date} ${monthDisplay} ${year} ${hour}:${minute}`
    }
  }else{
    return `${date} ${monthDisplay} ${year}`
  } 
}
//========================================================================== 
//
//
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').textContent =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

//========================================================================== 
// add zero in front of numbers < 10
//
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}


//============================================================
//
function calcInRowList(chgElm){    
  const numMoney = chgElm.value  
  const nameElm = chgElm.name
  const money = Number(nameElm.match(/\d+/)[0])
  const listRowElm = chgElm.parentNode
  const totalRowElm = listRowElm.querySelector(`[name=total${money}]`)
  totalRowElm.value = numMoney*money
  calcTotalFunc()
} 
//====================================================
//
function calcTotalFunc(){
  const rowLists = document.querySelectorAll(".row-list")
  let total = 0 ;
  rowLists.forEach( row => {
    total += Number(row.children[2].value)
  })
  document.getElementById("grandTotalBaht").value = total
}

//========================================================================== 
// 
function onBtnClicked(btnClicked,state){
  var btnGroup = btnClicked.parentNode
  const btnShow = btnGroup.querySelector(".btn-show")
  const btnConfirm = btnGroup.querySelector(".btn-confirm")
  const btnCancel = btnGroup.querySelector(".btn-cancel")  
  if(state == "ON"){
    btnShow.style.display = "none"        
    btnCancel.style.display = "inline-block"        
    btnConfirm.style.display = "inline-block"        
    btnShow.disabled = false ;
    btnCancel.disabled = false ;
    btnConfirm.disabled = false ;
    btnConfirm.style.gridColumn = "1/3";
    btnCancel.style.gridColumn = "3/5";
  }else if(state == "CANCEL" || state == "SUBMITTED"){
    btnShow.style.display = "inline-block"
    btnCancel.style.display = "none"
    btnConfirm.style.display = "none"
    btnShow.disabled = false ;
    btnCancel.disabled = false ;
    btnConfirm.disabled = false ;
  }else if(state == "CONFIRM"){
    btnShow.style.display = "none"
    btnCancel.style.display = "none"
    btnConfirm.style.display = "inline-block"
    btnConfirm.style.gridColumn = "1/5";
    btnShow.disabled = true ;
    btnCancel.disabled = true ;
    btnConfirm.disabled = true ;
  }
}


//===========================================================================
//
// 
function print80(){
  const optionName = "print80Detail"
  const optionSpec = "height=700,width=700,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,titlebar=no"
  const newWindow = window.open("", optionName,optionSpec);
  newWindow.document.write(`
    <html>
      <head>
        <title>Print</title>
        <meta name="viewport" content="width=device-width,initial-scale=1">
      </head>
    </html>`);
  newWindow.document.body.textContent = "" ;
  const html = geteringPrintBorrow80()
  newWindow.document.write(html);
  // setTimeout( () => newWindow.print(),500)
}
//===========================================================================
// 
//
function geteringPrintBorrow80(){
  const form = document.getElementById("mainForm")
  const date = document.getElementById("dateCtn").textContent
  const clock = document.getElementById("clock").textContent
  const unit = form.unit.value
  const sender = form.sender.value
  const options = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
  // const grandTotalBaht = form.grandTotalBaht.value.toLocaleString('th-TH',options) ; 
  const grandTotalBaht = Number(form.grandTotalBaht.value).toLocaleString('th-TH') ; 
  console.log(grandTotalBaht)
  const rowLists = document.querySelectorAll(".row-list") ;  

  // const headerTitle = document.getElementById("headerTitle").textContent.trim()
  var html = `
    <style> 
      @import url('https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@200;400;600&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@200;400;600&display=swap');
      *{
        font-family:'Prompt','Sarabun','sans-serif';
        font-size:12px;
        box-sizing:border-box;
        margin: 0;
        padding: 0;
      }
      body{ background-color: white;}
      p{line-height:1.5rem;}
      .main-ctn{ padding:3px; width:8cm; }
      .row, .footer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }
      .footer{
        align-items:flex-start;
        align-content:flex-start;
      }
      .col-1{flex-basis:20%;max-width:25%;overflow:hidden;}
      .col-2{flex-basis:30%;max-width:30%;overflow:hidden;}
      .col-3{flex-basis:30%;max-width:45%;overflow:hidden;}
      .col-4{flex-basis:40%;max-width:45%;overflow:hidden;}

      .col-ft-1{flex-basis:25%;max-width:25%;overflow:hidden;}
      .col-ft-2{flex-basis:30%;max-width:30%;overflow:hidden;}
      .col-ft-3{flex-basis:45%;max-width:45%;overflow:hidden;}
      .col-full{flex-basis:100%;max-width:100%;overflow:hidden;}      

      .btn-close{ padding:0px 5px;font-size:1.2rem;color:red; }
      .btn-print{ padding:20px 10px;font-size:1.2rem;color:blue; }

      .al-c{ text-align:center!important; }
      .fs-l{ font-size:1.3rem!important;}
      .fs-m{ font-size:0.9rem!important;}
      .fs-s{ font-size:0.85rem!important;}
      .fs-xs{ font-size:0.7rem!important;}
      .fs-xxs{ font-size:0.65rem!important;}
      .pd-t{ padding-top:5px!important;}
      .pd-b{ padding-bottom:7px!important;}
      .bd-b{ border-bottom:1px dashed black;} 
      @media print {
        .noprint { visibility: hidden; }
      }
    </style> 
  
    <div class="main-ctn">
      <div class="row pd-b" style="border-bottom:1px solid black">
        <p class="col-full al-c"><span class="fs-m">หน่วยงาน : ${unit}</span></p>
        <p class="col-full al-c"><span class="fs-m">ผู้ส่ง : ${sender}</span></p>
        <p class="col-full al-c"><span class="fs-m">วันที่ ${date} เวลา ${clock}</span></p>
      </div>
      
      <div class="row"  style="margin-top: 7px;border-bottom:1px solid black;">
        <p class="col-full">
          <span>รวมเงิน : <span>          
          <span style="float:right;">${grandTotalBaht}<span>
        </p>
      </div>`
  
  //=== 
  html += `<div class="row">`
  rowLists.forEach( (row,i) => {
    const moneyType = row.children[0].textContent
    const numMoney = row.children[1].value
    const totalBaht = Number(row.children[2].value)
    
    let p = `<p class="col-full" style="border-bottom:1px dashed black;padding:3px 0;">
              <span >{{sequence}}.) <span>
              <span >ชนิด  {{moneyType}}<span>&ensp;
              <span > x &ensp; {{numMoney}} = &ensp;&ensp;<span>
              <span style="float:right;">{{totalBaht}} <span>
             </p>`
    p = p.replace("{{sequence}}",i+1 )
        .replace("{{moneyType}}", moneyType )
        .replace("{{numMoney}}",  numMoney)
        .replace("{{totalBaht}}", totalBaht.toLocaleString('th-TH'))
    html += p
  })
  //=== ปิด Order
  html += "</div>"

  //=== footer
  html += `
    <div class="row al-c"  style="margin-top: 1px;">
      <p class="col-full fs-xs al-c">นับเงิน</p>
    </div>`

  //=== ปุ่ม
  html += `<div class="footer noprint" style="margin-top: 10px;">
      <input class="col-ft-1 btn-close" type="button" value="Close" onclick="window.close();">
      <div   class="col-ft-2"></div>
      <input class="col-ft-3 btn-print" type="button" value="Print" onclick="window.print();">              
    </div>
  </div> <!-- main-ctn -->`

  return html
}




