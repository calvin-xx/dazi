const textPool = {
  zh: [
    { title: "经典 1：桃花源记", text: `晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷。渔人甚异之，复前行，欲穷其林。林尽水源，便得一山。山有小口，仿佛若有光。便舍船，从口入。初极狭，才通人；复行数十步，豁然开朗。土地平旷，屋舍俨然，有良田、美池、桑竹之属。阡陌交通，鸡犬相闻。` },
    { title: "经典 2：岳阳楼记", text: `庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上，属予作文以记之。予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也。前人之述备矣。` },
    { title: "经典 3：前赤壁赋", text: `壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。` },
    { title: "经典 4：出师表", text: `先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。` },
    { title: "经典 5：陈情表", text: `臣密言：臣以险衅，夙遭闵凶。生孩六月，慈父见背；行年四岁，舅夺母志。祖母刘，愍臣孤弱，躬亲抚养。臣少多疾病，九岁不行，零丁孤苦，至于成立。既无伯叔，终鲜兄弟，门衰祚薄，晚有儿息。外无期功强近之亲，内无应门五尺之僮。` },
    { title: "经典 6：兰亭集序", text: `永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹；又有清流激湍，映带左右。引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。` },
    { title: "经典 7：归去来兮辞", text: `归去来兮，田园将芜胡不归！既自以心为形役，奚惆怅而独悲？悟已往之不谏，知来者之可追。实迷途其未远，觉今是而昨非。舟遥遥以轻飏，风飘飘而吹衣。问征夫以前路，恨晨光之熹微。乃瞻衡宇，载欣载奔。僮仆欢迎，稚子候门。` },
    { title: "经典 8：师说", text: `古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从师，其为惑也，终不解矣。生乎吾前，其闻道也固先乎吾，吾从而师之；生乎吾后，其闻道也亦先乎吾，吾从而师之。吾师道也，夫庸知其年之先后生于吾乎？` },
    { title: "经典 9：劝学", text: `君子曰：学不可以已。青，取之于蓝，而青于蓝；冰，水为之，而寒于水。木直中绳，輮以为轮，其曲中规。虽有槁暴，不复挺者，輮使之然也。故木受绳则直，金就砺则利。君子博学而日参省乎己，则知明而行无过矣。` },
    { title: "经典 10：滕王阁序", text: `豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。` },
    { title: "经典 11：阿房宫赋", text: `六王毕，四海一，蜀山兀，阿房出。覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角。盘盘焉，囷囷焉，蜂房水涡，矗不知其几千万落。` },
    { title: "经典 12：醉翁亭记", text: `环滁皆山也。其西南诸峰，林壑尤美，望之蔚然而深秀者，琅琊也。山行六七里，渐闻水声潺潺，而泻出于两峰之间者，酿泉也。峰回路转，有亭翼然临于泉上者，醉翁亭也。作亭者谁？山之僧智仙也。名之者谁？太守自谓也。太守与客来饮于此，饮少辄醉，而年又最高，故自号曰醉翁也。` },
    { title: "经典 13：逍遥游", text: `北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。鹏之背，不知其几千里也；怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。齐谐者，志怪者也。《谐》之言曰：“鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里。”` },
    { title: "经典 14：道德经（第一章）", text: `道可道，非常道；名可名，非常名。无名，天地之始；有名，万物之母。故常无，欲以观其妙；常有，欲以观其徼。此两者，同出而异名，同谓之玄。玄之又玄，众妙之门。` },
    { title: "经典 15：论语（学而）", text: `子曰：“学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？”有子曰：“其为人也孝弟，而好犯上者，鲜矣；不好犯上，而好作乱者，未之有也。君子务本，本立而道生。孝弟也者，其为仁之本与！”` },
    { title: "经典 16：孟子（梁惠王上）", text: `孟子见梁惠王。王曰：“叟，不远千里而来，亦将有以利吾国乎？”孟子对曰：“王何必曰利？亦有仁义而已矣。王曰‘何以利吾国’，大夫曰‘何以利吾家’，士庶人曰‘何以利吾身’，上下交征利而国危矣。` },
    { title: "经典 17：过秦论", text: `秦孝公据崤函之固，拥雍州之地，君臣固守以窥周室，有席卷天下、包举宇内、囊括四海之意，并吞八荒之心。当是时也，商君佐之，内立法度，务耕织，修守战之具；外连衡而斗诸侯。于是秦人拱手而取西河之外。` },
    { title: "经典 18：六国论", text: `六国破灭，非兵不利，战不善，弊在赂秦。赂秦而力亏，破灭之道也。或曰：六国互丧，率赂秦耶？曰：不赂者以赂者丧，盖失强援，不能独完。故曰：弊在赂秦也。秦以攻取之外，小则获邑，大则得城。较秦之所得，与战胜而得者，其实百倍。` },
    { title: "经典 19：送东阳马生序", text: `余幼时即嗜学。家贫，无从致书以观，每假借于藏书之家，手自笔录，计日以还。天大寒，砚冰坚，手指不可屈伸，弗之怠。录毕，走送之，不敢稍逾约。以是人多以书假余，余因得遍观群书。既加冠，益慕圣贤之道。` },
    { title: "经典 20：小石潭记", text: `从小丘西行百二十步，隔篁竹，闻水声，如鸣珮环，心乐之。伐竹取道，下见小潭，水尤清冽。全石以为底，近岸卷石底以出，为坻，为屿，为嵁，为岩。青树翠蔓，蒙络摇缀，参差披拂。潭中鱼可百许头，皆若空游无所依。` },
    { title: "经典 21：始得西山宴游记", text: `自余为僇人，居是州，恒惴栗。其隙也，则施施而行，漫漫而游。日与其徒上高山，入深林，穷回溪。幽泉怪石，无远不到。到则披草而坐，倾壶而醉。醉则更相枕以卧，卧而梦。意有所极，梦亦同趣。觉而起，起而归。` },
    { title: "经典 22：陋室铭", text: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？` },
    { title: "经典 23：爱莲说", text: `水陆草木之花，可爱者甚蕃。晋陶渊明独爱菊；自李唐来，世人甚爱牡丹；予独爱莲之出淤泥而不染，濯清涟而不妖，中通外直，不蔓不枝，香远益清，亭亭净植，可远观而不可亵玩焉。予谓菊，花之隐逸者也；牡丹，花之富贵者也；莲，花之君子者也。` },
    { title: "经典 24：赤壁怀古", text: `大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。` },
    { title: "经典 25：三国演义开篇", text: `话说天下大势，分久必合，合久必分。周末七国分争，并入于秦；及秦灭之后，楚、汉分争，又并入于汉。汉朝自高祖斩白蛇而起义，一统天下，后来光武中兴，传至献帝，遂分为三国。推其致乱之由，殆始于桓、灵二帝。` },
    { title: "经典 26：水浒传开篇", text: `话说天下太平，五谷丰登，人物康阜。正是万民乐业，四海清平。却说东京开封府汴梁宣武军，乃是太祖武德皇帝创业兴王之地，陈桥让位，汴京奠都。至今一百六十余年，真个物阜民安，市廛繁盛。只因一时朝纲紊乱，奸邪并进，遂有后来许多故事。` },
    { title: "经典 27：西游记开篇", text: `盖闻天地之数，有十二万九千六百岁为一元。将一元分为十二会，乃子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥之十二支也。每会该一万八百岁。且就一日而论：子时得阳气，而丑则鸡鸣；寅不通光，而卯则日出；辰时食后，而巳则挨排；午时日中，而未则西蹉；申时晡而日落酉；戌黄昏而人定亥。` },
    { title: "经典 28：红楼梦开篇", text: `此开卷第一回也。作者自云曾历过一番梦幻之后，故将真事隐去，而借“通灵”之说，撰此《石头记》一书也。故曰“甄士隐梦幻识通灵，贾雨村风尘怀闺秀”。列位看官，你道此书从何而来？说起根由虽近荒唐，细按则深有趣味。` },
    { title: "经典 29：礼记·学记", text: `玉不琢，不成器；人不学，不知道。是故古之王者建国君民，教学为先。《兑命》曰：“念终始典于学。”其此之谓乎！虽有嘉肴，弗食，不知其旨也；虽有至道，弗学，不知其善也。故学然后知不足，教然后知困。` },
    { title: "经典 30：孙子兵法·始计", text: `孙子曰：兵者，国之大事，死生之地，存亡之道，不可不察也。故经之以五事，校之以计，而索其情。一曰道，二曰天，三曰地，四曰将，五曰法。道者，令民与上同意也，可与之死，可与之生，而不危也。` },
    { title: "现代散文 31：清晨地铁", text: `清晨六点半，地铁口的风总是带着一点潮气。卖早餐的阿姨把蒸笼掀开，白雾一层层漫出来，路过的人脚步很快，却总会在这股热气前稍微停一下。车厢里安静得像一条缓慢流动的河，大家低头看着各自的屏幕，只有报站声把不同的人生暂时拴在同一节车厢。有人在背单词，有人在改方案，有人靠着门边闭目养神。我常常在这个时候意识到，所谓城市，并不是高楼和霓虹，而是无数普通人把一天的希望，按时交给早晨。` },
    { title: "现代散文 32：午后阳台", text: `午后的阳台总有一种被时间放慢的感觉。晾衣杆上的衬衫轻轻摆动，像谁在无声地打招呼。楼下修车铺传来金属敲击声，间或夹着孩子追逐时的笑闹。茶杯放在藤椅边缘，水面漂着两片薄薄的柠檬，阳光照上去，像一枚小小的镜子。这样的时刻没有大事发生，却让人愿意把手机扣过去，认真看一会儿云怎么移，影子怎么爬过墙角。许多焦虑并不会立刻消失，但它们会在这份缓慢里变得没那么锋利。` },
    { title: "现代散文 33：雨后街道", text: `雨停之后，街道像刚被擦拭过。路灯把积水照得很亮，行人走过时，鞋底带起细小的涟漪。水果店把塑料帘卷起来，苹果和橙子的颜色在潮湿空气里显得更饱和。有人撑伞并不是为了挡雨，而是懒得收起刚才的匆忙。公交站牌下，陌生人并肩站着，谁也不说话，却都在等同一辆车。雨后的城市有一种短暂的诚实：尘土被按下去，喧闹也被按下去，连呼吸都变得清楚。我们在这样的晚上回家，像把一天重新安放到合适的位置。` },
    { title: "现代散文 34：旧书店", text: `巷子尽头的旧书店门脸很窄，推门时会响起一声轻轻的铃。店里木架挤得很满，书脊褪了色，却仍保留着不同年代的气味。老板习惯把新到的书平铺在靠窗的小桌上，旁边压一块白石头，怕风把纸页翻乱。偶尔有年轻人来找绝版小说，也有人只是避雨，随手拿起一本散文就看了半小时。旧书店不像商场那样热闹，它更像一间慢速的仓库，替很多人保管过往的心情。离开时你不一定买书，但总会带走一点被文字抚平的安静。` },
    { title: "现代散文 35：厨房灯光", text: `夜里十点，厨房的灯是家里最后亮着的一盏。锅里还温着汤，灶台边摆着切了一半的姜和葱。母亲把第二天的米提前淘好，动作熟练得像一段默背多年的诗。窗外传来楼下电动车充电器的滴答声，屋里只有水龙头细细的流水。很多关心都不是大张旗鼓地说出来，而是体现在这些细微、重复、几乎看不见的动作里。我们长大以后常常说自己独立，却在某个深夜忽然想起，原来最稳妥的安全感，是回家时闻到一口热饭的香。` },
    { title: "现代散文 36：夜跑的人", text: `小区外环路到了晚上会出现一群固定的人。有人戴着耳机均速前进，有人跑两步就停下来系鞋带，还有父亲推着婴儿车慢慢快走。路边树影在路灯下交错，像一页页翻过去的胶片。夜跑并不总是为了成绩，更多时候是给白天积攒的疲惫找一个出口。呼吸从急促变得平稳，心跳从混乱回到节奏，很多想不通的事也在一圈一圈里变得不那么重要。终点不是某个公里数，而是重新找回对身体、对生活的一点掌控感。` },
    { title: "现代散文 37：出租屋窗外", text: `租来的房间不大，窗外却刚好能看见一段高架桥。清晨第一班公交经过时，玻璃会轻微震动，像在提醒新的一天已经开始。桌上摆着折叠台灯和几本常用的工具书，墙角的行李箱一直没有完全收起，仿佛随时准备下一次迁徙。很多人在这样的房间里度过最用力的几年：加班、考试、失眠、重新规划。它未必舒适，却承载了最真实的成长。后来搬走时，留在脑海里的往往不是房租和面积，而是那扇窗曾经见证你咬牙坚持的每个夜晚。` },
    { title: "现代散文 38：周末菜场", text: `周末早市是城市最有烟火气的地方。摊主一边吆喝一边麻利地称重，塑料袋摩擦的声音和讨价还价混在一起，形成一种独特的节奏。刚摘下来的青菜带着水珠，鱼摊前的冰面反着冷光，豆腐铺前排着熟客，谁都知道哪一块最嫩。来菜场的人并不急，他们会比较番茄的软硬，问一问今天的虾是不是活的。这样琐碎的挑选，其实是一种生活态度：认真对待每一餐，也是在认真对待平凡日子的质量。` },
    { title: "现代散文 39：火车站台", text: `站台上的离别总是比重逢更安静。广播里重复着车次信息，行李箱轮子划过地面的声音此起彼伏。有人把手里的矿泉水塞给对方，反复叮嘱几句已经说过很多遍的话。列车进站时带来一阵热风，站在黄线后的人群同时后退半步。每一次出发都带着不确定，但也带着某种隐秘的期待。火车开走之后，站台很快恢复日常，仿佛刚才的情绪都被风带走。可对于当事人而言，那几分钟足够在记忆里停留很多年。` },
    { title: "现代散文 40：深夜便利店", text: `凌晨一点的便利店像一座微型避风港。货架上灯光明亮，收银台旁摆着关东煮，白雾里浮着萝卜和鱼丸的香味。外卖骑手进来补水，值夜班的护士买一盒饭团，刚下自习的学生抱着热牛奶在门口发呆。店员熟练地扫码、找零、补货，动作利落却不急躁。这个空间把不同职业、不同情绪的人短暂地收容在一起。我们在深夜里需要的有时不是答案，只是一盏不催促你的灯，和一个愿意安静接住疲惫的角落。` },
    { title: "现代散文 41：冬天的热水", text: `冬天最朴素的幸福之一，是拧开水龙头等到热水流出的那几秒。先是冰凉，然后慢慢变温，直到掌心真正暖起来。洗完手后杯壁也被捂热，窗上的雾气一圈圈散开。很多人把快乐理解成轰轰烈烈的大事件，却忽略了这种可重复、可触摸的小确幸。它们不像礼物那样突然，也不像成就那样耀眼，却能在漫长寒冷里稳定地提供安慰。热水、厚袜子、刚晒过的被子，这些细节把生活一点点缝紧，让我们更有力气面对外面的风。` },
    { title: "现代散文 42：电梯里的问候", text: `同一栋楼住久了，电梯里的陌生人会慢慢变成熟悉的面孔。起初只是点头，后来会问一句“下班啦”，再后来会在对方搬重物时主动伸手扶一下门。城市常被说成冷漠，但真实的温度恰恰藏在这种微小互动里。它没有长谈，也不需要交换太多信息，却在重复的日常中建立起一种朴素信任。某天你心情很差，听见一句普通的问候，也会莫名觉得自己并不是完全孤单。文明并不只体现在制度里，也体现在每次愿意先说“你好”。` },
    { title: "现代散文 43：晚风和桥", text: `傍晚走上江桥，风比白天更直接。桥面上的行人有人慢跑，有人停下来拍照，远处的船灯在水面拉出细长的线。城市天际线一盏盏亮起，像有人在远处耐心地把夜晚点燃。站在桥中央时，会同时听见车流声和水声，两种节奏互不干扰。很多烦恼在室内显得巨大，走到开阔处却忽然缩小。晚风不会替你解决问题，但它会提醒你，世界比眼前这点困境更广，路比想象中更长，明天仍然有机会从头安排。` },
    { title: "现代散文 44：修伞摊", text: `商场门口的修伞摊看起来不起眼，一张折叠桌、几把钳子、几卷细铁丝。师傅戴着老花镜，把坏掉的伞骨一点点掰回原位，动作慢却极稳。现在很多东西坏了就直接换新，修补这件事显得有些“过时”，可它背后其实是一种更节制的生活观。不是所有问题都要推翻重来，很多时候只要找到断点、耐心对齐，就能让事情重新运转。看着一把废伞被重新撑开，会突然明白：修复本身，就是一种对关系和时间的尊重。` },
    { title: "现代散文 45：图书馆靠窗位", text: `图书馆最受欢迎的位置总是靠窗那一排。上午的阳光斜着照进来，落在摊开的笔记本上，字迹的深浅都看得清楚。有人戴降噪耳机做题，有人一边查资料一边在便签上写提醒。馆内很安静，但这种安静并不空洞，它充满了“正在努力”的气味。每个人都在和自己的目标较劲，谁也顾不上评判别人。学习有时像长跑，进步缓慢又不明显，但只要愿意在座位上多坐一小时，很多看似跨不过去的坎，最终都会被时间和耐心磨平。` },
    { title: "现代散文 46：下班回家的路", text: `下班后的那段路是一天里最私人的时刻。地铁里的人群逐渐稀疏，耳机里放着熟悉的歌，窗外的灯牌快速后退。便利店门口飘出烤肠味，路边小摊支起灯泡，老板招呼着晚归的顾客。白天的身份在这段路上慢慢卸下：项目、会议、指标都暂时退到背景。你只需要想今晚吃什么，明早几点起。有人说这很普通，可正是这种普通，构成了多数人真实的生活骨架。能够平安回家，本身就是值得珍惜的日常胜利。` },
    { title: "现代散文 47：老树和新楼", text: `小区门口那棵老樟树比旁边的新楼还先到这里。施工围挡换了几轮，它一直在，春天发新叶，夏天遮阴，秋天把细碎的果实落满地面。新楼玻璃幕墙反光很亮，快递柜和智能门禁都很现代，可很多老人还是习惯在树下聊天、下棋、看孩子。城市更新常常追求速度，树却用几十年的时间提醒我们，真正可靠的变化应该允许记忆留下位置。新与旧并不一定对立，它们可以在同一条街上并肩存在，互相解释彼此。` },
    { title: "现代散文 48：海边黄昏", text: `黄昏的海边总让人自动放慢语速。潮水一层层推上来，又退回去，留下细密的泡沫和被磨圆的贝壳。孩子们追着浪跑，鞋子湿了也不在意；远处有人坐在礁石上，长时间不说话，只看天色从蓝变橙，再慢慢沉入灰紫。海风带着咸味，把头发吹乱，也把心里那些纠结吹松一点。很多答案并不会在此刻出现，但你会重新获得等待的耐心。自然最慷慨的地方，是它从不催促人立刻想明白，而是先让你安静下来。` },
    { title: "现代散文 49：凌晨四点的医院", text: `凌晨四点的医院走廊灯光很白，空气里有消毒水的味道。值班护士脚步很轻，推车经过时轮子发出短促的声响。候诊区有人裹着外套打盹，有人盯着电子屏一遍遍刷新叫号。这里聚集了人最脆弱也最坚强的时刻：担忧、等待、祈祷、咬牙。很多平日里觉得重要的争执，在病床边会突然失去分量。生命用这种方式提醒我们，真正需要珍惜的不是“赢过谁”，而是能平平安安地一起吃饭、散步、说几句普通的话。` },
    { title: "现代散文 50：毕业季的操场", text: `六月的操场被阳光晒得发白，毕业生穿着学位服一遍遍拍照。有人把帽子抛向空中，有人在看台边悄悄掉眼泪。三四年的日常在这一天被压缩成许多镜头：食堂排队、图书馆通宵、社团晚会、宿舍夜谈。离开并不总是壮阔的，它更像一扇门悄悄打开，你还来不及完全准备，就要迈向下一段路。庆祝和不安常常同时存在。也许多年之后，最难忘的不是典礼本身，而是那天傍晚和朋友并排坐在跑道边，谁也不说“再见”。` },
    { title: "现代散文 51：快递站", text: `小区快递站每天都像一场小型集市。货架上按楼栋贴着标签，扫码枪“滴滴”作响，取件码此起彼伏。快递员把箱子搬进搬出，动作熟练得像在完成某种固定舞步。有人取的是新买的耳机，有人取的是给父母的血压仪，也有人只是买了一袋猫粮。包裹看似普通，却装着不同家庭的期待。现代生活的效率常常依赖这些不被注意的环节：有人在凌晨分拣，有人在烈日下配送，才让“明天到”变成真正可兑现的承诺。` },
    { title: "现代散文 52：雨夜骑行", text: `雨夜骑车回家，路面反光像铺了一层薄镜。红绿灯倒映在水里，被车轮碾碎又迅速合拢。雨衣帽檐遮住一部分视线，风从袖口灌进来，手指有些发冷。可当你稳定地踩着踏板，穿过一条又一条街，心里反而会生出一种笃定：再远的路，只要保持节奏，总能抵达。生活里很多阶段都像这样的骑行，环境并不理想，甚至有点狼狈，但你仍可以凭借一点耐心和方向感，把自己安全带回想去的地方。` },
    { title: "现代散文 53：乡镇集市", text: `逢集的早晨，乡镇街道比平时早醒两个小时。三轮车上堆着刚摘的青椒和茄子，布匹摊把花色一匹匹摊开，卖糖画的师傅围着铜勺画出龙和鱼。老人拎着竹篮慢慢挑菜，孩子捏着硬币在玩具摊前犹豫。这里没有统一的背景音乐，叫卖声、笑声、讨价还价声本身就是最生动的旋律。集市不只是一种交易空间，也是一种社区记忆的延续。人们在这里交换的不只是物品，还有消息、关系和彼此生活的温度。` },
    { title: "现代散文 54：办公室绿植", text: `办公室角落那盆绿萝是同事轮流照看的。有人记得浇水，有人负责擦叶片上的灰，有人把它挪到更靠近窗的位置。项目推进时大家都忙，仍会有人经过时顺手扶一下歪掉的枝条。这盆植物长得并不快，却见证了许多小事：加班夜里的外卖盒、庆功时分发的蛋糕、离职同事留下的便签。工作常被描述成冷冰冰的流程，但真正让团队维持韧性的，往往是这些看似无关绩效的细节关照。` },
    { title: "现代散文 55：黄昏校门口", text: `放学时的校门口总是热闹得像节日。家长在人群里举着名字牌，小摊上烤肠和糖炒栗子的香味混在一起。孩子们背着书包冲出来，一边说今天的课堂趣事，一边惦记晚饭吃什么。保安把车流和人流一点点分开，反复提醒大家慢行。这样的场景每天重复，却很少让人厌烦，因为它包含了一个社区最直接的生命力。教育并不只发生在教室里，也发生在这条回家路上，在一句句问候和陪伴里慢慢落地。` },
    { title: "现代散文 56：手写便签", text: `在键盘和输入法主导的时代，手写便签反而显得珍贵。冰箱门上贴着“牛奶快喝完了”，电脑边压着“下午三点开会”，书桌角落有一句给自己的提醒：“别急，先做最重要的一件事。”字迹有快有慢，有整齐也有潦草，却都带着明确的情绪温度。手写的好处在于它让人停顿，哪怕只停几秒，也足够把注意力从纷乱里拉回来。很多时候我们并不缺信息，缺的是一张能把心神重新聚焦的小纸片。` },
    { title: "现代散文 57：春天的公交站", text: `春天一到，公交站旁那排海棠就先开花。早高峰的人群匆匆经过，偶尔有人抬头看一眼，脚步会不自觉慢半拍。花瓣被风吹落在站台边，和广告牌、线路图并排出现，像是给通勤日程临时加了一行注释。等车的时间通常被嫌弃太长，但在这样的清晨，它反而成了一个小空隙，让人有机会从任务清单里抬起头。生活并不会因为几朵花变轻松，却会因为这几秒注视，变得更有层次。` },
    { title: "现代散文 58：故乡的河堤", text: `小时候的河堤很长，长到我们以为可以一直跑到天边。夏天傍晚，家家户户搬着竹椅出来乘凉，老人摇蒲扇，孩子追萤火虫，河面上偶尔有小船慢慢划过。多年后再回去，堤岸修得更平整，路灯也更亮了，很多旧店换了招牌，但风吹过芦苇的声音几乎没变。故乡最奇妙的地方在于，它既会更新，也会保留。你每次回去都能看见变化，同时也能确认自己仍被某种熟悉感温柔接住。` },
    { title: "现代散文 59：夜班后的清晨", text: `夜班结束走出大楼时，天刚刚发白。街道还没完全苏醒，清洁车在远处慢慢经过，路边早餐摊正把桌椅摆开。连续工作的疲惫会在这一刻集中涌上来，肩膀发沉，眼睛发酸，但心里又有一种完成任务后的踏实。很多职业的辛苦不容易被看见，因为它发生在多数人休息的时候。也正因如此，每一个平稳运转的白天背后，都有许多人在凌晨时分默默交班。向他们致意，也是在向这座城市的秩序致意。` },
    { title: "现代散文 60：周日傍晚", text: `周日傍晚总带着一点特别的静。阳台上晾了一周的衣服被收进柜子，冰箱里补满了接下来几天要用的食材，书桌上的文件也按顺序整理好。楼道里偶尔传来拖地声，电视机里放着轻松的综艺，窗外天色一点点暗下去。有人会对周一感到紧张，但这种紧张并不全是坏事，它提醒我们生活仍在向前。把周日过成一个缓冲带，给身体、房间和心情都留出整理时间，新的星期就不再像突袭，而像按时抵达。` }
  ],
  en: [
    { title: "Classic 1: Pride and Prejudice", text: `It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.` },
    { title: "Classic 2: A Tale of Two Cities", text: `It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair. We had everything before us, we had nothing before us.` },
    { title: "Classic 3: Moby-Dick", text: `Call me Ishmael. Some years ago, never mind how long precisely, having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation.` },
    { title: "Classic 4: Jane Eyre", text: `There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further out-door exercise was now out of the question.` },
    { title: "Classic 5: Great Expectations", text: `My father's family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip. I give Pirrip as my father's family name, on the authority of his tombstone and my sister Mrs. Joe Gargery, who married the blacksmith.` },
    { title: "Classic 6: David Copperfield", text: `Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show. To begin my life with the beginning of my life, I record that I was born on a Friday, at twelve o'clock at night. It was remarked that the clock began to strike, and I began to cry, simultaneously.` },
    { title: "Classic 7: Wuthering Heights", text: `1801. I have just returned from a visit to my landlord, the solitary neighbour that I shall be troubled with. This is certainly a beautiful country! In all England, I do not believe that I could have fixed on a situation so completely removed from the stir of society.` },
    { title: "Classic 8: Emma", text: `Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite some of the best blessings of existence; and had lived nearly twenty-one years in the world with very little to distress or vex her. She was the youngest of the two daughters of a most affectionate, indulgent father.` },
    { title: "Classic 9: Sense and Sensibility", text: `The family of Dashwood had long been settled in Sussex. Their estate was large, and their residence was at Norland Park, in the centre of their property, where, for many generations, they had lived in so respectable a manner as to engage the general good opinion of their surrounding acquaintance.` },
    { title: "Classic 10: Persuasion", text: `Sir Walter Elliot, of Kellynch Hall, in Somersetshire, was a man who, for his own amusement, never took up any book but the Baronetage; there he found occupation for an idle hour, and consolation in a distressed one; there his faculties were roused into admiration and respect.` },
    { title: "Classic 11: Oliver Twist", text: `Among other public buildings in a certain town, which for many reasons it will be prudent to refrain from mentioning, and to which I will assign no fictitious name, there is one anciently common to most towns, great or small: to wit, a workhouse; and in this workhouse was born, on a day and date which I need not trouble myself to repeat, the item of mortality whose name is prefixed to the head of this chapter.` },
    { title: "Classic 12: The Adventures of Sherlock Holmes", text: `To Sherlock Holmes she is always the woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind.` },
    { title: "Classic 13: The Hound of the Baskervilles", text: `Mr. Sherlock Holmes, who was usually very late in the mornings, save upon those not infrequent occasions when he was up all night, was seated at the breakfast table. I stood upon the hearth-rug and picked up the stick which our visitor had left behind him the night before.` },
    { title: "Classic 14: Dracula", text: `3 May. Bistritz. Left Munich at 8:35 P.M., on 1st May, arriving at Vienna early next morning; should have arrived at 6:46, but train was an hour late. Budapest seems a wonderful place, from the glimpse which I got of it from the train and the little I could walk through the streets.` },
    { title: "Classic 15: Frankenstein", text: `You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.` },
    { title: "Classic 16: The Time Machine", text: `The Time Traveller was expounding a recondite matter to us. His grey eyes shone and twinkled, and his usually pale face was flushed and animated. The fire burned brightly, and the soft radiance of the incandescent lights in the lilies of silver caught the bubbles that flashed and passed in our glasses.` },
    { title: "Classic 17: Treasure Island", text: `Squire Trelawney, Dr. Livesey, and the rest of these gentlemen having asked me to write down the whole particulars about Treasure Island, from the beginning to the end, keeping nothing back but the bearings of the island, and that only because there is still treasure not yet lifted, I take up my pen in the year of grace 17--.` },
    { title: "Classic 18: Gulliver's Travels", text: `My father had a small estate in Nottinghamshire; I was the third of five sons. He sent me to Emmanuel College in Cambridge at fourteen years old, where I resided three years, and applied myself close to my studies; but the charge of maintaining me, although I had a very scanty allowance, being too great for a narrow fortune, I was bound apprentice to Mr. James Bates.` },
    { title: "Classic 19: Robinson Crusoe", text: `I was born in the year 1632, in the city of York, of a good family, though not of that country, my father being a foreigner of Bremen, who settled first at Hull. He got a good estate by merchandise, and leaving off his trade, lived afterwards at York.` },
    { title: "Classic 20: The Call of the Wild", text: `Buck did not read the newspapers, or he would have known that trouble was brewing, not alone for himself, but for every tide-water dog, strong of muscle and with warm, long hair, from Puget Sound to San Diego. Because men, groping in the Arctic darkness, had found a yellow metal, and because steamship and transportation companies were booming the find.` },
    { title: "Classic 21: The Picture of Dorian Gray", text: `The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.` },
    { title: "Classic 22: The Strange Case of Dr Jekyll and Mr Hyde", text: `Mr. Utterson the lawyer was a man of a rugged countenance, that was never lighted by a smile; cold, scanty and embarrassed in discourse; backward in sentiment; lean, long, dusty, dreary and yet somehow lovable.` },
    { title: "Classic 23: The Adventures of Tom Sawyer", text: `Tom! No answer. Tom! No answer. What's gone with that boy, I wonder? You TOM! No answer. The old lady pulled her spectacles down and looked over them about the room; then she put them up and looked out under them.` },
    { title: "Classic 24: Adventures of Huckleberry Finn", text: `You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly.` },
    { title: "Classic 25: Walden", text: `When I wrote the following pages, or rather the bulk of them, I lived alone, in the woods, a mile from any neighbor, in a house which I had built myself, on the shore of Walden Pond, in Concord, Massachusetts, and earned my living by the labor of my hands only.` },
    { title: "Classic 26: The Republic", text: `I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess; and also because I wanted to see in what manner they would celebrate the festival, which was a new thing. I was delighted with the procession of the inhabitants.` },
    { title: "Classic 27: Meditations", text: `From my grandfather Verus I learned good morals and the government of my temper. From the reputation and remembrance of my father, modesty and a manly character. From my mother, piety and beneficence, and abstinence, not only from evil deeds, but even from evil thoughts.` },
    { title: "Classic 28: The Federalist No. 1", text: `After an unequivocal experience of the inefficacy of the subsisting federal government, you are called upon to deliberate on a new Constitution for the United States of America. The subject speaks its own importance; comprehending in its consequences nothing less than the existence of the Union.` },
    { title: "Classic 29: The Souls of Black Folk", text: `Between me and the other world there is ever an unasked question: unasked by some through feelings of delicacy; by others through the difficulty of rightly framing it. All, nevertheless, flutter round it. They approach me in a half-hesitant sort of way, eye me curiously or compassionately, and then, instead of saying directly, How does it feel to be a problem? they say, I know an excellent colored man in my town.` },
    { title: "Classic 30: Common Sense", text: `Perhaps the sentiments contained in the following pages, are not yet sufficiently fashionable to procure them general favor; a long habit of not thinking a thing wrong, gives it a superficial appearance of being right, and raises at first a formidable outcry in defence of custom.` }
  ]
};

const zhContinuation = {
  "经典 1：桃花源记": "其中往来种作，男女衣着，悉如外人。黄发垂髫，并怡然自乐。见渔人，乃大惊，问所从来。具答之。便要还家，设酒杀鸡作食。",
  "经典 2：岳阳楼记": "然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？若夫霪雨霏霏，连月不开，阴风怒号，浊浪排空。",
  "经典 3：前赤壁赋": "于是饮酒乐甚，扣舷而歌之。歌曰：桂棹兮兰桨，击空明兮溯流光。渺渺兮予怀，望美人兮天一方。客有吹洞箫者，倚歌而和之。",
  "经典 4：出师表": "宫中府中，俱为一体；陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。",
  "经典 5：陈情表": "茕茕孑立，形影相吊。而刘夙婴疾病，常在床蓐，臣侍汤药，未尝废离。逮奉圣朝，沐浴清化。前太守臣逵察臣孝廉，后刺史臣荣举臣秀才。",
  "经典 6：兰亭集序": "是日也，天朗气清，惠风和畅。仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也。夫人之相与，俯仰一世。",
  "经典 7：归去来兮辞": "三径就荒，松菊犹存。携幼入室，有酒盈樽。引壶觞以自酌，眄庭柯以怡颜。倚南窗以寄傲，审容膝之易安。园日涉以成趣，门虽设而常关。",
  "经典 8：师说": "是故无贵无贱，无长无少，道之所存，师之所存也。嗟乎！师道之不传也久矣，欲人之无惑也难矣。古之圣人，其出人也远矣，犹且从师而问焉。",
  "经典 9：劝学": "吾尝终日而思矣，不如须臾之所学也；吾尝跂而望矣，不如登高之博见也。登高而招，臂非加长也，而见者远。顺风而呼，声非加疾也，而闻者彰。",
  "经典 10：滕王阁序": "十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。",
  "经典 11：阿房宫赋": "长桥卧波，未云何龙？复道行空，不霁何虹？高低冥迷，不知西东。歌台暖响，春光融融；舞殿冷袖，风雨凄凄。一日之内，一宫之间，而气候不齐。",
  "经典 12：醉翁亭记": "醉翁之意不在酒，在乎山水之间也。山水之乐，得之心而寓之酒也。若夫日出而林霏开，云归而岩穴暝，晦明变化者，山间之朝暮也。",
  "经典 13：逍遥游": "去以六月息者也。野马也，尘埃也，生物之以息相吹也。天之苍苍，其正色邪？其远而无所至极邪？其视下也，亦若是则已矣。",
  "经典 14：道德经（第一章）": "天下皆知美之为美，斯恶已；皆知善之为善，斯不善已。有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随，恒也。",
  "经典 15：论语（学而）": "子曰：\"巧言令色，鲜矣仁。\"曾子曰：\"吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？\"子曰：\"道千乘之国，敬事而信。\"",
  "经典 16：孟子（梁惠王上）": "万乘之国，弑其君者，必千乘之家；千乘之国，弑其君者，必百乘之家。万取千焉，千取百焉，不为不多矣。苟为后义而先利，不夺不餍。",
  "经典 17：过秦论": "孝公既没，惠文、武、昭襄蒙故业，因遗策，南取汉中，西举巴蜀，东割膏腴之地，北收要害之郡。诸侯恐惧，会盟而谋弱秦，不爱珍器重宝肥饶之地。",
  "经典 18：六国论": "古人云：以地事秦，犹抱薪救火，薪不尽，火不灭。此言得之。齐人未尝赂秦，终继五国迁灭，何哉？与嬴而不助五国也。五国既丧，齐亦不免矣。",
  "经典 19：送东阳马生序": "又患无硕师名人与游，尝趋百里外，从乡之先达执经叩问。先达德隆望尊，门人弟子填其室，未尝稍降辞色。余立侍左右，援疑质理，俯身倾耳以请。",
  "经典 20：小石潭记": "日光下澈，影布石上，佁然不动；俶尔远逝，往来翕忽，似与游者相乐。潭西南而望，斗折蛇行，明灭可见。其岸势犬牙差互，不可知其源。",
  "经典 21：始得西山宴游记": "今年九月二十八日，因坐法华西亭，望西山，始指异之。遂命仆过湘江，缘染溪，斫榛莽，焚茅茷，穷山之高而止。攀援而登，箕踞而遨。",
  "经典 22：陋室铭": "可以调素琴，阅金经。无丝竹之乱耳，无案牍之劳形。谈笑有鸿儒，往来无白丁。斯是陋室，惟吾德馨。山不在高，有仙则名；水不在深，有龙则灵。",
  "经典 23：爱莲说": "噫！菊之爱，陶后鲜有闻。莲之爱，同予者何人？牡丹之爱，宜乎众矣。予独爱莲之中通外直，不蔓不枝，香远益清，亭亭净植。",
  "经典 24：赤壁怀古": "故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。大江东去，千古风流人物，江山如画，多少英雄豪杰，俱往矣。",
  "经典 25：三国演义开篇": "且说天下将乱，必有妖孽。建宁二年四月望日，帝御温德殿。方升座，殿角狂风骤起，只见一条大青蛇，从梁上飞将下来，蟠于椅上。",
  "经典 26：水浒传开篇": "却说仁宗天子在位，嘉祐三年三月三日，五凤楼前大赦天下。此后民间渐起豪强，官场也多因循，州县政务壅滞，百姓多有怨气。",
  "经典 27：西游记开篇": "再五千四百岁，亥会将终，贞下起元，近子之会，而复逐渐开明。邵康节曰：冬至子之半，天心无改移。一阳初动处，万物未生时。",
  "经典 28：红楼梦开篇": "列位看官，你道此书中说的是谁家故事？据作者自云，曾历过一番梦幻之后，故将真事隐去，而借通灵之说，撰此石头记一书，亦真亦幻。",
  "经典 29：礼记·学记": "知不足，然后能自反也；知困，然后能自强也。故曰：教学相长也。《兑命》曰：\"学学半。\"其此之谓乎！古之教者，家有塾，党有庠，术有序，国有学。",
  "经典 30：孙子兵法·始计": "天者，阴阳、寒暑、时制也。地者，远近、险易、广狭、死生也。将者，智、信、仁、勇、严也。法者，曲制、官道、主用也。凡此五者，将莫不闻。"
};

textPool.zh = textPool.zh.map((item) => ({
  ...item,
  text: `${item.text}${zhContinuation[item.title] || ""}`
}));

function normalizeTextLength(text, minLen, maxLen, lang) {
  const base = text.trim();
  const joiner = lang === "zh" ? "" : " ";
  const sentenceMatcher = lang === "zh"
    ? /[^。！？；]+[。！？；]?/g
    : /[^.!?;]+[.!?;]?/g;
  const sentenceParts = base.match(sentenceMatcher) || [base];
  const sentences = sentenceParts.map((part) => part.trim()).filter(Boolean);
  let output = base;
  let sentenceIndex = 0;

  while (output.length < minLen && sentences.length > 0) {
    const nextSentence = sentences[sentenceIndex % sentences.length];
    output += joiner + nextSentence;
    sentenceIndex += 1;
  }

  return output;
}

textPool.zh = textPool.zh.map((item) => ({
  ...item,
  text: normalizeTextLength(item.text, 300, 400, "zh")
}));

textPool.en = textPool.en.map((item) => ({
  ...item,
  text: normalizeTextLength(item.text, 300, 400, "en")
}));
const langSelect = document.getElementById("langSelect");
const articleSelect = document.getElementById("articleSelect");
const newTextBtn = document.getElementById("newTextBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const sessionStatusEl = document.getElementById("sessionStatus");
const typingAreaEl = document.getElementById("typingArea");
const lineStageEl = document.getElementById("lineStage");
const startOverlay = document.getElementById("startOverlay");
const timeEl = document.getElementById("time");
const speedEl = document.getElementById("speed");
const bestSpeedEl = document.getElementById("bestSpeed");
const accuracyEl = document.getElementById("accuracy");
const progressEl = document.getElementById("progress");

const BEST_SPEED_STORAGE_KEY = "typing_practice_best_speed_v1";

let currentText = "";
let currentLines = [];
let lineInputs = [];
let currentLineIndex = 0;
let timer = null;
let startTime = null;
let totalTyped = 0;
let totalCorrect = 0;
let isComposing = false;
let hasStarted = false;
let isPaused = false;
let hasFinished = false;
let elapsedMs = 0;
let resumeStartAt = null;
let currentArticleKey = "";
let bestSpeedMap = loadBestSpeedMap();

function loadBestSpeedMap() {
  try {
    const raw = localStorage.getItem(BEST_SPEED_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveBestSpeedMap() {
  try {
    localStorage.setItem(BEST_SPEED_STORAGE_KEY, JSON.stringify(bestSpeedMap));
  } catch {
    // Ignore storage write errors (e.g. private mode restrictions).
  }
}

function getCurrentBestSpeed() {
  const value = Number(bestSpeedMap[currentArticleKey] || 0);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function renderBestSpeed() {
  const best = getCurrentBestSpeed();
  bestSpeedEl.textContent = best > 0 ? `${best} CPM` : "--";
}

function getCurrentCpm() {
  const elapsedMinutes = getElapsedMs() / 60000;
  if (elapsedMinutes <= 0) return 0;
  return Math.round(totalCorrect / elapsedMinutes);
}

function updateBestSpeedIfNeeded() {
  if (!currentArticleKey) return;
  const currentCpm = getCurrentCpm();
  if (currentCpm <= 0) return;
  const previousBest = getCurrentBestSpeed();
  if (currentCpm > previousBest) {
    bestSpeedMap[currentArticleKey] = currentCpm;
    saveBestSpeedMap();
    renderBestSpeed();
  }
}

function getInputPlaceholder(isActiveRow) {
  if (!isActiveRow) {
    return "";
  }
  if (isPaused) {
    return langSelect.value === "zh" ? "当前已暂停，点击继续" : "Paused. Click to resume";
  }
  if (hasStarted) {
    return "";
  }
  return langSelect.value === "zh" ? "点击或空格开始" : "Click or press Space to start";
}

function getActiveInputEl() {
  return lineStageEl.querySelector(`.row-input[data-index="${currentLineIndex}"]`);
}

function syncLineInputStates() {
  const inputs = lineStageEl.querySelectorAll(".row-input");
  inputs.forEach((input) => {
    const rowIndex = Number(input.dataset.index);
    const isActiveRow = rowIndex === currentLineIndex && !hasFinished;
    input.disabled = !hasStarted || isPaused || hasFinished || !isActiveRow;
    input.placeholder = getInputPlaceholder(isActiveRow);
    input.classList.toggle("active", isActiveRow);
  });
}

function updateStartOverlay() {
  if (isPaused) {
    startOverlay.textContent = langSelect.value === "zh" ? "已暂停，点击或空格继续" : "Paused. Click or press Space to resume";
    startOverlay.classList.remove("hidden");
    startOverlay.classList.add("paused");
    return;
  }
  startOverlay.classList.remove("paused");
  startOverlay.textContent = langSelect.value === "zh" ? "点击或空格开始" : "Click or press Space to start";
  startOverlay.classList.toggle("hidden", hasStarted);
}

function setSessionStatus(key) {
  const map = {
    idle: langSelect.value === "zh" ? "状态：未开始" : "Status: Not started",
    running: langSelect.value === "zh" ? "状态：进行中" : "Status: Running",
    paused: langSelect.value === "zh" ? "状态：已暂停" : "Status: Paused",
    done: langSelect.value === "zh" ? "状态：已完成" : "Status: Completed"
  };
  sessionStatusEl.textContent = map[key];
}

function setStartedState(started) {
  hasStarted = started;
  pauseBtn.disabled = !started || hasFinished;
  updateStartOverlay();
  syncLineInputStates();
}

function setPausedState(paused) {
  isPaused = paused;
  typingAreaEl.classList.toggle("paused", paused);
  pauseBtn.textContent = paused
    ? (langSelect.value === "zh" ? "继续" : "Resume")
    : (langSelect.value === "zh" ? "暂停" : "Pause");
  updateStartOverlay();
  syncLineInputStates();
  if (hasFinished) return;
  setSessionStatus(paused ? "paused" : (hasStarted ? "running" : "idle"));
}

function renderArticleOptions(lang) {
  const list = textPool[lang];
  articleSelect.innerHTML = "";
  list.forEach((item, index) => {
    const opt = document.createElement("option");
    opt.value = String(index);
    opt.textContent = item.title;
    articleSelect.appendChild(opt);
  });
}

function setArticleByIndex(index) {
  const list = textPool[langSelect.value];
  const safeIndex = Math.max(0, Math.min(index, list.length - 1));
  articleSelect.value = String(safeIndex);
  currentArticleKey = `${langSelect.value}:${safeIndex}`;
  currentText = list[safeIndex].text;
  currentLines = splitIntoLines(currentText, langSelect.value);
  lineInputs = Array(currentLines.length).fill("");
  currentLineIndex = 0;
  renderLineStage();
  renderBestSpeed();
  clearInputAndStats();
}

function pickRandomIndex(lang) {
  const list = textPool[lang];
  return Math.floor(Math.random() * list.length);
}

let textMeasureCanvas = null;

function getTextMeasureCanvas() {
  if (!textMeasureCanvas) {
    textMeasureCanvas = document.createElement("canvas");
  }
  return textMeasureCanvas;
}

function getLineMeasureConfig() {
  const stageStyle = window.getComputedStyle(lineStageEl);
  const fontSize = stageStyle.fontSize || "20px";
  const fontFamily = stageStyle.fontFamily || "sans-serif";
  const fontWeight = stageStyle.fontWeight || "400";
  const letterSpacing = Number.parseFloat(stageStyle.letterSpacing) || 0;
  const font = `${fontWeight} ${fontSize} ${fontFamily}`;

  const stageWidth = lineStageEl.clientWidth || typingAreaEl.clientWidth || 760;
  const rowPadding = 12;
  const rowBorder = 2;
  const scrollbarGap = 12;
  const safeWidth = Math.max(180, stageWidth - rowPadding - rowBorder - scrollbarGap);

  return {
    font,
    letterSpacing,
    maxWidth: safeWidth
  };
}

function measureLineWidth(text, config) {
  if (!text) return 0;
  const canvas = getTextMeasureCanvas();
  const ctx = canvas.getContext("2d");
  ctx.font = config.font;
  const baseWidth = ctx.measureText(text).width;
  const spacingWidth = Math.max(0, text.length - 1) * config.letterSpacing;
  return baseWidth + spacingWidth;
}

function splitIntoLines(text, lang) {
  const config = getLineMeasureConfig();
  const breakChars = lang === "zh"
    ? "，。！？；：、）》」』"
    : " ,.!?;:)]}\"'";
  const lines = [];
  let start = 0;

  while (start < text.length) {
    let end = start;
    let lastBreak = -1;
    let current = "";

    while (end < text.length) {
      const next = text[end];
      const candidate = current + next;
      const candidateWidth = measureLineWidth(candidate, config);

      if (candidateWidth > config.maxWidth) {
        break;
      }

      current = candidate;
      end += 1;
      if (breakChars.includes(next)) {
        lastBreak = end;
      }
    }

    if (end === start) {
      end = Math.min(start + 1, text.length);
    } else if (lastBreak > start && end < text.length) {
      const trailingSegment = text.slice(lastBreak, end);
      const trailingWidth = measureLineWidth(trailingSegment, config);
      if (trailingWidth < config.maxWidth * 0.18) {
        end = lastBreak;
      }
    }

    lines.push(text.slice(start, end));
    start = end;
  }

  return lines;
}

function recomputeCurrentLines() {
  currentLines = splitIntoLines(currentText, langSelect.value);
  lineInputs = Array(currentLines.length).fill("");
  currentLineIndex = 0;
  renderLineStage();
  clearInputAndStats();
}

function renderLineStage() {
  lineStageEl.innerHTML = "";
  currentLines.forEach((line, index) => {
    const row = document.createElement("div");
    row.className = "line-row";
    if (index < currentLineIndex) row.classList.add("done");
    if (index === currentLineIndex) row.classList.add("current");

    for (const ch of line) {
      const span = document.createElement("span");
      span.textContent = ch;
      span.className = "char";
      row.appendChild(span);
    }

    lineStageEl.appendChild(row);
    const slot = document.createElement("div");
    slot.className = "line-input-slot";
    const rowInput = document.createElement("input");
    rowInput.type = "text";
    rowInput.className = "line-input row-input";
    rowInput.dataset.index = String(index);
    rowInput.value = lineInputs[index] || "";
    slot.appendChild(rowInput);
    lineStageEl.appendChild(slot);
  });

  if (currentLines.length === 0) {
    const empty = document.createElement("div");
    empty.className = "line-row";
    empty.textContent = "";
    lineStageEl.appendChild(empty);
  }
  syncLineInputStates();
}

function scrollCurrentInputIntoView(force = false) {
  const activeInput = getActiveInputEl();
  if (!activeInput) return;
  if (!force) {
    const rect = activeInput.getBoundingClientRect();
    const host = lineStageEl.getBoundingClientRect();
    const middleTop = host.top + host.height * 0.35;
    const middleBottom = host.top + host.height * 0.65;
    if (rect.top >= middleTop && rect.bottom <= middleBottom) {
      return;
    }
  }
  activeInput.scrollIntoView({
    block: "center",
    behavior: "auto"
  });
}

function formatSeconds(seconds) {
  return `${seconds}s`;
}

function resetStats() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  startTime = null;
  elapsedMs = 0;
  resumeStartAt = null;
  totalTyped = 0;
  totalCorrect = 0;
  timeEl.textContent = "0s";
  speedEl.textContent = "0 CPM";
  accuracyEl.textContent = "100%";
  progressEl.textContent = `0/${currentText.length}`;
}

function clearInputAndStats() {
  lineInputs = Array(currentLines.length).fill("");
  isComposing = false;
  hasFinished = false;
  currentLineIndex = 0;
  setStartedState(false);
  setPausedState(false);
  setSessionStatus("idle");
  resetStats();
  renderLineStage();
  scrollCurrentInputIntoView(true);
  const activeInput = getActiveInputEl();
  if (activeInput) activeInput.focus();
}

function beginTypingSession() {
  if (hasStarted || hasFinished) return;
  setStartedState(true);
  setPausedState(false);
  setSessionStatus("running");
  const activeInput = getActiveInputEl();
  if (activeInput) activeInput.focus();
  scrollCurrentInputIntoView(true);
  startClock();
}

function startClock() {
  if (timer) return;
  if (!startTime) {
    startTime = Date.now();
  }
  resumeStartAt = Date.now();
  timer = setInterval(() => {
    const sec = Math.floor(getElapsedMs() / 1000);
    timeEl.textContent = formatSeconds(sec);
    updateSpeedAndAccuracy();
  }, 250);
}

function stopClock() {
  if (resumeStartAt) {
    elapsedMs += Date.now() - resumeStartAt;
    resumeStartAt = null;
  }
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  timeEl.textContent = formatSeconds(Math.floor(getElapsedMs() / 1000));
  updateSpeedAndAccuracy();
}

function getElapsedMs() {
  if (!resumeStartAt) return elapsedMs;
  return elapsedMs + (Date.now() - resumeStartAt);
}

function togglePause() {
  if (!hasStarted || hasFinished) return;
  if (isPaused) {
    setPausedState(false);
    setSessionStatus("running");
    startClock();
    const activeInput = getActiveInputEl();
    if (activeInput) activeInput.focus();
    return;
  }
  stopClock();
  setPausedState(true);
}

function updateSpeedAndAccuracy() {
  const cpm = getCurrentCpm();
  const accuracy = totalTyped > 0 ? Math.round((totalCorrect / totalTyped) * 100) : 100;
  speedEl.textContent = `${cpm} CPM`;
  accuracyEl.textContent = `${accuracy}%`;
}

function clearAllCharMarks() {
  const spans = lineStageEl.querySelectorAll(".char");
  spans.forEach((span) => {
    span.classList.remove("correct", "wrong");
  });
}

function syncRenderedInputValue(index) {
  const input = lineStageEl.querySelector(`.row-input[data-index="${index}"]`);
  if (!input) return;
  input.value = lineInputs[index] || "";
}

function applyOverflowFromLine(startIndex) {
  for (let i = startIndex; i < currentLines.length; i += 1) {
    const maxLen = currentLines[i].length;
    const value = lineInputs[i] || "";
    if (value.length <= maxLen) continue;

    const kept = value.slice(0, maxLen);
    const overflow = value.slice(maxLen);
    lineInputs[i] = kept;
    syncRenderedInputValue(i);

    if (i + 1 >= currentLines.length) {
      break;
    }

    lineInputs[i + 1] = `${overflow}${lineInputs[i + 1] || ""}`;
    syncRenderedInputValue(i + 1);
  }
}

function evaluateInput() {
  if (!hasStarted || isPaused || hasFinished) return;
  applyOverflowFromLine(currentLineIndex);

  let typedCount = 0;
  let correctCount = 0;
  const rows = lineStageEl.querySelectorAll(".line-row");
  const activeTyped = lineInputs[currentLineIndex] || "";

  clearAllCharMarks();

  currentLines.forEach((line, rowIndex) => {
    const typed = lineInputs[rowIndex] || "";
    const row = rows[rowIndex];
    if (!row) return;
    typedCount += Math.min(typed.length, line.length);

    for (let charIndex = 0; charIndex < line.length; charIndex += 1) {
      const inputChar = typed[charIndex];
      if (inputChar == null) continue;
      if (inputChar === line[charIndex]) {
        correctCount += 1;
      }
    }
  });

  if (activeTyped.length > 0) {
    const currentRow = lineStageEl.querySelector(".line-row.current");
    const spans = currentRow ? currentRow.querySelectorAll(".char") : [];
    spans.forEach((span, charIndex) => {
      const inputChar = activeTyped[charIndex];
      if (inputChar == null) return;
      if (inputChar === span.textContent) {
        span.classList.add("correct");
      } else {
        span.classList.add("wrong");
      }
    });
  }

  totalTyped = typedCount;
  totalCorrect = correctCount;
  progressEl.textContent = `${Math.min(typedCount, currentText.length)}/${currentText.length}`;
  updateSpeedAndAccuracy();

  const activeLine = currentLines[currentLineIndex] || "";
  const remainChars = activeLine.length - activeTyped.length;
  if (remainChars <= 2) {
    scrollCurrentInputIntoView(false);
  }
  let moved = false;
  while (currentLineIndex < currentLines.length - 1) {
    const line = currentLines[currentLineIndex] || "";
    const typed = lineInputs[currentLineIndex] || "";
    const canAdvance = line.length > 0 && typed.length >= line.length;
    if (!canAdvance) break;
    currentLineIndex += 1;
    moved = true;
  }
  if (moved) {
    renderLineStage();
    scrollCurrentInputIntoView(true);
    const activeInput = getActiveInputEl();
    if (activeInput) activeInput.focus();
  }

  const allLinesCompleted = currentLines.every((line, index) => {
    const typed = lineInputs[index] || "";
    return typed.length >= line.length;
  });

  if (allLinesCompleted && typedCount >= currentText.length) {
    hasFinished = true;
    stopClock();
    updateBestSpeedIfNeeded();
    setPausedState(false);
    setSessionStatus("done");
    pauseBtn.disabled = true;
    renderLineStage();
  }
}

function onLanguageChange() {
  renderArticleOptions(langSelect.value);
  setArticleByIndex(0);
  setSessionStatus("idle");
}

let resizeTimer = null;

function handleResponsiveRelayout() {
  if (!currentText || hasStarted || hasFinished || isPaused) return;
  recomputeCurrentLines();
}

langSelect.addEventListener("change", onLanguageChange);
articleSelect.addEventListener("change", () => {
  setArticleByIndex(Number(articleSelect.value));
});

newTextBtn.addEventListener("click", () => {
  const randomIndex = pickRandomIndex(langSelect.value);
  setArticleByIndex(randomIndex);
});

pauseBtn.addEventListener("click", () => {
  togglePause();
});

resetBtn.addEventListener("click", () => {
  clearInputAndStats();
});

lineStageEl.addEventListener("compositionstart", (event) => {
  if (!hasStarted) return;
  if (!(event.target instanceof HTMLInputElement)) return;
  if (!event.target.classList.contains("row-input")) return;
  isComposing = true;
});

lineStageEl.addEventListener("compositionend", (event) => {
  if (!hasStarted) return;
  if (!(event.target instanceof HTMLInputElement)) return;
  if (!event.target.classList.contains("row-input")) return;
  isComposing = false;
  evaluateInput();
});

lineStageEl.addEventListener("input", (event) => {
  if (!hasStarted || isPaused) return;
  if (!(event.target instanceof HTMLInputElement)) return;
  if (!event.target.classList.contains("row-input")) return;
  const rowIndex = Number(event.target.dataset.index);
  if (!Number.isInteger(rowIndex) || rowIndex !== currentLineIndex) return;
  lineInputs[rowIndex] = event.target.value;
  if (isComposing) return;
  evaluateInput();
});

lineStageEl.addEventListener("keydown", (event) => {
  if (!(event.target instanceof HTMLInputElement)) return;
  if (!event.target.classList.contains("row-input")) return;
  if (event.key !== "Enter") return;
  event.preventDefault();
  // Manual Enter-based line switching is disabled.
});

startOverlay.addEventListener("click", () => {
  if (isPaused) {
    togglePause();
    return;
  }
  beginTypingSession();
});

typingAreaEl.addEventListener("click", (event) => {
  if (event.target === startOverlay) return;
  if (isPaused) {
    togglePause();
  } else if (!hasStarted) {
    beginTypingSession();
  } else {
    const activeInput = getActiveInputEl();
    if (activeInput) activeInput.focus();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code !== "Space") return;
  if (event.ctrlKey || event.altKey || event.metaKey) return;
  if (event.target instanceof HTMLInputElement && event.target.classList.contains("row-input") && hasStarted && !isPaused) return;
  if (isPaused) {
    event.preventDefault();
    togglePause();
    return;
  }
  if (hasStarted) return;
  event.preventDefault();
  beginTypingSession();
});

window.addEventListener("resize", () => {
  if (resizeTimer) {
    clearTimeout(resizeTimer);
  }
  resizeTimer = setTimeout(() => {
    handleResponsiveRelayout();
  }, 100);
});

onLanguageChange();




