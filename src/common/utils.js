import moment from 'moment';

export const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

export const setCookie = (cname, cvalue, exdays) => {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const _getFetch = ((URL) => {
  let Urls="";
  const token = getCookie("token");
  if(URL.indexOf("?") === -1){
    Urls = URL +"?token="+ token
  } else {
    Urls = URL+ "&&token=" + token
  }
  console.log(Urls);
  return new Promise((resolve, reject) => {
    fetch( Urls )
    .then((res)=>res.json())
    .then((data)=>{
      data = JSON.parse(data);
      if(data.status === 200){
        resolve(data.results);
      }
      else if(data.status === 1103){
        console.log(data);
        resolve([]);
      }else{
        console.log(data);
        resolve(data);
      }
    })
    .catch((e) => {
      reject(e);
    })
  })
});

export const _putFetch = (URL, body) =>{
  let Urls="";
  const token = getCookie("token");
  if(URL.indexOf("?") === -1){
    Urls = URL +"?token="+ token
  } else {
    Urls = URL+ "&&token=" + token
  }
  return new Promise((resolve, reject)=>{
    fetch( Urls, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then((res)=>res.json())
    .then((res)=>JSON.parse(res))
    .then((data)=>{
      if(data.status === 200){
        resolve(data.results);
      }else {
        console.log(data);
        resolve(data)
      };
    }).catch((e)=>{
      console.log(e);
      reject(e);
    })
  });
}

export const _postFetch = (URL, body) =>{
  let Urls="";
  const token = getCookie("token");
  console.log(URL);
  if(URL.indexOf("?") === -1){
    Urls = URL +"?token="+ token
  } else {
    Urls = URL+ "&&token=" + token
  }
  return new Promise((resolve, reject)=>{
    fetch( Urls, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then((res)=>res.json())
    .then((res)=>JSON.parse(res))
    .then((data)=>{
      if(data.status === 200){
        resolve(data.results);
      }else {
        console.log(data);
        resolve(data)
      };
    }).catch((e)=>{
      console.log(e);
      reject(e);
    })
  });
}

export const _postImgFetch = (URL, body) =>{
  let Urls="";
  const token = getCookie("token");
  if(URL.indexOf("?") === -1){
    Urls = URL +"?token="+ token
  } else {
    Urls = URL+ "&&token=" + token
  }
  return new Promise((resolve, reject)=>{
    fetch( Urls, {
      method: 'POST',
      body: body,
    })
    .then((res)=>res.json())
    .then((res)=>JSON.parse(res))
    .then((data)=>{
      if(data.status === 200){
        resolve(data.results);
      }else {
        console.log(data);
        resolve(data)
      };
    }).catch((e)=>{
      console.log(e);
      reject(e);
    })
  });
}


export const _deleteFetch = (URL) =>{
  let Urls="";
  const token = getCookie("token");
  if(URL.indexOf("?") === -1){
    Urls = URL +"?token="+ token
  } else {
    Urls = URL+ "&&token=" + token
  }
  console.log(Urls);
  return new Promise((resolve, reject)=>{
    fetch( Urls, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((res)=>res.json())
    .then((res)=>JSON.parse(res))
    .then((data)=>{
      if(data.status === 200){
        resolve(data.results);
      }else {
        console.log(data);
        resolve(data)
      };
    }).catch((e)=>{
      console.log(e);
      reject(e);
    })
  });
}

export const getWrittenDate = (date) => {
  var nowWrapped = moment(new Date());
  var dateWrapped = moment(date);
  var differenceWrapped = moment(nowWrapped - dateWrapped);
  var value;
  if(differenceWrapped < 60*1000)
    value = '지금';
  else if(differenceWrapped>= 60*1000 && differenceWrapped < 60*60*1000)
    value = parseInt(differenceWrapped%(60*60*1000)/(60*1000)).toString() + '분 전';
  else if(differenceWrapped>= 60*60*1000 && differenceWrapped < 24*60*60*1000)
    value = parseInt(differenceWrapped%(24*60*60*1000)/(60*60*1000)).toString() + "시간 전";
  else if(differenceWrapped>= 24*60*60*1000 && differenceWrapped < 7*24*60*60*1000)
    value = parseInt(differenceWrapped%(7*24*60*60*1000)/(24*60*60*1000)) + "일 전";
  else {
    differenceWrapped += (9*60*60*1000);
    var written = dateWrapped.toDate();
    let year =  date.substring(0,4);
    let month = date.substring(5,7);
    let day = date.substring(8,10);
    if(month.substring(0,1).indexOf(0) !== -1) {
      month = date.substring(6,7);
    }
    if(day.substring(0,1).indexOf(0) !== -1) {
      day = date.substring(9,10);
    }
    value = year + '년 ' + month + '월 ' + day + '일';
  }
  return value;
};


export const getObjectDate = (date) => {
  var nowWrapped = moment(new Date());
  var dateWrapped = moment(date);
  var differenceWrapped = moment(nowWrapped - dateWrapped);
  var value;
  var dateNum;
  var dateStr;
  if(differenceWrapped < 60*1000){
    value = '지금';
    dateStr= "오늘";
  }
  else if(differenceWrapped>= 60*1000 && differenceWrapped < 60*60*1000){
    value = parseInt(differenceWrapped%(60*60*1000)/(60*1000)).toString() + '분 전';
    dateStr= "오늘";
  }
  else if(differenceWrapped>= 60*60*1000 && differenceWrapped < 24*60*60*1000){
      value = parseInt(differenceWrapped%(24*60*60*1000)/(60*60*1000)).toString() + "시간 전";
      dateStr= "오늘";
  }
  else if(differenceWrapped>= 24*60*60*1000 && differenceWrapped < 7*24*60*60*1000){
    value = parseInt(differenceWrapped%(7*24*60*60*1000)/(24*60*60*1000))
    if(value ===1)
    dateStr= "어제";
    else{
      dateStr= value+"일 전"
    }
    value+=+ "일 전";
  }
  else {
    differenceWrapped += (9*60*60*1000);
    var written = dateWrapped.toDate();
    let year =  date.substring(0,4);
    let month = date.substring(5,7);
    let day = date.substring(8,10);
    if(month.substring(0,1).indexOf(0) !== -1) {
      month = date.substring(6,7);
    }
    if(day.substring(0,1).indexOf(0) !== -1) {
      day = date.substring(9,10);
    }
    value = year + '년 ' + month + '월 ' + day + '일';
    dateStr = value;
  }
  var results={
    value: value,
    dateStr: dateStr
  }
  return results;
};
