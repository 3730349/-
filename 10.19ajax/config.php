<?php
$name=$_POST["name"];
if($name==""){
$data = array( 
    'code' => 405,  //状态码
    "msg" => "请求失败"
);
echo json_encode($data);

}
else{
   $datas='[
{ "coupon": "1","coupon_head":"http://bbs.egret.com/uc_server/avatar.php?uid=6541&size=middle", "coupon_score" :"300","lottery_name":"梦之队", "prize_phone":"15015133444"},
{"coupon": 2,"coupon_head":"http://p2.so.qhmsg.com/bdr/_240_/t01323fc0361c7ad6c7.jpg", "coupon_score" :"290","lottery_name":"梦之队", "prize_phone":"15015133444"},
{"coupon": 3,"coupon_head":"http://p2.so.qhmsg.com/bdr/_240_/t01f7251b5a36d0fc82.jpg", "coupon_score" :"280","lottery_name":"梦之队", "prize_phone":"15015133444"},
{"coupon": 4,"coupon_head":"http://p4.so.qhmsg.com/bdr/_240_/t01272a7dda476ed78e.jpg", "coupon_score" :"270","lottery_name":"梦之队", "prize_phone":"15015133444"},
{"coupon": 5,"coupon_head":"http://p1.so.qhmsg.com/bdr/_240_/t01dfd1d867615cea01.gif", "coupon_score" :"260","lottery_name":"梦之队", "prize_phone":"15015133444"},
{"coupon": 6,"coupon_head":"http://p2.so.qhmsg.com/bdr/_240_/t018b83cc648853f307.jpg", "coupon_score" :"250","lottery_name":"梦之队", "prize_phone":"15015133444"}
]'; 
$code= json_decode($datas);
$data = array( 
    'code' => 200,  //状态码
    "data" => $code, // 排名  // 头像  // 分数  // 手机号码-->
    "msg" => "请求成功"
);
echo json_encode($data);
};

?>
