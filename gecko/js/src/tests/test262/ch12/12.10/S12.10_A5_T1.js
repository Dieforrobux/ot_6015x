// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Deleting property using "eval" statement containing "with" statement
 *
 * @path ch12/12.10/S12.10_A5_T1.js
 * @description Deleting string property
 * @noStrict
 */

this.p1 = 1;
var myObj = {
  p1: 'a', 
  del:false
}
eval("with(myObj){del = delete p1}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1 === 'a'){
  $ERROR('#1: myObj.p1 !== "a"');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 !== undefined){
  $ERROR('#2: myObj.p1 === undefined. Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.del !== true){
  $ERROR('#3: myObj.del === true. Actual:  myObj.del ==='+ myObj.del  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(myObj.p1 === 1){
  $ERROR('#4: myObj.p1 !== 1');
}
//
//////////////////////////////////////////////////////////////////////////////
