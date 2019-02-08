var assert = require("assert");
/*PRUEBAS DE HTML*/
describe('Tarea 2', () => {
    it('encontrar el título de la página', () => {
        browser.url('/');
        var titulo = browser.getTitle();
        assert.equal(titulo,"Tarea 2");
    });
});

describe('Buscar elemento', () =>{
    before(function(){
        console.log("INICIO DE TEST Buscar");
    });
   it('Saber si existe el botón de cancelar', ()=>{
       browser.url('/');
       var isPresent = false;
       if($('#cancel-button')!= ""){
        isPresent = true;
       }
       assert(isPresent);
   });
    after(function(){
        console.log("TERMINANDO TEST Buscar")
    });
});

describe('Insertar info en login', () => {
    before(function(){
        console.log("INICIO DE TEST");
    });
    it('debe ser login exitoso',() => {
        browser.url('/');
        var user = $('#username-input');
        var pwd = $('#password-input');
        var button = $('#button-submit');

        user.setValue('A01335037@itesm.mx');
        pwd.setValue('123456789');
        button.click();

        var destino = browser.getTitle();
        assert.equal(destino,"Regístrate");

    });
    after(function(){
        console.log("TERMINANDO LOGIN")
    });
});



/*PRUEBAS DE CSS*/
describe('Checar font de login',()=>{
    before(function(){
        console.log("INICIO DE TEST FONT");
    });
    it('Ver font del boton',()=>{
        browser.url("/");
        var boton = $('#submit-button');
        var font = boton.getCSSProperty('font-family');
        console.log("FONT: " + font.value);
        assert.equal(font.value, "roboto")
    });
    after(function(){
        console.log("TERMINADO FONT");
    });
});
describe('Checar tamaño de imagen de header',()=>{
    before(function(){
        console.log("INICIO DE TEST IMG");
    });
    it('Ver tamaño de image header',()=>{
        browser.url("/");
        var headerimg = $('#PokestopLogo');
        var width = headerimg.getCSSProperty('width');
        var height = headerimg.getCSSProperty('height');
        
        assert.equal((width.value=="120px" && height.value == "120px"), true)
    });
    after(function(){
        console.log("TERMINADO IMG");
    });
});
describe('Checar tamaño de font de inputs',()=>{
    before(function(){
        console.log("INICIO DE TEST font size");
    });
    it('Ver tamaño de image header',()=>{
        browser.url("/");
        var user = $('#username-input');
        var password = $('#password-input');
        var userFS = user.getCSSProperty('font-size');
        var passwordFS = password.getCSSProperty('font-size');
        
        assert.equal((userFS.value=="16px" && passwordFS.value == "16px"), true)
    });
    after(function(){
        console.log("TERMINADO FONT SIZE");
    });
});