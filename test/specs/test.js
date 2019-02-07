var assert = require("assert");

describe('Tarea 2', () => {
    it('encontrar el título de la página', () => {
        browser.url('/');
        var titulo = browser.getTitle();
        assert.equal(titulo,"Tarea 2");
    });
});

describe('Buscar elemento', () =>{
    before(function(){
        console.log("INICIO DE TEST");
    });
   it('Saber si existe el botón de cancelar', ()=>{
       browser.url('/');
       var isPresent = driver.findElement(By.id("cancel-button")).isDisplayed();
       assertTrue(isPresent);
   });
    after(function(){
        console.log("TERMINANDO")
    });
});
/*describe('CSS something', () => {
    before(function(){
        console.log("INICIO DE CSS PROPERTY");
    });
    it('ver color de input text',()=>{
        browser.url("/");
        var username = $('#username-input');
        var color = username.getCSSProperty('border-bottom-color');
        console.log("COLOR: " + color.value);
        assert.equal(color.value, "rgba(255,255,255,0.42)")
    });
    after(function(){
        console.log("TERMINANDO CSS")
    });
});*/

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
        console.log("TERMINANDO")
    });
});