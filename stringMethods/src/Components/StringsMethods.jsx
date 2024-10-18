import React from 'react'

function StringsMethods() {
    var str = "Sindh Agricultural University"
    var a = str.length

    var low = "Lower Case METHODS"
    var b = low.toLocaleLowerCase();

    var Uper = "to Uper Case Methods"
    var c = Uper.toUpperCase();

    var inc = "Usama Abbasi";
    var x = inc.includes("Uma")

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>{a} String Lenght</div>
      <div>{b}</div>
      <div>{c}</div>
      <div>
        {x ? "The name includes 'Usama'" : "The name does not include 'Usama'."}
      </div>
     
    </div>
  );
}

export default StringsMethods
