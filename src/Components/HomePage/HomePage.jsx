import React, {  useState } from "react";
// import map from '../../img/Map.png';
// import map from '../../img/New Map.png';
import map from '../../img/Map 1.png';
import Slider from '../Slider/Slider.jsx';
import eng from '../../img/Eng.jpeg';
import Eng from '../../img/هندسي.png';
import med from '../../img/Medicine.jpeg';
import Med from '../../img/med.jpg';
import air from '../../img/Air.jpeg';
import Air from '../../img/ضيافة.png';
import hotel from '../../img/Hotel.jpeg';
import Hotel from '../../img/فندقي.png';
import "./homePage.css";
import Contactus from "../Contactus/Contactus";


export default function HomePage() {

  let CateData = [
    {
      title: 'المجال الهندسي',
      img: eng,
      paragrah:`‏تقدر تحصل علي الفترة التدريبية المهنية كاخصائى 
      (مساحة وتشييد / بترول)
      ‏دون التقيد بسنة الحصول علي الدبلوم او الثانوية ودون التقيد بسن معين
      كما نقدم لك مميزات حصريا مثل:
      شهادة معتمدة قابلة للتوثيق من الخارجية
      كارنيه عضوية في رابطة مهندسي المساحة شعبة المساحة
      شهادة معتمدة من جهة التدريب العملي
      شهادة icdl
      تقسيط المصروفات
      تأمين صحي
      تدريب عملي ونظري ومعملي بأحدث الأساليب في المواقع
      التأهيل للحصول على كارنيه مزاولة المهنة
      الحصول علي خمس شهادات معتمدة و متخصصة
      امكانيه توفير فرص عمل بكندا بعد توافر الشروط بالتعاون
      مع شركة way 2 can
      امكانية اختيار المحافظة التي يرغب المتدرب التدريب بها
      امكانية التدريب النظري من المنزل اون لاين`,
      icon:    Eng,
    },
    {
      title: 'المجال الصحى',
      path: 'payments',
      img: med,
      paragrah:`احصل علي شهادة معتمدة و اشتراك النقابة
      لحملة الدبلومات الفنية والثانوية العامة والأزهرية و خريجي الجامعات بمجموع يبدأ من 50%(بنين/بنات)
      ‏ النقابة العامة للعاملين بهيئة الاسعاف المصرية بالتعاون مع مقدمي الخدمات اللوجستية
      ‏تقدر تحصل علي الفترة التدريبية المهنية كمساعد فني
      (تمريض / اشعة /تحاليل /تركيبات اسنان )
      ‏دون التقيد بسنة الحصول علي الدبلوم او الثانوية ودون التقيد بسن معين
      كما نقدم لك مميزات حصريا مثل:
      شهادة معتمدة قابلة للتوثيق من الخارجية
      كارنيه عضوية في نقابة الاسعاف في التخصصات الصحية يسمح لك بدخول جميع المستشفيات
      شهادة معتمدة من جهة التدريب العملي
      شهادة icdl
      تقسيط المصروفات
      تأمين صحي
      تدريب عملي ونظري ومعملي بأحدث الأساليب في والمستشفيات.
      التأهيل للحصول على كارنيه مزاولة المهنة
      الحصول علي خمس شهادات معتمدة و متخصصة
      امكانيه توفير فرص عمل بكندا بعد توافر الشروط بالتعاون
      مع شركة way 2 can
      امكانية اختيار المحافظة التي يرغب المتدرب التدريب بها
      امكانية التدريب النظري من المنزل اون لاين`,
      icon: Med    },
    {
      title: 'المجال الجوي',
      path: 'payments',
      img: air,
      paragrah:`نفسك تبقى مضيف طيران انت  فى المكان المناسب 
      قدم الان واحصل علي منحة الإنجليزي مجانا بعد اختبار تحديد المستوى  + خصم خاص لأول ثلاثة طلاب مستني اييييية 
      
      الشروط الأساسيه القبول فى الاكاديميه 
      - التقديم متاح من سن ١٧ سنة 
      - للذكور: الطول لا يقل عن ١٦٠سم 
      - للاناث : الطول لا يقل عن ١٥٥سم 
      
      نظام الدراسه اختيارك 
     سنه دارسيه مكون من 3ترم
      أماكن الدراسه 
      في قطاعات خاصه بتدريب وتأهيل للضيافة الجويه
      مواد الدراسه 
      لغه انجليزيه
      لغه ألماني
      علوم طيران 
      خدمات ارضيه
      اتيكيت 
      التدريب على اجتياز اختبارات شركات الطيران 
      كيفيه التعامل مع كبار المسافرين 
      مبادئ ضيافه جويه
      الاسعافات الاوليه 
      التدريب علي برنامج أماديوس 
      بالاضافه لفرق تدريبيه خارجيه فى بعض قطاعات تدريب مختلفه`,
      icon: Air,
    },
    {
      title: 'المجال االفندقي',
      path: 'payments',
      img: hotel,
      paragrah:`نفسك تبقى مضيف طيران انت  فى المكان المناسب 
      قدم الان واحصل علي منحة الإنجليزي مجانا بعد اختبار تحديد المستوى  + خصم خاص لأول ثلاثة طلاب مستني اية   
      الشروط الأساسيه القبول فى الاكاديميه 
      - التقديم متاح من سن ١٧ سنة 
      - للذكور: الطول لا يقل عن ١٦٠سم 
      - للاناث : الطول لا يقل عن ١٥٥سم 
      نظام الدراسةاختيارك 
     سنه دارسيه مكون من 3ترم 
      أماكن الدراسه 
      في قطاعات خاصه بتدريب وتأهيل للضيافة الجويه
      مواد الدراسه 
      لغه انجليزيه
      لغه ألماني
      علوم طيران 
      خدمات ارضيه
      اتيكيت 
      التدريب على اجتياز اختبارات شركات الطيران 
      كيفيه التعامل مع كبار المسافرين 
      مبادئ ضيافه جويه
      الاسعافات الاوليه 
      التدريب علي برنامج أماديوس 
      بالاضافه لفرق تدريبيه خارجيه فى بعض قطاعات تدريب مختلفه`,
      icon: Hotel,
    }

  ];
let [Popupcontent,setPopupcontent]= useState(CateData[0]);
// let ChangeContant=(cate)=>{
//   setPopupcontent([cate])
// }
  return (
    <>

      <header >

        <div className="container " id="header">
          <div className="row ">
            <div className=" header-section">
              <h2>مرحبا بك في اكاديمية         </h2>
              <h1>مصر الحياة</h1>
           
            </div>

          </div>
       

        </div>
      </header>
      <Slider/>

      <section id="info" >
        <div className="sectionLabel-text">
          <h6 className="d-flex align-items-center sectionHeader">

عن الاكاديمية          </h6>
  </div>
        <div className="container w-75 mt-5">
          <div className="row " >
<div className="col-xl-6 col-sm-12 ">
<div className="p-about text-white p-2 ">
الاكاديمية خاصة ولكنها معتمدة  من الجهات الحكومية والمعهد القومى للجودة كمركز تاهيل وتدريب بقرار وزاري من وزارة التجارة والصناعة
<p>
يوجد عدة مجالات للدراسة :
<br/>
🛑 مجال طبي
( تمريض_ أشعه _ تحاليل _ تركيبات اسنان)<br/>
🛑 مجال هندسي
(مساحة وخرائط _ بترول وتعدين)
<br/>
🛑  مجال فندقي
( سياحة وفنادق)
<br/>
🛑 ضيافة جوية

</p>
<p>
الشهادات :
الحصول علي 9 شهادات معتمدة و متخصصة
شهادة معتمدة قابلة للتوثيق من الخارجية ومسجلة علي موقع الجامعة الحكومية وعليها ختم النسر وختم الجامعة
الشهادة ليها رقم كودى وتاريخ اصدار
كارنيه عضوية في نقابة الاسعاف في التخصصات الصحية يسمح لك بدخول جميع المستشفيات
كارنيه عضوية في رابطة مهندسي المساحة شعبة المساحة
شهادة معتمدة من جهة التدريب العملي
شهادة icdl
تقسيط المصروفات
تأمين صحي
شهاده مكافحة عدوى
شهادة اساسيات تمريض
شهادة اسعافات اولية
تدريب عملي ونظري ومعملي بأحدث الأساليب في المواقع والمستشفيات.
التأهيل للحصول على كارنيه مزاولة المهنة
امكانيه توفير فرص عمل بكندا بعد توافر الشروط بالتعاون
مع شركة way 2 can
</p>
<p>
أنظمة  الدراسة :
نظام سنة مكثف:
الدراسة تبدأ في شهر 10  و تنتهي في شهر7 العام التالي
نظام سنتين:
الدراسة تبدا في شهر 10 و تنتهي في شهر7 بعد مرور عامين
مع امكانيه الدراسة اونلاين
</p>
</div></div>
<div className="col-xl-6  col-sm-12">
<div className="img-about w-100 h-100 rounded">
</div></div>
          </div>
        </div>

      </section>

      <section id="about" >
        <div className="sectionLabel-text">
          <h6 className="d-flex align-items-center sectionHeader">

            تخصصات الأكاديمية

          </h6>

          <p >
            ﺗﻌﻠﻢ ﺑﺄﺣﺪث اﻟﻄﺮق ﻣﻦ ﺧﻠﺎل الأكاديمية المصرية,ﻓنحن ﻧﻮﻓﺮ ﻟﻚ اﻟﻌﺪﻳﺪ ﻣﻦ اﻟﻜﻮرﺳﺎت اﻟﺨﺎﺻﺔ , ﺑﺄﺣﺪث ﻃﺮق اﻟﻤﺘﺎﺑﻌﺔ واﻟﺘﻘﻴﻴﻢ.
          </p>  </div>
        <div className="container">
          <div className="row " id="cards-container">
            
            {/* <div className="col-xl-3 col-sm-6">
            <div className="card" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  <img src={eng} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">
المجال الهندسي
    </p>
  </div>
</div>
            </div>
  <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"> اكاديمية مصر الحياة</h1>
      </div>
      <div class="modal-body m-auto">
      <img className="rounded modal-img" src={Eng} />
      <p>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates praesentium aspernatur dolorum fugit nostrum consequuntur doloremque necessitatibus maiores! Facere animi praesentium doloribus aspernatur voluptate voluptas rerum officia vel eius saepe.
      </p>
      </div>
      <div class="modal-footer "> 
        <button type="button" class="btn btn-secondary m-auto" data-bs-dismiss="modal">اغلاق</button>
      </div>
    </div>
  </div>
</div> */}

 {CateData?.map((cate , index) => 
  
<div className="col-xl-3 col-sm-6" key={index} onClick={()=>setPopupcontent(cate)}>
            <div className="card" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  <img src={cate.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">
    {cate.title}
    </p>
  </div>
</div>
            </div>

 )} 

  <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel"> اكاديمية مصر الحياة</h1>
      </div>
      <div class="modal-body m-auto">
      <img src ={Popupcontent.img}className="rounded modal-img" />
      <h3>  {Popupcontent.title} </h3>
      <p>
      {Popupcontent.paragrah}
      </p>
      </div>
      <div class="modal-footer "> 
        <button type="button" class="btn btn-secondary m-auto" data-bs-dismiss="modal">اغلاق</button>
      </div>
    </div>
  </div>
</div> 

          </div>
        </div>

      </section>


      <section id="price">
        <div >
          <h6 className=" sectionHeader">
مميزات الأكاديمية


          </h6>

          <p >
          احنا بنقبل خريجي الثانوية  الفنية (زراعي - تجاري - صناعي- بحري - فندقي)
والثانوية العامة والازهرية  ( علمى وادبى )
وخريجي الجامعات للعام الحالي والاعوام السابقة‎
من سن 16 حتي سن 45
لا يشترط مجموع بنقبل من  50%
<br/>
   ⭐️امكانية التقسيط على مدار العام الدراسى
   <br/>
⭐️امكانية تأجيل الجيش
<br/>

⭐️امكانية استخراج بدل فاقد من خلال الرقم الكودى المسجل بوزارة الخارجية فى حالة فقدان الشهادة
الكتب مجاانية طول فترة الدراسة
<br/>

⭐️ال ID مجانى
<br/>

⭐️توفير التدريب العملى فى المستشفيات او المواقع لقسم المساحة
<br/>

⭐️الزى الدراسى
<br/>

⭐️التأهيل للحصول على كارنية مزاولة المهنه اذا توفر 
⬅️المجال الصحي (تبع النقابة العامة للعاملين بهيئه الاسعاف)
   </p>
        </div>

      </section>

      <section id="location">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12">
              <div className="branches">
                <h3>
                  فروع الأكاديمية علي مستوي الجمهورية
                </h3>
                <p className="p1">
                  <i className="fa-solid fa-arrow-left"></i>
                  8 فروع
                </p>
                <span>القاهرة , الاسكندرية , دمنهور ,  المنصورة ,  طنطا , السويس ,  الزقازيق</span>
                <p className="p1">
                  <i className="fa-solid fa-arrow-left"></i>
                  قريبا خارج مصر (السودان)

                </p>
                <div className="btnWidth-div">
<Contactus/>



                  <div className="btnWidth-res">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      اظهار الخريطة
                    </button>
                  </div>
                </div>


                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close map-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="img-map">
<img src={map}/>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>


              </div>
            </div>
            <div className="col-lg-7 col-sm-12">
              <div className="img-map res-display ">
              <img src={map}/>
              <div className="alex">
              <a className="nav-link" href="https://goo.gl/maps/yfQV6DrpxGjKLGrYA" >
                         
                         .      </a>
              </div>
              <div className="damnhor">
              <a className="nav-link" href="https://goo.gl/maps/dd1jqUz9W54GHHUx5" >
                         
                         .      </a>
              </div>
              <div className="kfr">
              <a className="nav-link" href="https://goo.gl/maps/dUZsB1UnZUGfgaLL9" >
                         
                         .      </a>
              </div>
              <div className="mansoura">
              <a className="nav-link" href="https://goo.gl/maps/Gun5vdDb91Xnd6uZ7" >
                         
                         .      </a>
                
              </div>
              <div className="tanta">
              <a className="nav-link" href="https://goo.gl/maps/Gun5vdDb91Xnd6uZ7" >
                         
                         .      </a>
                
              </div>
              <div className="zag">
              <a className="nav-link" href="https://goo.gl/maps/Gun5vdDb91Xnd6uZ7" >
                         
                         .      </a>
                
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="feedback">
        <div className="sectionLabel-text">
          <h6 className="d-flex align-items-center sectionHeader">


            اراء العملاء    </h6>

          <p >
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص    </p>
        </div>
        <div className="container-fluid feedback-bg">
          <div className="row " id="feedback-container">

          </div>
        </div>
      </section> */}
    </>
  );
}