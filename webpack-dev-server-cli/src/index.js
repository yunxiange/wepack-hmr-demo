require('./app.css');

var ele = document.getElementById('ele');

ele.style.color = 'blue';

if (module.hot) {
    module.hot.accept();
}
