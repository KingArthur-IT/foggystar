

var xhr = new XMLHttpRequest();

json = JSON.stringify({
  "TYPE": "user-register",
  "data": {
    "email": "aglanton31@gmail.com",
    "password": "testtest41242",
    "currency": "EUR",
    "registrationPromoCode": "",
    "agreedWithTermsAndConditions": true,
    "agreeWithSelfExcluded": true,
    "ageConfirmed": true,
    "passwordRepeat": "testtest41242"
  },
  "fields": [
    "email",
    "password",
    "currency",
    "registrationPromoCode",
    "agreedWithTermsAndConditions",
    "agreeWithSelfExcluded",
    "ageConfirmed",
    "passwordRepeat"
  ]
});

xhr.open('POST', 'https://foggystar.com/api/v1/validate/user-register?lang=en');
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.send(json);

xhr.onload = function() {
  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
  } else { // если всё прошло гладко, выводим результат
    alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
  }
console.log(xhr.responseText)
};

xhr.onerror = function() {
  alert("Запрос не удался");
};


// Пример ответа
// {"code":200,"status":"success","data":{"result":false,"errors":{"password":"Password strength is weak"}}}
// {"code":200,"status":"success","data":{"result":true,"errors":[]}}