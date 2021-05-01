export default function validate(values) {

  let errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }

  if( values.password.length < 8 ) {
    errors.password = "Password must be more than 8 characters";
  }
  // else {
  //   let capLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
  //    capLetters.map( item => {
  //     let check = false;
  //     if( values.password.includes(item) ){
  //       check = true;
  //     }
  //     return check;
  //   });

  //   errors.password = "Password must contain a capital letter";

  // }

    if( !(values.password === values.confirmPassword) ) {
    errors.confirmPassword = "Password does'nt match";
  }
  
  return errors;
}
