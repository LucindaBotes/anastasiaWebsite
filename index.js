/**---------------------------------------------------------------------------------------------------------------
 * Lucinda Botes u19048263
 * ---------------------------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------------------------
 * 
 * ---------------------------------------------------------------------------------------------------------------
 * Global Variables
 * ---------------------------------------------------------------------------------------------------------------
 * 
 * @Variables
 * - nameAttribute 
 *   @description
 *   This variable retrieves an element by its name.
 * - dom 
 *   @description
 *   This variable retrieves an element by its ID.
 * - className 
 *   @description
 *   This variable retrieves an element by its class name.
 */

// Variable declarations
const nameAttribute = names => { return document.getElementsByName(names); }
const dom = id => { return document.getElementById(id); }
const className = classes => { return document.getElementsByClassName(classes); }

/**---------------------------------------------------------------------------------------------------------------
 * 
 * ---------------------------------------------------------------------------------------------------------------
 * ./shop.js
 * ---------------------------------------------------------------------------------------------------------------
 * 
 * @Variables
 * - checkboxes 
 *   @description
 *   This variable retrieves all checkboxes.
 * - spans 
 *   @description
 *   This variable retrieves all elements with the class name check.
 * - uncheckedMessage 
 *   @description
 *   This variable sets the value of an unchecked checkbox.
 * - checkedMessage 
 *   @description
 *   This variable sets the value of a checked checkbox.
 * 
 * @functions
 * - forEach
 *   @description
 *   The function loops through each checkbox element and see if it is checked or not.
 *   If it is checked it will display the checked checkbox text.
 *   It it is unchecked it will displaay the unchecked checkbox text.
 */

// Variable declarations
const checkboxes = nameAttribute("add");
const spans = className("check");
const uncheckedMessage = " + Add to cart";
const checkedMessage = " - Remove from Cart";

// Function definition
checkboxes.forEach((checkbox, index) => [
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      console.log(index);
      spans[index].innerText = checkedMessage;
    } else {
      spans[index].innerText = uncheckedMessage;
    }
  })
])

/**---------------------------------------------------------------------------------------------------------------
 * 
 * ---------------------------------------------------------------------------------------------------------------
 * ./login.js
 * ---------------------------------------------------------------------------------------------------------------
 * 
 * @Variables
 * - validName 
 *   @description
 *   This variable checks if the username input is valid.
 * - validPassword 
 *   @description
 *   This variable checks if the password input is valid.
 * - error 
 *   @description
 *   This variable retrieves all elements where an error message should appear.
 * - username
 *   @description
 *   This variable retrieves the username input.
 * - password
 *   @description
 *   This variaple retrieves the password input.
 * - button
 *   @description
 *   This variable retrieves all button classed submit buttons.
 * 
 * @functions
 * - onLogin
 *   @description
 *   Checks to see if username and password is valid.
 *   If they are valid, submit the form, otherwise display an error message.
 * 
 * @events
 * - onblur
 *   @description
 *   If the input field is no longer focussed, the validity of the inputs are checked
 *   If they are invalid, an error message will be displayed underneath the corresponding input field.
 */

// Variable declarations
let validName = false;
let validPassword = false;
let submitError = className("submitMessage")
let error = className("errorMessage");
let username = dom("username");
let password = dom("password");
let button = className("button");

// Check if it is reading from the login page
if (username && password) {
  username.onblur = (e) => {
    if (username.value.length >= 3) {
      validName = true;
      error[0].innerHTML = "";
    }
    else {
      validName = false;
      error[0].innerText = "Name is too short";
    }
  }

  password.onblur = (e) => {
    if (password.value.length >= 8) {
      validPassword = true;
      error[1].innerHTML = "";
    }
    else {
      validPassword = false;
      error[1].innerText = "Password is too short";
    }
  }
}

// Function definition
const onLogin = () => {
  if (!validName || !validPassword) {
    submitError.innerText = "Make sure all form fields are filled in and valid";
    return false;
  } else {
    return true;
  }
}

/**---------------------------------------------------------------------------------------------------------------
 * 
 * ---------------------------------------------------------------------------------------------------------------
 * ./checkout.js
 * ---------------------------------------------------------------------------------------------------------------
 * 
 * @Variables
 * - fullName 
 *   @description
 *   This variable retrieves the name input.
 * - number 
 *   @description
 *   This variable retrieves the cellphone number input.
 * - email 
 *   @description
 *   This variable retrieves the email input.
 * - promo
 *   @description
 *   This variable retrieves the promo code input.
 * - cardName
 *   @description
 *   This variable retrieves the card name input.
 * - cardNum
 *   @description
 *   This variable retrieves the card number input.
 * - cardDate
 *   @description
 *   This variable retrieves the card expiry date input.
 * - cvv
 *   @description
 *   This variable retrieves the cvv number input.
 * - purchase
 *   @description
 *   This variable retrieves the purchase submit button.
 * - validFullName
 *   @description
 *   This variable checks if the full name input is valid.
 * - validNumber
 *   @description
 *   This variable checks if the cellphone number input is valid.
 * - validEmail
 *   @description
 *   This variable checks if the email input is valid.
 * - validPromo
 *   @description
 *   This variable checks if the promo code input is valid.
 * - radio
 *   @description
 *   This variable checks if at least one radio button is clicked.
 * 
 * @functions
 * - validateDate
 *   @description
 *   This function calculates the difference in years between the current date and the card expiry date.
 *   If the function returns a negative number the card is expired.
 *   If the function returns a positive number or 0, the card has not expired yet.
 * - togglePayment
 *   @description
 *   An array of stringsare made which are the same as the radio buttons' individual id's.
 *   The array is checked against the id which is passed in from the radio button.
 *   If they match the corresponding payment method will display a div to input the details.
 *   The divs start off as hidden, if the buttons change, the previously selected div will be hidden again,
 *   and the next one will be displayed.
 *   This is done by adding or removing the classes hide and show which respectively display none and display block.
 * 
 * @events
 * - onblur
 *   @description
 *   If the input field is no longer focussed, the validity of the inputs are checked
 *   If they are invalid, an error message will be displayed underneath the corresponding input field.
 * - onclick
 *   @description
 *   If the purchase button is clicked on, the validity of all the required inputs are checked
 *   as well as if a radio button is selected.
 *   If they are invalid, an error message will be displayed underneath the corresponding input field.
 *   If there is no radio button selected an error message will appear next to them
 */

// Variable declarations
const fullName = dom("fullName");
const number = dom("number");
const email = dom("email");
const promo = dom("promo");
const cardName = dom("card_name");
const cardNum = dom("card_number");
const cardDate = dom("card_date");
const cvv = dom("cvv");
const purchase = dom("purchase")
let validFullName = false;
let validNumber = false;
let validEmail = false;
let validPromo = false;
let radio = false;

// Function definitions
const validateDate = rawDate => {
  const today = new Date();
  const expiryDate = new Date(rawDate);
  let completeYears = expiryDate.getFullYear() - today.getFullYear();
  const monthDifference = expiryDate.getMonth() - today.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() > expiryDate.getDate())) {
    completeYears--;
  }
  return completeYears;
}

function togglePayment(elId) {
  const idList = [
    'cardPayment',
    'EFTPayment',
    'payPalPayment'
  ]
  idList.forEach(id => {
    const el = dom(id);
    if (id === elId) {
      radio = true;
      el.classList.remove('hide');
      el.classList.add('show')
    } else {
      el.classList.remove('show')
      el.classList.add('hide');
    }
  })
}

// Check if it is reading from the checkout page
if (fullName && number) {
  fullName.onblur = (e) => {
    if (fullName.value.length == 0) {
      error[0].innerText = "This is an invalid name";
    } else {
      validFullName = true;
      error[0].innerText = "";
    }
  }

  number.onblur = (e) => {
    if ((number.value.indexOf(0) == 0) && (number.value.indexOf(1) != 0) && (number.value.length == 10)) {
      validNumber = true;
      error[1].innerText = "";
    } else {
      if (number.value.length != 10) {
        error[1].innerText = "Phone number must have 10 digits";
      }
      else {
        error[1].innerText = "Phone number is not valid";
      }
    }
  }

  email.onblur = (e) => {
    if ((email.value.indexOf("@") != -1) && (email.value.indexOf(".") != -1)) {
      validEmail = true;
      error[2].innerText = "";
    }
    else {
      validEmail = false;
      error[2].innerText = "Email is not valid";
    }
  }

  promo.onblur = (e) => {
    if ((promo.value === "54321") || (promo.value.length == 0)) {
      validPromo = true;
      error[3].innerText = "";
    }
    else if ((promo.value != "54321") && (promo.value.length != 0)) {
      validPromo = false;
      error[3].innerText = "This Promo Code is invalid";
    }
  }

  cardName.onblur = (e) => {
    if (cardName.value.length == 0) {
      error[5].innerText = "This card name is invalid";
    } else {
      error[5].innerText = "";
    }
  }

  cardNum.onblur = (e) => {
    if (cardNum.value.length == 0) {
      error[6].innerText = "This card number is invalid";
    } else {
      error[6].innerText = "";
    }
  }

  cardDate.onblur = (e) => {
    if (((validateDate(cardDate.value)) >= 0) || (cardDate.value.length == 0) || (validateDate(cardDate.value) === NaN)) {
      error[7].innerText = "";
    } else {
      error[7].innerText = "This card is expired";
    }
  }

  cvv.onblur = (e) => {
    if (cvv.value.length == 3) {
      error[8].innerText = "";
    }
    else {
      error[8].innerText = "This cvv is invalid";
    }
  }

  purchase.onclick = (e) => {
    if (!radio) {
      error[4].innerText = "This field is required";
    }
    else {
      if (!validFullName || !validNumber || !validEmail) {
        submitError.innerText = "Make sure all form fields are filled in and valid";
        console.log("hi")
        return false;
      } else {
        return true;
      }
    }
  }

}

// ---------------------------------------------------------------------------------------------------------------