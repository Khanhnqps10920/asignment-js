const form = document.forms['register'];
//input field
const {
  email,
  password,
  confirmPassword,
  givenName,
  familyName,
  street,
  buildingNumber,
  boxNumber,
  postalCode,
  city,
  gender,
  country
} = form;

// handle form submit
form.addEventListener('submit', e => {
  //prevent default behavior
  e.preventDefault();
  if (
    validationFirstName() &&
    validationAPT() &&
    validationBuilding() &&
    validationCity() &&
    validationConfirmPassword() &&
    validationCountry() &&
    validationEmail() &&
    validationGenders() &&
    validationPassword() &&
    validationLastName() &&
    validationPostalCode()
  ) {
    const name = givenName.value;
    const container = document.querySelector('div.your-detail');
    const loader = document.createElement('div');
    loader.className = 'progress';
    const loadingBar = document.createElement('div');
    loadingBar.className = 'inderterminate';
    loader.appendChild(loadingBar);
    container.appendChild(loader);
    setTimeout(() => {
      const loaderDiv = document.querySelector('div.progress');
      const panel = document.createElement('div');
      panel.className = 'card-panel green';
      const text = document.createElement('span');
      text.appendChild(
        document.createTextNode(`Đăng ký thành công!, chào mừng ${name} `)
      );
      panel.appendChild(text);
      container.replaceChild(panel, loaderDiv);
    }, 1000);
  }
});

//validation color
const validtaionColor = {
  GREEN: '#4caf50',
  RED: '#f44336'
};

const validationFirstName = () => {
  // check if empty
  if (checkIfEmpty(givenName)) return;
  //check if has only letters
  if (!checkIfOnlyLetter(givenName)) return;
  return true;
};
const validationLastName = () => {
  // check if empty
  if (checkIfEmpty(familyName)) return;
  //check if has only letters
  if (!checkIfOnlyLetter(familyName)) return;
  return true;
};

const validationEmail = () => {
  // check if empty
  if (checkIfEmpty(email)) return;
  //check if has only letters
  if (!containsCharacters(email, 5)) return;
  return true;
};
const validationPassword = () => {
  // check if empty
  if (checkIfEmpty(password)) return;
  //Must be incertain length
  if (!meetLength(password, 6, 100)) return;
  //check password agains our character set
  // 1 - a
  // 2 - a 1
  // 3 - A a 1
  // 4 - A a 1 @
  if (!containsCharacters(password, 4)) return;
  return true;
};
const validationConfirmPassword = () => {
  if (password.className !== 'valid') {
    setInvalid(confirmPassword, 'bạn phải điền đúng password trước');
    return;
  }
  // if they match
  if (password.value !== confirmPassword.value) {
    setInvalid(confirmPassword, 'password không trùng khớp');
    return;
  } else {
    setValid(confirmPassword);
  }
  return true;
};
const validationCity = () => {
  // check if empty
  if (checkIfEmpty(city)) return;
  //check if has only letters
  if (!checkIfOnlyLetter(city)) return;
  return true;
};

const validationPostalCode = () => {
  // check if empty
  if (checkIfEmpty(postalCode)) return;
  //check if has only letters
  if (!checkIfOnlyLetter(postalCode)) return;
  return true;
};
const validationAPT = () => {
  // check if empty
  if (checkIfEmpty(boxNumber)) return;
  //check if has only letters
  if (!checkIfOnlyLetter(boxNumber)) return;
  return true;
};
const validationBuilding = () => {
  // check if empty
  if (checkIfEmpty(buildingNumber)) return;
  //check if has only letters
  if (!checkIfOnlyLetter(buildingNumber)) return;
  return true;
};
const validationStreet = () => {
  // check if empty
  if (checkIfEmpty(street)) return;
  //check if has only letters
  if (!checkIfOnlyLetter(street)) return;
  return true;
};

const checkIfEmpty = inputField => {
  if (isEmpty(inputField.value.trim())) {
    //set field invalid
    setInvalid(inputField, `${inputField.name} không được để trống`);
    return true;
  } else {
    //set field valid
    setValid(inputField);
    return false;
  }
};

const isEmpty = value => {
  if (!value) return true;
  return false;
};

const setInvalid = (inputField, message) => {
  inputField.className = 'invalid';
  inputField.nextElementSibling.textContent = message.toUpperCase();
  inputField.nextElementSibling.style.color = validtaionColor.RED;
};

const setValid = inputField => {
  inputField.className = 'valid';
  inputField.nextElementSibling.textContent = '';

  // inputField.nextElementSibling.style.color = validtaionColor.RED;
};

const checkIfOnlyLetter = inputField => {
  if (/^[a-zA-z ]+$/.test(inputField.value)) {
    setValid(inputField);
    return true;
  } else {
    setInvalid(inputField, `${inputField.name} chỉ được chứa ký tự chữ`);
    return false;
  }
};

const meetLength = (inputField, minLength, maxLength) => {
  if (
    inputField.value.length >= minLength &&
    inputField.value.length < maxLength
  ) {
    setValid(inputField);
    return true;
  } else if (inputField.value.length < minLength) {
    setInvalid(
      inputField,
      `${inputField.name} chỉ được ít nhất ${minLength} ký tự`
    );
  } else {
    setInvalid(
      inputField,
      `${inputField.name} phải ngắn hơn ${maxLength} ký tự`
    );
  }
};

const containsCharacters = (inputField, code) => {
  let regEx;
  switch (code) {
    case 1:
      //letter
      regEx = /(?=.*[a-zA-z])/;
      return matchWithRegEx(regEx, inputField, 'phải có 1 ký tự chữ');
    case 2:
      //letter and numbers
      regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
      return matchWithRegEx(
        regEx,
        inputField,
        'phải có ít nhất 1 ký tự chữ và 1 ký tự số'
      );
    case 3:
      //upper case lower case
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
      return matchWithRegEx(
        regEx,
        inputField,
        ' phải có ít nhất 1 ký tự chữ và 1 ký tự số , 1 chữ viết hoa '
      );
    case 4:
      //uppercase lowercase number character
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
      return matchWithRegEx(
        regEx,
        inputField,
        'phải có ít nhất 1 ký tự chữ và 1 ký tự số, 1 chữ viết hoa và 1 ký tự đặc biệt'
      );
    case 5:
      regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return matchWithRegEx(regEx, inputField, ` email không tồn tại `);
    default:
      return false;
  }
};

const matchWithRegEx = (regEx, inputField, message) => {
  if (inputField.value.match(regEx)) {
    setValid(inputField);
    return true;
  } else {
    setInvalid(inputField, message);
    return false;
  }
};

const validationCountry = () => {
  if (country.value === 'empty') {
    document.getElementById(
      'test2'
    ).textContent = 'Chọn 1 quốc gia'.toUpperCase();
    document.getElementById('test2').style.color = validtaionColor.RED;
    return false;
  } else {
    setValid(country);
    return true;
  }
};

const validationGenders = () => {
  if (!gender[0].checked && !gender[1].checked && !gender[2].checked) {
    document.getElementById(
      'test'
    ).textContent = 'Bạn phải chọn 1 trong những giới tính'.toUpperCase();
    document.getElementById('test').style.color = validtaionColor.RED;

    return false;
  } else {
    return true;
  }
};
