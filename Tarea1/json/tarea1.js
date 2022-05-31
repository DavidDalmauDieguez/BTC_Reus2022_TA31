var a = b = c = d = e = f = 0;
        var totalTiradas = 0;
          
        function tiradaDado(){
            var dado6caras = parseInt(6*Math.random()+1);
            return dado6caras;
        }
        
        for(i=1;i<=36000;i++){
            tirada = tiradaDado();
            switch(tirada){
                case 1:
                    a++;
                    break;
                case 2:
                    b++;
                    break;
                case 3:
                    c++;
                    break;
                case 4:
                    d++;
                    break;
                case 5:
                    e++;
                    break;
                case 6:
                    f++;
                    break;
            }
        }
        
        totalTiradas = a+b+c+d+e+f;
        
        document.write("El 1 ha salido " +  a + " veces<br>");
        document.write("El 2 ha salido " +  b + " veces<br>");
        document.write("El 3 ha salido " +  c + " veces<br>");
        document.write("El 4 ha salido " +  d + " veces<br>");
        document.write("El 5 ha salido " +  e + " veces<br>");
        document.write("El 6 ha salido " +  f + " veces<br>");
        document.write("<br>")
        document.write("Total de lanzamientos del dado: " + totalTiradas);