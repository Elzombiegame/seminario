<?php
    
    function insertar(){
        require("queries.php");
        $conn = new mysqli("localhost","root","","seminario");
        $data = $conn -> query($sql_view_all);
        /*<img class="pajaro" id="bird <?php echo$key[id];?>" src="img/bird-png.webp" alt="">*/
        $id = 0;
        foreach ($data as $key){
            print('<img class="pajaro" id="bird '. $key["id"] .'" src="img/bird-png.webp" alt="pajaro" onclick="activation(`'. $key["alias"] .'`,`'. $key["anecdota"] .'`)">');
            $id++;
        }
        $conn -> close();
        ?>
        <script>
            let cuenta = <?php echo $id; ?>;
        </script>
        <?php 

        
        
    }
?>