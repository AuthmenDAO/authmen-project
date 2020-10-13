<template>
    <div class="error">
        <div>
            ┗|｀O′|┛ 嗷~~
            <span>出错了</span>
        </div>
        <p @click="$router.go(-1)">返回上一步</p>
    </div>
</template>
<style lang="less" scoped>
    .error{
        min-height:calc(~'100vh - 50px');
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div{
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:20px;
        }
        p{
            width:120px;
            height:30px;
            background:#999;
            color:#fff;
            border-radius:5px;
            display:flex;
            align-items:center;
            justify-content:center;
            margin-top:30px;
        }
    }
</style>