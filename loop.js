<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Looping</title>
  </head>
  <body>
    <ul id="t">
      <li></li>
    </ul>
    <script type="text/javascript" charset="utf-8">
      let nama = ["Seli", "Mey", "Melva", "Aca", "Aura"];
      let tampil = ""
      for (let i = 0; i < nama.length; i++) {
      tampil += nama[i] + "<br>";
}
document.getElementById("t").innerHTML = tampil;
    </script>
  </body>
</html>
