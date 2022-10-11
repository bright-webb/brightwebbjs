/*
    Author: Bright Webb
    Date: 2022-10-1
    Description: This is a simple module of javascript to save coding time with lots of methods to use in your projects.
*/

module.exports =  class Bright{

    // version
    version(){
        return '1.0.0';
    }

    // configure a callback function to be executed when the DOM is fully loaded
    ready(callback){
        if(document.readyState != 'loading'){
            callback();
        }else{
            document.addEventListener('DOMContentLoaded', callback);
        }
    }

    

    // provide a callback function to be executed after a specified number of milliseconds
    delay(callback, milliseconds){
        setTimeout(callback, milliseconds);
    }


    // selector is the selector of the element
    select(selector){
        return document.querySelector(selector);
    }

    // select element by attribute
    selectByAttribute(attribute, value){
        return document.querySelector('['+attribute+'="'+value+'"]');
    }

    // select all elements by attribute
    selectAllByAttribute(attribute, value){
        return document.querySelectorAll('['+attribute+'="'+value+'"]');
    }

    // select element
    selectElement(selector, callback){
        var element =  document.querySelector(selector);
        callback(element);
    }

    // select value of an input element
    selectValue(selector){
        return document.querySelector(selector).value;
    }

    // select all elements
    selectAll(selector){
        return document.querySelectorAll(selector);
    }

    // The mount method is used to insert html inside an element
    mount(selector, html){
        var element =  document.querySelector(selector);
        element.innerHTML = html;
    }

    // The unmount method is used to remove html inside an element
    unmount(selector){
        var element =  document.querySelector(selector);
        element.innerHTML = '';
    }

    // The component method is used to create a div element with an id attribute and dynamically insert html content inside it
    component(name, html){
        var element = document.createElement('div');
        element.setAttribute('id', name);
        element.innerHTML = html;
        document.body.appendChild(element);
    }

   // Insert an element inside an element
    insert(selector, html){
        var element =  document.querySelector(selector);
        element.insertAdjacentHTML('beforeend', html);
    }

    // Insert an element before an element
    insertBefore(selector, html){
        var element =  document.querySelector(selector);
        element.insertAdjacentHTML('beforebegin', html);
    }

    // Insert an element after an element
    insertAfter(selector, html){
        var element =  document.querySelector(selector);
        element.insertAdjacentHTML('afterend', html);
    }


    // provide method to add a class to an element if it doesn't have it and remove it if it has it
    switchClass(selector, className){
        var element =  document.querySelector(selector);
        if(element.classList.contains(className)){
            element.classList.remove(className);
        }else{
            element.classList.add(className);
        }
    }

    // each method
    each(array, callback){
        for(let i = 0; i < array.length; i++){
            callback.call(array[i], i);
        }
    }

    // reference to the current element
    current(callback){
        callback.call(this);
    }

    // reference to the current function
    self(callback){
        callback(this);
    }

    // for each loop
    forEach(array, callback){
        for(let i = 0; i < array.length; i++){
            callback.call(array[i], i);
        }
    }

    // add event listener 
    on(selector, event, callback){
        var element =  document.querySelector(selector);
        element.addEventListener(event, callback);
    }

    // add click event listener
    click(selector, callback){
        this.on(selector, 'click', callback);
    }

    // add submit event listener
    submit(selector, callback){
        this.on(selector, 'submit', callback);
    }

    // add change event listener
    change(selector, callback){
        this.on(selector, 'change', callback);
    }

    // add keyup event listener
    keyup(selector, callback){
        this.on(selector, 'keyup', callback);
    }

    // add keydown event listener
    keydown(selector, callback){
        this.on(selector, 'keydown', callback);
    }

    // add keypress event listener
    keypress(selector, callback){
        this.on(selector, 'keypress', callback);
    }

    // add mouseover event listener
    mouseover(selector, callback){
        this.on(selector, 'mouseover', callback);
    }

    // add mouseout event listener
    mouseout(selector, callback){
        this.on(selector, 'mouseout', callback);
    }

    // add mousemove event listener
    mousemove(selector, callback){
        this.on(selector, 'mousemove', callback);
    }

    // add mouseenter event listener
    mouseenter(selector, callback){
        this.on(selector, 'mouseenter', callback);
    }

    // add mouseleave event listener
    mouseleave(selector, callback){
        this.on(selector, 'mouseleave', callback);
    }

    // select element by id
    selectById(id){
        return document.getElementById(id);
    }

    // select element by class
    selectByClass(className){
        return document.getElementsByClassName(className);
    }

    // select element by tag
    selectByTag(tag){
        return document.getElementsByTagName(tag);
    }

    // select element by name
    selectByName(name){
        return document.getElementsByName(name);
    }

    // find element
    find(selector, callback){
        var element =  document.querySelector(selector);
        callback.call(element);
    }

    // find all elements
    findAll(selector){
        return document.querySelectorAll(selector);
    }
    // find all elements with a class
    findAllByClass(className){
        return document.querySelector('.' + className);
    }
    // find content of an element
    findContent(selector){
        return  document.querySelector(selector).innerHTML;
    }

    // find element by id
    findById(id, callback){
        this.find(`#${id}`, callback);
    }

    // find element by class
    findByClass(className, callback){
        this.find(`.${className}`, callback);
    }

    // find element by tag
    findByTag(tag, callback){
        this.find(tag, callback);
    }

    // get position of an element
    getPosition(selector){
        return  document.querySelector(selector).getBoundingClientRect();
    }

    // make an element visible
    show(selector){
        document.querySelector(selector).style.display = 'block';
    }

    // make an element invisible
    hide(selector){
        document.querySelector(selector).style.display = 'none';
    }

    // add class to an element
    addClass(selector, className){
        document.querySelector(selector).classList.add(className);
    }

    // remove class from an element
    removeClass(selector, className){
        document.querySelector(selector).classList.remove(className);
    }

    // toggle class of an element
    toggleClass(selector, className){
        document.querySelector(selector).classList.toggle(className);
    }

    // check if an element has a class
    hasClass(selector, className){
        return document.querySelector(selector).classList.contains(className);
    }

    // set attribute of an element
    setAttribute(selector, attribute, value){
        document.querySelector(selector).setAttribute(attribute, value);
    }

    // get attribute of an element
    getAttribute(selector, attribute){
        return  document.querySelector(selector).getAttribute(attribute);
    }

    // select data attribute of an element
    selectData(selector, data){
        return  document.querySelector(selector).dataset[data];
    }

    // select style attribute of an element
    selectStyle(selector, style){
        return  document.querySelector(selector).style[style];
    }

    // set style of an element
    setStyle(selector, style, value){
         document.querySelector(selector).style[style] = value;
    }


    // remove attribute of an element
    removeAttribute(selector, attribute){
         document.querySelector(selector).removeAttribute(attribute);
    }


    // get style of an element
    getStyle(selector, style){
        return  document.querySelector(selector).style[style];
    }

    // set content of an element
    setContent(selector, content){
         document.querySelector(selector).innerHTML = content;
    }

    // get content of an element
    getContent(selector){
        return  document.querySelector(selector).innerHTML;
    }

    // set value of an element
    setValue(selector, value){
         document.querySelector(selector).value = value;
    }

    // get value of an element
    getValue(selector){
        return  document.querySelector(selector).value;
    }

    // set html of an element
    setHtml(selector, html){
         document.querySelector(selector).innerHTML = html;
    }

    // get html of an element
    getHtml(selector){
        return  document.querySelector(selector).innerHTML;
    }

    // set text of an element
    setText(selector, text){
         document.querySelector(selector).innerText = text;
    }

    // get text of an element
    getText(selector){
        return document.querySelector(selector).innerText;
    }

    // set background color of an element
    setBackgroundColor(selector, color){
         document.querySelector(selector).style.backgroundColor = color;
    }

    // get background color of an element
    getBackgroundColor(selector){
        return  document.querySelector(selector).style.backgroundColor;
    }

    // set color of an element
    setColor(selector, color){
         document.querySelector(selector).style.color = color;
    }

    // get color of an element
    getColor(selector){
        return  document.querySelector(selector).style.color;
    }

    // parent of an element
    parent(selector){
        return  document.querySelector(selector).parentNode;
    }

    // grandparent of an element
    grandparent(selector){
        return  document.querySelector(selector).parentNode.parentNode;
    }

    // child of an element
    child(selector){
        return  document.querySelector(selector).childNodes;
    }


    // children of an element
    children(selector){
        return  document.querySelector(selector).children;
    }

    // first child of an element
    firstChild(selector){
        return  document.querySelector(selector).firstChild;
    }

    // last child of an element
    lastChild(selector){
        return  document.querySelector(selector).lastChild;
    }

    // next sibling of an element
    nextSibling(selector){
        return  document.querySelector(selector).nextSibling;
    }

    // previous sibling of an element
    previousSibling(selector){
        return  document.querySelector(selector).previousSibling;
    }

    // append child to an element
    appendChild(selector, child){
         document.querySelector(selector).appendChild(child);
    }

    // prepend child to an element
    prependChild(selector, child){
         document.querySelector(selector).prepend(child);
    }

    // remove child from an element
    removeChild(selector, child){
         document.querySelector(selector).removeChild(child);
    }

    // remove an element
    remove(selector){
         document.querySelector(selector).remove();
    }

    // clone an element
    clone(selector){
        return  document.querySelector(selector).cloneNode(true);
    }

    // create an element
    create(tag){
        return document.createElement(tag);
    }


    // append method
    append(selector, content){
         document.querySelector(selector).innerHTML += content;
    }


    // make a request to a url
    request(url, callback){
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function(){
            if(request.status >= 200 && request.status < 400){
                callback(request.responseText);
            }
        };
        request.send();
    }

    // make a request to a url and get json
    requestJson(url, callback){
        this.request(url, function(response){
            callback(JSON.parse(response));
        });
    }

    // make a request to a url and get xml
    requestXml(url, callback){
        this.request(url, function(response){
            callback(new DOMParser().parseFromString(response, 'text/xml'));
        });
    }

    // make a request to a url and get html
    requestHtml(url, callback){
        this.request(url, function(response){
            callback(new DOMParser().parseFromString(response, 'text/html'));
        });
    }

    // make a request to a url and get text
    requestText(url, callback){
        this.request(url, function(response){
            callback(response);
        });
    }

    // make a request to a url and get css
    requestCss(url, callback){
        this.request(url, function(response){
            callback(new DOMParser().parseFromString(response, 'text/css'));
        });
    }

    // make a request to a url and get javascript
    requestJs(url, callback){
        this.request(url, function(response){
            callback(new DOMParser().parseFromString(response, 'text/javascript'));
        });
    }

    // make a request to a url and get jsonp
    requestJsonp(url, callback){
        this.request(url, function(response){
            callback(JSON.parse(response));
        });
    }

    // make a request to a url and get image
    requestImage(url, callback){
        this.request(url, function(response){
            callback(response);
        });
    }

    // make a request to the server
    requestServer(url, callback){
        this.request(url, function(response){
            callback(response);
        });
    }

    // perform ajax request
    ajax(options){
        var request = new XMLHttpRequest();
        request.open(options.method, options.url, true);
        request.onload = function(){
            if(request.status >= 200 && request.status < 400){
                options.success(request.responseText);
            }
        };
        request.send();
    }

    // perform ajax get request
    ajaxGet(url, callback){
        this.ajax({
            method: 'GET',
            url: url,
            success: callback
        });
    }

    // perform ajax post request
    ajaxPost(url, callback){
        this.ajax({
            method: 'POST',
            url: url,
            success: callback
        });
    }

    // perform ajax put request
    ajaxPut(url, callback){
        this.ajax({
            method: 'PUT',
            url: url,
            success: callback
        });
    }

    // perform ajax delete request
    ajaxDelete(url, callback){
        this.ajax({
            method: 'DELETE',
            url: url,
            success: callback
        });
    }

    // post request to a server
    post(url, data, callback){
        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.onload = function(){
            if(request.status >= 200 && request.status < 400){
                callback(request.responseText);
            }
        };
        request.send(data);
    }

    // get request to a server
    get(url, data, callback){
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.onload = function(){
            if(request.status >= 200 && request.status < 400){
                callback(request.responseText);
            }
        };
        request.send(data);
    }

    // put request to a server
    put(url, data, callback){
        var request = new XMLHttpRequest();
        request.open('PUT', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.onload = function(){
            if(request.status >= 200 && request.status < 400){
                callback(request.responseText);
            }
        };
        request.send(data);
    }

   // get javascript
    getJs(url, callback){
        this.get(url, null, function(response){
            callback(new DOMParser().parseFromString(response, 'text/javascript'));
        });
    }

    // get css
    getCss(url, callback){
        this.get(url, null, function(response){
            callback(new DOMParser().parseFromString(response, 'text/css'));
        });
    }

    // get html
    getHtml(url, callback){
        this.get(url, null, function(response){
            callback(new DOMParser().parseFromString(response, 'text/html'));
        });
    }

    // load javascript
    loadJs(url){
        var script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
    }

    // load css
    loadCss(url){
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    }

    // load html
    loadHtml(url, callback){
        this.get(url, null, function(response){
            callback(new DOMParser().parseFromString(response, 'text/html'));
        });
    }

    // load image
    loadImage(url, callback){
        var image = new Image();
        image.onload = function(){
            callback(image);
        };
    }

    // load json
    loadJson(url, callback){
        this.get(url, null, function(response){
            callback(JSON.parse(response));
        });
    }

    // load xml
    loadXml(url, callback){
        this.get(url, null, function(response){
            callback(new DOMParser().parseFromString(response, 'text/xml'));
        });
    }


    // bind an event to an element
    bind(selector, event, callback){
         document.querySelector(selector).addEventListener(event, callback);
    }

    // unbind an event from an element
    unbind(selector, event, callback){
         document.querySelector(selector).removeEventListener(event, callback);
    }

    // model data to an element
    model(selector, data){
         document.querySelector(selector).innerHTML = data;
    }

    // using function to model data to an element
    using(selector, callback){
         document.querySelector(selector).innerHTML = callback();
    }
    // template function
    template(selector, data){
        var template =  document.querySelector(selector).innerHTML;
        var output = template.replace(/{([^{}]*)}/g, function(a, b){
            var r = data[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        });
        return output;
    }

    // Render a template to an element
    render(selector, template, data){
         document.querySelector(selector).innerHTML = this.template(template, data);
    }

    // replace content of an element
    replace(selector, content){
         document.querySelector(selector).outerHTML = content;
    }

    // get the value of a form element
    getFormValue(selector){
        return  document.querySelector(selector).value;
    }

    // set the value of a form element
    setFormValue(selector, value){
         document.querySelector(selector).value = value;
    }

    // Repeat function
    repeat(callback, times){
        for(var i = 0; i < times; i++){
            callback();
        }
    }

    // Repeat a function with a delay
    repeatWithDelay(callback, times, delay){
        for(var i = 0; i < times; i++){
            setTimeout(callback, delay);
        }
    }

    // delete element from dom
    delete(selector){
         document.querySelector(selector).remove();
    }

    // delete all elements from dom
    deleteAll(selector){
         document.querySelectorAll(selector).forEach(function(element){
            element.remove();
        });
    }

    // bind data to an element from model
    bindData(selector, model){
         document.querySelector(selector).innerHTML = model;
    }


    // serialize form data
    serialize(selector){
        var form =  document.querySelector(selector);
        var data = {};
        for(var i = 0; i < form.elements.length; i++){
            var element = form.elements[i];
            data[element.name] = element.value;
        }
        return data;
    }

    // form validation
    validate(selector, rules){
        var form =  document.querySelector(selector);
        var errors = [];
        for(var i = 0; i < form.elements.length; i++){
            var element = form.elements[i];
            var rule = rules[element.name];
            if(rule){
                var value = element.value;
                if(rule.required && !value){
                    errors.push(element.name + ' is required');
                }
                if(rule.min && value.length < rule.min){
                    errors.push(element.name + ' must be at least ' + rule.min + ' characters');
                }
                if(rule.max && value.length > rule.max){
                    errors.push(element.name + ' must be less than ' + rule.max + ' characters');
                }
                if(rule.pattern && !rule.pattern.test(value)){
                    errors.push(element.name + ' is invalid');
                }
            }
        }
        return errors;
    }

    // accept only numbers
    acceptNumbers(selector){
         document.querySelector(selector).addEventListener('keypress', function(event){
            if(event.which < 48 || event.which > 57){
                event.preventDefault();
            }
        });
    }

    // accept only letters
    acceptLetters(selector){
         document.querySelector(selector).addEventListener('keypress', function(event){
            if(event.which < 65 || event.which > 90){
                event.preventDefault();
            }
        });
    }

    // accept only letters and numbers
    acceptLettersNumbers(selector){
         document.querySelector(selector).addEventListener('keypress', function(event){
            if(event.which < 48 || event.which > 57 && event.which < 65 || event.which > 90){
                event.preventDefault();
            }
        });
    }

    // match characters in a string
    matchCharacters(string, characters){
        var matches = [];
        for(var i = 0; i < string.length; i++){
            if(characters.indexOf(string[i]) > -1){
                matches.push(string[i]);
            }
        }
        return matches;
    }

    // match numbers in a string
    matchNumbers(string){
        return this.matchCharacters(string, '0123456789');
    }

    // match letters in a string
    matchLetters(string){
        return this.matchCharacters(string, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    // regular expression to allow only characters
    allowCharacters(characters){
        return new RegExp('^[' + characters + ']+$');
    }

    // regular expression to allow only numbers
    allowNumbers(){
        return this.allowCharacters('0123456789');
    }

    // regular expression to allow only letters
    allowLetters(){
        return this.allowCharacters('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    // check if a string contains a character
    containsCharacter(string, character){
        return string.indexOf(character) > -1;
    }

    // check if a string contains a number
    containsNumber(string){
        return this.containsCharacter(string, '0123456789');
    }

    // check if password is strong
    isStrongPassword(password){
        return password.length >= 8 && this.containsNumber(password) && this.containsCharacter(password, '!@#$%^&*()_+');
    }

    // if email is valid
    isEmail(email){
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // if url is valid
    isUrl(url){
        return /^(http|https):\/\/[^\s]+$/.test(url);
    }

    // if phone number is valid
    isPhoneNumber(phone){
        return /^\d{3}-\d{3}-\d{4}$/.test(phone);
    }

    // if zip code is valid
    isZipCode(zip){
        return /^\d{5}$/.test(zip);
    }

    // if date is valid
    isDate(date){
        return /^\d{4}-\d{2}-\d{2}$/.test(date);
    }

    // if time is valid
    isTime(time){
        return /^\d{2}:\d{2}$/.test(time);
    }

    // if credit card is valid
    isCreditCard(card){
        return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(card);
    }

    // if social security number is valid
    isSocialSecurityNumber(ssn){
        return /^\d{3}-\d{2}-\d{4}$/.test(ssn);
    }

    // if ip address is valid
    isIpAddress(ip){
        return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ip);
    }

    // get current date
    currentDate(){
        var date = new Date();
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }

    // get current time
    currentTime(){
        var date = new Date();
        return date.getHours() + ':' + date.getMinutes();
    }

    // get current date and time
    currentDateTime(){
        return this.currentDate() + ' ' + this.currentTime();
    }

    // get current year
    currentYear(){
        return new Date().getFullYear();
    }

    // get current month
    currentMonth(){
        var month = new Date().getMonth() + 1;
        return month < 10 ? '0' + month : month;
    }

    // get current day
    currentDay(){
        var day = new Date().getDate();
        return day < 10 ? '0' + day : day;
    }

    // get current hour
    currentHour(){
        var hour = new Date().getHours();
        return hour < 10 ? '0' + hour : hour;
    }

    // get current minute
    currentMinute(){
        var minute = new Date().getMinutes();
        return minute < 10 ? '0' + minute : minute;
    }


    // countdown method
    countdown(selector, seconds, callback){
        var element =  document.querySelector(selector);
        var interval = setInterval(function(){
            element.innerHTML = seconds;
            seconds--;
            if(seconds < 0){
                clearInterval(interval);
                callback();
            }
        }, 1000);
    }

    // generate random number
    randomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // generate random color
    randomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for(var i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // get random item from array
    randomItem(array){
        return array[Math.floor(Math.random() * array.length)];
    }

    // array shuffle
    shuffle(array){
        var currentIndex = array.length, temporaryValue, randomIndex;
        while(0 !== currentIndex){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    // get random string
    randomString(length){
        var string = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for(var i = 0; i < length; i++){
            string += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return string;
    }

    // get random hex string
    randomHexString(length){
        var string = '';
        var characters = '0123456789ABCDEF';
        for(var i = 0; i < length; i++){
            string += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return string;
    }

    // list method
    list(selector, array){
        var element =  document.querySelector(selector);
        var html = '';
        for(var i = 0; i < array.length; i++){
            html += '<li>' + array[i] + '</li>';
        }
        element.innerHTML = html;
    }


    //scroll percentage
    scrollPercentage(){
        var h = document.documentElement, b = document.body, st = 'scrollTop', sh = 'scrollHeight';
        return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    }

    // scroll progress bar
    scrollProgressBar(selector){
        var element =  document.querySelector(selector);
        var progress = this.scrollPercentage();
        element.style.width = progress + '%';
    }

    // scroll to top
    scrollTop(){
        var c = document.documentElement.scrollTop || document.body.scrollTop;
        if(c > 0){
            window.requestAnimationFrame(this.scrollTopAnimation);
            window.scrollTo(0, c - c / 8);
        }
    }

    // scroll to bottom
    scrollBottom(){
        var c = document.documentElement.scrollTop || document.body.scrollTop;
        if(c < document.body.scrollHeight){
            window.requestAnimationFrame(this.scrollBottomAnimation);
            window.scrollTo(0, c + c / 8);
        }
    }

    // scroll to element
    scrollToElement(selector){
        var element =  document.querySelector(selector);
        var c = document.documentElement.scrollTop || document.body.scrollTop;
        if(c > element.offsetTop){
            window.requestAnimationFrame(this.scrollToElementAnimation);
            window.scrollTo(0, c - c / 8);
        }
        if(c < element.offsetTop){
            window.requestAnimationFrame(this.scrollToElementAnimation);
            window.scrollTo(0, c + c / 8);
        }
    }

    // progress bar
    progressBar(selector, percent){
        var element =  document.querySelector(selector);
        element.style.width = percent + '%';
    }

    // progress circle
    progressCircle(selector, percent){
        var element =  document.querySelector(selector);
        var radius = element.getAttribute('r');
        var circumference = radius * 2 * Math.PI;
        element.style.strokeDasharray = circumference + ' ' + circumference;
        element.style.strokeDashoffset = circumference - percent / 100 * circumference;
    }

    // progress bar animation
    progressBarAnimation(selector){
        var elements =  document.querySelector(selector)
        for(var i = 0; i < elements.length; i++){
            var element = elements[i];
            var percent = element.getAttribute('data-percent');
            var progress = 0;
            var interval = setInterval(function(){
                element.style.width = progress + '%';
                progress++;
                if(progress > percent){
                    clearInterval(interval);
                }
            }, 10);
        }
    }

    // progress circle animation
    progressCircleAnimation(selector){
        var elements =  document.querySelector(selector)
        for(var i = 0; i < elements.length; i++){
            var element = elements[i];
            var percent = element.getAttribute('data-percent');
            var radius = element.getAttribute('r');
            var circumference = radius * 2 * Math.PI;
            element.style.strokeDasharray = circumference + ' ' + circumference;
            var progress = 0;
            var interval = setInterval(function(){
                element.style.strokeDashoffset = circumference - progress / 100 * circumference;
                progress++;
                if(progress > percent){
                    clearInterval(interval);
                }
            }, 10);
        }
    }

    // animate the progress bar
    animateProgressBar(selector){
        var progressBar =  document.querySelector(selector);
        var progress = 0;
        var interval = setInterval(function(){
            progress += 1;
            progressBar.style.width = progress + '%';
            progressBar.innerHTML = progress + '%';
            if(progress >= 100){
                clearInterval(interval);
            }
        }, 100);
    }

    // show the progress bar
    showProgressBar(){
        document.getElementById('progress').style.display = 'block';
    }

    // hide the progress bar
    hideProgressBar(){
        document.getElementById('progress').style.display = 'none';
    }

    // sticky header
    stickyHeader(selector, className){
        var header =  document.querySelector(selector);
        var sticky = header.offsetTop;
        window.onscroll = function(){
            if(window.pageYOffset > sticky){
                header.classList.add(className);
            }else{
                header.classList.remove(className);
            }
        }
    }

    // show the header
    showHeader(selector){
         document.querySelector(selector).style.display = 'block';
    }


    // mask method
    mask(string, mask){
        var i = 0;
        var value = mask.replace(/#/g, function(){
            return string[i++] || '';
        });
        return value;
    }

    // unmask method
    unmask(string){
        return string.replace(/\D/g, '');
    }

    // image preview
    imagePreview(selector, target){
        var image =  document.querySelector(selector);
        var imagePreview =  document.querySelector(target);
        image.addEventListener('change', function(){
            var file = this.files[0];
            if(file){
                var reader = new FileReader();
                reader.addEventListener('load', function(){
                    imagePreview.setAttribute('src', this.result);
                });
                reader.readAsDataURL(file);
            }
        });
    }

    // image preview with progress bar
    imagePreviewWithProgressBar(selector, target, progress){
        var image =  document.querySelector(selector);
        var imagePreview =  document.querySelector(target);
        var progressBar =  document.querySelector(progress);
        image.addEventListener('change', function(){
            var file = this.files[0];
            if(file){
                var reader = new FileReader();
                reader.addEventListener('loadstart', function(){
                    progressBar.style.display = 'block';
                    progressBar.style.width = '0%';
                });
                reader.addEventListener('progress', function(event){
                    if(event.lengthComputable){
                        var percent = event.loaded / event.total;
                        progressBar.style.width = percent * 100 + '%';
                    }
                });
                reader.addEventListener('load', function(){
                    imagePreview.setAttribute('src', this.result);
                    progressBar.style.display = 'none';
                });
                reader.readAsDataURL(file);
            }
        });
    }


    // create html element
    createElement(tag, attributes){
        var element = document.createElement(tag);
        for(var attribute in attributes){
            element.setAttribute(attribute, attributes[attribute]);
        }
        return element;
    }

    // create html element with text
    createElementWithText(tag, attributes, text){
        var element = document.createElement(tag);
        for(var attribute in attributes){
            element.setAttribute(attribute, attributes[attribute]);
        }
        element.appendChild(document.createTextNode(text));
        return element;
    }

    // count characters in a string
    count(string){
        return string.length;
    }

    // count words in a string
    countWords(string){
        return string.split(' ').length;
    }

    // if element is in viewport
    inViewport(element){
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // is a method
    is(selector, method){
        var element =  document.querySelector(selector);
        return element[method];
    }

    // is a function
    isFunction(selector, method){
        var element =  document.querySelector(selector);
        return typeof element[method] === 'function';
    }

    // is a string
    isString(selector, method){
        var element =  document.querySelector(selector);
        return typeof element[method] === 'string';
    }

    // is a number
    isNumber(selector, method){
        var element =  document.querySelector(selector);
        return typeof element[method] === 'number';
    }

    // is an object
    isObject(selector, method){
        var element =  document.querySelector(selector);
        return typeof element[method] === 'object';
    }

    // is an array
    isArray(selector, method){
        var element =  document.querySelector(selector);
        return Array.isArray(element[method]);
    }

    // is a boolean
    isBoolean(selector, method){
        var element =  document.querySelector(selector);
        return typeof element[method] === 'boolean';
    }

    // check if element is empty
    isEmpty(selector){
        var element =  document.querySelector(selector);
        return element.innerHTML === '';
    }

    // check if element is visible
    isVisible(selector){
        var element =  document.querySelector(selector);
        return element.style.display !== 'none';
    }

    // check if element is hidden
    isHidden(selector){
        var element =  document.querySelector(selector);
        return element.style.display === 'none';
    }

    // check if element is checked
    isChecked(selector){
        var element =  document.querySelector(selector);
        return element.checked;
    }

    // check if element is selected
    isSelected(selector){
        var element =  document.querySelector(selector);
        return element.selected;
    }

    // check if element is disabled
    isDisabled(selector){
        var element =  document.querySelector(selector);
        return element.disabled;
    }

    // check if element is enabled
    isEnabled(selector){
        var element =  document.querySelector(selector);
        return !element.disabled;
    }

    // if an item is in an array
    inArray(item, array){
        return array.indexOf(item) !== -1;
    }

    // if an item is in an object
    inObject(item, object){
        return object.hasOwnProperty(item);
    }

    // if an item is in a string
    inString(item, string){
        return string.indexOf(item) !== -1;
    }  

}
