<template>
    <div class="Search">
        <el-autocomplete
        class="SearchInput"
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        pleaceholder="请输入关键词"
        @select="handleSelect"
        >
        </el-autocomplete>
        <el-button 
        class="SearchButton" 
        type="text"
        @click="Search"
        >搜索</el-button>
    </div>
</template>

<script>
    export default{
        name: 'HeaderSearch',
        data(){
            return {
                restaurants: [],
                state: '',
                timeout:  null
            }
        },
        methods: {
            loadAll() {
                return [
                    { "value": "琴", "address":"https://wiki.biligame.com/ys/琴"},
                    { "value": "迪卢克", "address":"https://wiki.biligame.com/ys/迪卢克"},
                    { "value": "温迪", "address":"https://wiki.biligame.com/ys/温迪"},
                    { "value": "可莉", "address":"https://wiki.biligame.com/ys/可莉"},
                    { "value": "魈", "address":"https://wiki.biligame.com/ys/魈"},
                    { "value": "莫娜", "address":"https://wiki.biligame.com/ys/莫娜"},
                    { "value": "刻晴", "address":"https://wiki.biligame.com/ys/刻晴"},
                    { "value": "七七", "address":"https://wiki.biligame.com/ys/七七"},
                    { "value": "钟离", "address":"https://wiki.biligame.com/ys/钟离"},
                    { "value": "达达利亚", "address":"https://wiki.biligame.com/ys/达达利亚"},
                    { "value": "阿贝多", "address":"https://wiki.biligame.com/ys/阿贝多"},
                    { "value": "甘雨", "address":"https://wiki.biligame.com/ys/甘雨"},
                    { "value": "神里绫华", "address":"https://wiki.biligame.com/ys/神里绫华"},
                    { "value": "胡桃", "address":"https://wiki.biligame.com/ys/胡桃"},
                    { "value": "雷电将军", "address":"https://wiki.biligame.com/ys/雷电将军"},
                    { "value": "优菈", "address":"https://wiki.biligame.com/ys/优菈"},
                    { "value": "宵宫", "address":"https://wiki.biligame.com/ys/宵宫"},
                    { "value": "枫原万叶", "address":"https://wiki.biligame.com/ys/枫原万叶"},
                    { "value": "珊瑚宫心海", "address":"https://wiki.biligame.com/ys/珊瑚宫心海"},
                    { "value": "埃洛伊", "address":"https://wiki.biligame.com/ys/埃洛伊"},
                    { "value": "荒泷一斗", "address":"https://wiki.biligame.com/ys/荒泷一斗"},
                    { "value": "申鹤", "address":"https://wiki.biligame.com/ys/申鹤"},
                    { "value": "北斗", "address":"https://wiki.biligame.com/ys/北斗"},
                    { "value": "安柏", "address":"https://wiki.biligame.com/ys/安柏"},
                    { "value": "丽莎", "address":"https://wiki.biligame.com/ys/丽莎"},
                    { "value": "凯亚", "address":"https://wiki.biligame.com/ys/凯亚"},
                    { "value": "芭芭拉", "address":"https://wiki.biligame.com/ys/芭芭拉"},
                    { "value": "雷泽", "address":"https://wiki.biligame.com/ys/雷泽"},
                    { "value": "行秋", "address":"https://wiki.biligame.com/ys/行秋"},
                    { "value": "菲谢尔", "address":"https://wiki.biligame.com/ys/菲谢尔"},
                    { "value": "诺艾尔", "address":"https://wiki.biligame.com/ys/诺艾尔"},
                    { "value": "班尼特", "address":"https://wiki.biligame.com/ys/班尼特"},
                    { "value": "重云", "address":"https://wiki.biligame.com/ys/重云"},
                    { "value": "香菱", "address":"https://wiki.biligame.com/ys/香菱"},
                    { "value": "凝光", "address":"https://wiki.biligame.com/ys/凝光"},
                    { "value": "砂糖", "address":"https://wiki.biligame.com/ys/砂糖"},
                    { "value": "迪奥娜", "address":"https://wiki.biligame.com/ys/迪奥娜"},
                    { "value": "辛焱", "address":"https://wiki.biligame.com/ys/辛焱"},
                    { "value": "罗莎莉亚", "address":"https://wiki.biligame.com/ys/罗莎莉亚"},
                    { "value": "云堇", "address":"https://wiki.biligame.com/ys/云堇"},
                    { "value": "烟绯", "address":"https://wiki.biligame.com/ys/烟绯"},
                    { "value": "早柚", "address":"https://wiki.biligame.com/ys/早柚"},
                    { "value": "五郎", "address":"https://wiki.biligame.com/ys/五郎"},
                    { "value": "九条裟罗", "address":"https://wiki.biligame.com/ys/九条裟罗"},
                    { "value": "托马", "address":"https://wiki.biligame.com/ys/托马"},
                ];
            },
            //输入框模糊搜索，queryString为键盘输入的值， cb为callback回调函数，只有函数queryString执行完后才会执行cb
            querySearchAsync(queryString, cb) {
                //从后端获取的数组赋值
                var restaurants = this.restaurants;
                console.log(restaurants,'restaurants');
                //  .filter() 内置数组迭代方法 参数为一个过滤条件的函数 queryString为键盘输入的值
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    // 调用 callback 返回建议列表的数据，回调方法
                    cb(results);
                }, 1000 * Math.random());
            },
            //过滤搜索的接口
            createStateFilter(queryString) {
                // state为loadAll返回的数组
                return (state) => {
                    return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
                };
            },
            //控制台返回模糊搜索结果
            handleSelect(item) {
                console.log(item.value,'item');
            },
            Search(){
                console.log("你按下了enter建");
                console.log(this.state,'searchdata');
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    };
</script>

<style scoped>
    .Search{
        position:absolute;
        line-height:60px;
        right:40px;

    }
    .SearchInput{
        z-index: 1;
        position:relative;
    }
    .SearchButton{
        margin-left: -40px;
        position:relative;
        z-index: 99;
    }
</style>
