<?php
include ('index.html');


?>
<form method="post" action="action.php">
    <input name="userValue" type="text" placeholder="provide threshold value">
    <input  value="get list" type="submit">
</form>
<hr/>

<form method="POST" action="login.php">
    <div class="form-input-wrapper">
        <input type="email" name="email" class="form-control" placeholder="  Enter Email" required/>
        <input type="password" name = "password"  placeholder="  Enter Password" required>
        <input type="submit" value="Sign In">
    </div>
</form>



