import React, {  useState } from "react";

import "../HomePage/homePage.css";
export default function Contactus() {
    let PhonesNum=[{
        branch:'فرع الزقازيق',
        address:'شارع موقف المنصوره امام مسجد القدس اعلى معرض ربيع الحصرى القديم الدور الرابع',
        numbers:[
      '01022003631',
      '01022003634      ',
         '01022003639      ',
     '01501200052      '
        ]

      },
      {
        branch:'فرع المنصورة',
        address:'المشاية السفلية : ش الاشقر امام ملاهى بيبو لاند - ناصية ش قنديل للنجف وكاكاو',
        numbers:[
    '01092004811        ',
      '01277522660        ',
      '01012669333        ',
  '01277522663        ']
        }
      ,{
      branch:'فرع طنطا',
      address:'اول ش البحر التاون مول شركه بيع المصنوعات سابقا الدور 9  وحده  رقم 18',
      numbers:['01013004112',
      '01013300275      ',
      '01501200052      ',
      '01050668064      ']
      },{
        branch:'فرع دمنهور',
        address:'ش عبدالسلام الشاذلي _ أخر سور النادي الاجتماعي بجوار أتيلية اميره غنيم الجديد وتيدي لألعاب الأطفال',
      numbers:['01012669333',
      '01000322938      ',
      '01018363528      ',
      '01016566033      ',
    '01050449643    ']

      },{
        branch:'فرع الاسكندرية',
        address:'تقاطع شارع خالد ابن الوليد مع شارع 16 بعد مسجد سيدى بشر بشارعين امام مطعم المقام برج نور الاسلام الدور الاول',
      numbers:['01277522991      ',
     '01277520992      ',
     '01277521667      ',
   '01009121527      ']
      },{
        branch:'فرع كفرالدوار',
        address:'مدخل كفر الدوار امام التون تيم بجوار صيدليه الدكتور محمد حماد',
      numbers:['01000376902      ',
    '01000376702      ',
     '01097112088      ',
    '01097233099      ']
      } 
      ]

      let [Datacontent,setDatacontent]= useState(PhonesNum[0]);

  return (


<>
<div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
<div className="modal-dialog modal-dialog-centered">
<div className="modal-content">
  <div className="modal-header">
    <h1 className="modal-title fs-5" id="exampleModalToggleLabel">فروعنا</h1>
  </div>
  <div className="modal-body branchbody">

  {PhonesNum?.map((phone , index) => 
   <div className="branchbtn  m-3">

  <button  data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" key={index} onClick={()=>setDatacontent(phone)}>
{phone.branch}
  </button>
  </div>

  )}
  </div>

</div>
</div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
<div className="modal-dialog modal-dialog-centered">
<div className="modal-content">
  <div className="modal-header">
    <h3 className="modal-title fs-5 p2" id="exampleModalToggleLabel2">{Datacontent.branch}</h3>
  </div>
  <div className="modal-body p-3">
  <div className="p-2">

<h4>العنوان</h4>  
<span className="p2">{Datacontent.address}</span>
</div>
<div className="p-2">
<h4>ارقام التواصل</h4>

{Datacontent.numbers.map((number, index) => (
  <div key={index}>
    <p className="p2"> {number}</p>

  </div>
))}
</div>
   </div>
  <div className="modal-footer btnWidth m-auto">
    <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal">العودة للخلف</button>
    <button  data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"> حسنا</button>

  </div>
</div>
</div>
</div>

 <div className="btnWidth">
                     <button data-bs-toggle="modal" href="#exampleModalToggle" role="button"  >تواصل معنا</button>
                 </div>
</>
  )
}
