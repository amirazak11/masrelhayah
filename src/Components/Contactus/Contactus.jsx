import React from 'react'
import "../HomePage/homePage.css";
export default function Contactus() {
    let PhonesNum=[{
        branch:'فرع الزقازيق',
      number1:'01022003631',

      },{
      branch:'فرع طنطا',
      address:'',
      number:'01013004112'
      },{
        branch:'فرع دمنهور',
        address:'',
      number:'01013004112',

      },{
        branch:'فرع الاسكندرية',
        address:'',
      number:'01022003631',
      },{
        branch:'فرع كفرالدوار',
        address:'',
      number:'01022003631',
      } 
      ]
  return (
    <>
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

      <div className="modal-body">
        <h2>{PhonesNum.branch} </h2>
        <a>01203328425</a>

      </div>
      <div className="modal-footer btnWidth">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"> حسنا</button>
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
