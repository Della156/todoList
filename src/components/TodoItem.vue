<template>
  <li class="item">
    <label>
      <input type="checkbox" v-model="todo.complete" />
      <span>{{todo.title}}</span>
    </label>
  </li>
</template>

<script>
  export default {
    props: ['todo'],
  }
</script>

<style scoped>
  .item:hover span{
    font-size: 34px;
  }
  span {
    font-size: 24px;
    font-weight: 300;
    position: relative;
    left: 14px;
    bottom: 14px;
    transition: 1s font-size;
  }
  input[type=checkbox]{
    margin: 5px;
    /*同样，首先去除浏览器默认样式*/
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /*编辑我们自己的样式*/
    position: relative;
    width: 36px;
    height: 36px;
    background: transparent;
    border:1px solid #8e401e;
    border-radius: 18px;
    outline: none;
    cursor: pointer;
  }
  input[type=checkbox]:after{
    content: '√';
    font-size: 24px;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #8e401e;
    color: #fff;
    text-align: center;
    line-height: 36px;
    /*增加动画*/
    -webkit-transition: all ease-in-out 300ms;
    -moz-transition: all ease-in-out 300ms;
    transition: all ease-in-out 300ms;
    /*利用border-radius和opacity达到填充的假象，首先隐藏此元素*/
    -webkit-border-radius: 18px;
    -moz-border-radius: 18px;
    border-radius: 18px;
    opacity: 0;
  }
  input[type=checkbox]:checked:after {
    -webkit-border-radius: 18px;
    -moz-border-radius: 18px;
    border-radius: 18px;
    opacity: 1;
  }
</style>
