var arr = [' ', '一', '二', '三', '四', '五'];
var ctime = [{
    num: '1',
    time: '8:10',
},
{
    num: '2',
    time: '9:45',
},
{
    num: '3',
    time: '10:00',
},
{
    num: '4',
    time: '11:350',
},
{
    num: '5',
    time: '14:00',
},
{
    num: '6',
    time: '15:40',
},
{
    num: '7',
    time: '16:10',
},
{
    num: '8',
    time: '17:50',
},
{
    num: '9',
    time: '18:30',
},
{
    num: '10',
    time: '20:05',
},
]

var courses = [
    {
        course: '趣味数学',
        teacher: '姚华雄',
        location: '@N217',
        Bgcolor: '#B93B61',
        info: '数学是人类对事物的抽象结构与模式进行严格描述、推导的一种通用手段，可以应用于现实世界的任何问题，所有的数学对象本质上都是人为定义的。从这个意义上，数学属于形式科学，而不是自然科学'
    },
    {
        course: '趣味历史 ',
        teacher: '李增扬',
        location: '@N112',
        Bgcolor: '#15C377',
        info: '历史，简称“史”，指对人类社会过去的事件和活动，以及对这些事件行为有系统的记录、研究和诠释。历史是客观存在的，无论文学家们如何书写历史，历史都以自己的方式存在，不可改变。'
    },
    {
        course: '趣味物理',
        teacher: '王翔',
        location: '@南湖体育馆',
        Bgcolor: '#48B0FC',
        info: '物理学（physics），是研究物质最一般的运动规律和物质基本结构的学科。作为自然科学的带头学科，物理学研究大至宇宙，小至基本粒子等一切物质最基本的运动形式和规律，因此成为其他各自然科学学科的研究基础。'
    },

    {
        course: '创意公开',
        teacher: '涂新辉',
        location: '@N520',
        Bgcolor: '#4974B8',
        info: '头脑风暴法（Brainstorming）是最为人所熟悉的创意思维策略，该方法是由美国人奥斯本（Osborn）早于1937年所倡导，此法强调集体思考的方法，着重互相激发思考，鼓励参加者于指定时间内，构想出大量的意念，并从中引发新颖的构思。'
    },

    {
        course: '咬文嚼字的智慧',
        teacher: '张茂元',
        location: '@N108',
        Bgcolor: '#399088',
        info: '读者在学习中产生了语言文字疑问，《咬文嚼字》里面的文章会做出解答；读者工作中遇到了语言文字难题，《咬文嚼字》里面的文章会做出解释；社会上一旦有了语文热点事件，《咬文嚼字》中的专家也会做出相关解析'
    },
    {
        course: '两数相加数字游戏',
        teacher: '郭京蕾',
        location: '@N108',
        Bgcolor: '#C78A47',
        info: '加法是基本的四则运算之一，它是指将两个或者两个以上的数、量合起来，变成一个数、量的计算。表达加法的符号为加号“+”。进行加法时以加号将各项连接起来。'
    },
    {
        course: '自编《乘法口诀表》',
        teacher: '李源',
        location: '@N108',
        Bgcolor: '#B93B61',
        info: '古时的乘法口诀，是自上而下，从“九九八十一”开始，至“一一如一”止，与使用的顺序相反，因此古人用乘法口诀开始的两个字“九九”作为此口诀的名称，又称九九表、九九歌、九因歌、九九乘法表。'
    },
    {
        course: '物理热学',
        teacher: '姚华雄',
        location: '@N535',
        Bgcolor: '#B93B61',
        info: '热力学是理工科，比如物理、化学、工程等学科的重要基础课程之一。在美国大学工学院的基础课程里，热力学是机械、化工、航空、环境、材料等工程专业的必修课。'
    },
    {
        course: '文学经典赏读',
        teacher: '陈燕妮',
        location: '@本校8104',
        Bgcolor: '#48B0FC',
        info: '《论语》《西游记》《世说新语》...'
    },
    {
        course: '重量单位',
        teacher: '张茂元',
        location: '@N528',
        Bgcolor: '#399088',
        info: '克拉（Ct）是宝石的质量（重量）单位，现定1克拉等于0.2克或200毫克。一克拉又分为100分，如50分即0.5克拉，以用作计算较为细小的宝石。因为宝石的密度基本上相同，因此越重的宝石体积越大。'
    },
    {
        course: '新时代中国特色社会主义',
        teacher: '吕惠东',
        location: '@N228',
        Bgcolor: '#FAA64B',
        info: '新时代中国特色社会主义思想学习，任务：笔记+实践报告+期末考核'
    },
    {
        course: '识字大冒险',
        teacher: '涂新辉',
        location: '@N108',
        Bgcolor: '#4974B8',
        info: '让人们走进他的生活，同时也介绍了字谜的相关历史，为何有那么多人喜欢字谜，以及关于字谜的比赛等等。'
    },
    {
        course: '英美文化',
        teacher: '郭京蕾',
        location: '@N213',
        Bgcolor: '#C78A47',
        info: '旨在帮助学生了解讲英语国家的概况、文化历史、社会风俗等入门知识，使学生通过一个学期的学习对英美等国的文化背景有一定的了解，增加学生相关的信息量和词汇量，提高英语水平，激发学生的文化学习热情，增长知识、开阔眼界；同时，大家通过学习培养理性地对待异国文化的态度'
    },
    {
        course: '趣味编程',
        teacher: '李源',
        location: '@N211',
        Bgcolor: '#B93B61',
        info: '专业主干！作业+实验报告+期末考一款由编玩边学设计开发的儿童编程教育软件，为不同阶段的儿童提供Scratch, Python, NOIP等定制化的课程内容，让孩子轻松快乐的学习！核'
    }
]



window.onload = function () {

    var Stable = document.getElementsByClassName('Stable');  //创建动态课程表格对象

    for (let i = 0; i < arr.length; i++) {
        let div = document.createElement('div');    //动态创建div
        div.className = 'item' + String(i + 1) + ' day';  //类名为两个 itemx day  

        Stable[0].appendChild(div);                 //创建第一行 星期1,2,3,4,5,6,7
        let h3 = document.createElement('h3');
        h3.textContent = arr[i];
        div.appendChild(h3);

    }

    for (let i = 0; i < ctime.length; i++) {     // 添加第一列 时间
        let div = document.createElement('div');
        div.className = 'item' + String(i + 7) + ' ctime';
        Stable[0].appendChild(div);
        let h3 = document.createElement('h3');
        let h5 = document.createElement('h5');
        h3.textContent = ctime[i].num;
        h5.textContent = ctime[i].time;
        div.appendChild(h3);
        div.appendChild(h5);
    }

    for (let i = 0; i < courses.length; i++) {       //添加课程，课程名+地点
        let div = document.createElement('div');
        div.className = 'c' + String(i + 1) + ' course';   //类名为 ci course
        div.style.backgroundColor = courses[i].Bgcolor;
        Stable[0].appendChild(div); //课程表
        let h3 = document.createElement('h3');
        h3.textContent = courses[i].course;
        let h5 = document.createElement('h5');
        h5.textContent = courses[i].location
        div.appendChild(h3);
        div.appendChild(h5);
    }


    // var c1 = document.querySelector(".c1");
    // var cn = document.querySelector(".cname");
    // var tc = 

    // c1.onmouseover = function () {
    //     cn.innerHTML = '课&ensp;程&ensp;名：微机原理';
    // }

    // 鼠标移动到课程表对应课程响应事件处理，右侧显示相关信息
    function MouseOver(i) {
        console.log("我动态加载了");  
        var cname = document.getElementsByClassName("cname");
        cname[0].textContent += courses[i].course;
        
        var teacher = document.getElementsByClassName("teacher");
        var location = document.getElementsByClassName("location");
        var info = document.getElementsByClassName("info");
        teacher[0].textContent += courses[i].teacher;
        location[0].textContent += courses[i].location;
        info[0].textContent += courses[i].info;
    }



    // 鼠标离开，清空右侧信息
    function MouseOut() {
        console.log("我清空了");
        let cname = document.getElementsByClassName("cname");
        cname[0].textContent = '课  程  名:  ';
        let teacher = document.getElementsByClassName("teacher");
        let location = document.getElementsByClassName("location");
        let info = document.getElementsByClassName("info");
        teacher[0].textContent = "任课老师: ";
        location[0].textContent = "上课地点: ";
        info[0].textContent = "相关信息: ";
    }

    var courselist = document.getElementsByClassName("course");
    for (let i = 0; i < courselist.length; i++) {
        courselist[i].onmouseover = MouseOver.bind(this,i);
        courselist[i].onmouseout = MouseOut;
    }

}
