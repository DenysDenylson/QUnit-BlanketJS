/* global ok */
/* global test */
/* global QUnit */
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});


module("Metodo de suma");
test("should devolverme un 2, la funcion Sumar", function(){
  res = sumar(1, 1);
  equal(res, 2, "Prueba pasando");
  
});

test("should devolverme un 5, si sumo 2 y 3", function(){
  ok(sumar(3, 2) === 5, "Prueba pasando");
});

module("DOM test")
test("deberia mostrame 5 al sumar 3 y 2", function(){
  $("#arg1").val(3);
  $("#arg2").val(2);

  $("#button1").click();
  
  var respuesta = $("#output").text();
  
  strictEqual(respuesta, '5', "la suma esta correcta");
});
