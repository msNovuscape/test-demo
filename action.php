<?php
$value = $_POST['userValue'];
$final_list = getList($value);
echo 'Sum of filtered list is:'.sumofList($final_list);
 function getList($value){
     $lists = array('50','20','30','40','50','60');
     $filtered_list = [];
     foreach ($lists as $list){
         if ($list > $value){
             array_push($filtered_list,$list);
         }
     }
     return $filtered_list;
 }
 function sumofList(array $filtered_list){
     return array_sum($filtered_list);
 }

?>