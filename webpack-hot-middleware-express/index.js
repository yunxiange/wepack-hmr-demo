require('./app.css');

var ele = document.createElement('p');

ele.innerHTML = 'clone';
ele.style.color = 'blue';

document.body.appendChild(ele);

if (module.hot) {
    module.hot.accept();
}
