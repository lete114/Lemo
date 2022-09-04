import { version } from '../../../package.json'

const key = [
  '3d眼镜',
  'EDG',
  'LPL',
  'beluga',
  '不好意思',
  '不服吗',
  '亲亲',
  '伞兵',
  '倚墙笑',
  '值得肯定',
  '偷偷看',
  '傻笑',
  '再见',
  '出家人',
  '击剑',
  '加班',
  '勉强笑',
  '危险',
  '发红包',
  '吃手',
  '吃瓜',
  '吐血',
  '吵架',
  '呦吼',
  '呲牙笑',
  '哈士奇',
  '哈士奇失去意识',
  '哈士奇失望',
  '哭泣',
  '唱歌',
  '喜欢',
  '嘿哈',
  '大笑',
  '失去信号',
  '失望',
  '头秃',
  '奋斗',
  '好奇',
  '好的',
  '害羞',
  '小丑',
  '小偷',
  '尬笑',
  '尴尬',
  '应援',
  '开心',
  '引起不适',
  '微笑',
  '思考',
  '恶心',
  '恶魔',
  '恶魔恐惧',
  '惊吓',
  '惊吓白眼',
  '惊讶',
  '惬意',
  '感动',
  '愤怒',
  '我看好你',
  '手机相机',
  '打咩',
  '打牌',
  '托腮',
  '扶额',
  '抠鼻',
  '抬眼镜',
  '拜托',
  '捂嘴笑',
  '捂脸',
  '擦汗',
  '放鞭炮',
  '敬礼',
  '整理发型',
  '斗鸡眼',
  '智慧的眼神',
  '月饼',
  '有没有搞错',
  '正确',
  '没招',
  '波吉',
  '泪奔',
  '流汗微笑',
  '流鼻涕',
  '深思',
  '滑稽',
  '滑稽吃瓜',
  '滑稽喝水',
  '滑稽奶茶',
  '滑稽柠檬',
  '滑稽狂汗',
  '滑稽被子',
  '烦恼',
  '熊熊',
  '熊猫',
  '熊猫唱歌',
  '熊猫喜欢',
  '熊猫失望',
  '熊猫意外',
  '熬夜',
  '爆炸',
  '牛年进宝',
  '狂热',
  '狗头',
  '狗头围脖',
  '狗头失望',
  '狗头意外',
  '狗头胖次',
  '狗头花',
  '狗头草',
  '猪头',
  '猪头意外',
  '生病',
  '电话',
  '疑问',
  '疼痛',
  '痛哭',
  '看穿一切',
  '眩晕',
  '睡觉',
  '禁言',
  '笑哭',
  '纠结',
  '绿帽',
  '缺牙笑',
  '翻白眼',
  '老虎意外',
  '耍酷',
  '胡子',
  '菜狗',
  '菜狗花',
  '蒙面滑稽',
  '虎年进宝',
  '被打',
  '裂开',
  '警告',
  '读书',
  '财神红包',
  '超爱',
  '这是啥',
  '送福',
  '送花',
  '错误',
  '阴险',
  '难以置信',
  '面具',
  '饥渴',
  '鬼脸',
  '黑线',
  '鼓掌'
]

export default (emotCDN) => {
  emotCDN = (emotCDN || `https://lib.baomitu.com/discuss/${version}`).replace(/\/$/, '') + '/assets/emot/'
  const items = {}
  for (const i of key) items[i] = emotCDN + i + '.png'
  return {
    '😀': {
      type: 'text',
      items: {
        'grinning face': '😀',
        'grinning face with big eyes': '😃',
        'grinning face with smiling eyes': '😄',
        'beaming face with smiling eyes': '😁',
        'grinning squinting face': '😆',
        'grinning face with sweat': '😅',
        'rolling on the floor laughing': '🤣',
        'face with tears of joy': '😂',
        'slightly smiling face': '🙂',
        'upside down face': '🙃',
        'winking face': '😉',
        'smiling face with smiling eyes': '😊',
        'smiling face with halo': '😇',
        'smiling face with hearts': '🥰',
        'smiling face with heart eyes': '😍',
        'star struck': '🤩',
        'face blowing a kiss': '😘',
        'kissing face': '😗',
        'smiling face': '☺️',
        'kissing face with closed eyes': '😚',
        'kissing face with smiling eyes': '😙',
        'face savoring food': '😋',
        'face with tongue': '😛',
        'winking face with tongue': '😜',
        'zany face': '🤪',
        'squinting face with tongue': '😝',
        'money mouth face': '🤑',
        'hugging face': '🤗',
        'face with hand over mouth': '🤭',
        'shushing face': '🤫',
        'thinking face': '🤔',
        'zipper mouth face': '🤐',
        'face with raised eyebrow': '🤨',
        'neutral face': '😐',
        'expressionless face': '😑',
        'face without mouth': '😶',
        'smirking face': '😏',
        'unamused face': '😒',
        'face with rolling eyes': '🙄',
        'grimacing face': '😬',
        'lying face': '🤥',
        'relieved face': '😌',
        'pensive face': '😔',
        'sleepy face': '😪',
        'drooling face': '🤤',
        'sleeping face': '😴',
        'face with medical mask': '😷',
        'face with thermometer': '🤒',
        'face with head bandage': '🤕',
        'nauseated face': '🤢',
        'face vomiting': '🤮',
        'sneezing face': '🤧',
        'hot face': '🥵',
        'cold face': '🥶',
        'woozy face': '🥴',
        'dizzy face': '😵',
        'exploding head': '🤯',
        'cowboy hat face': '🤠',
        'partying face': '🥳',
        'smiling face with sunglasses': '😎',
        'nerd face': '🤓',
        'face with monocle': '🧐',
        'confused face': '😕',
        'worried face': '😟',
        'slightly frowning face': '🙁',
        'frowning face': '☹️',
        'face with open mouth': '😮',
        'hushed face': '😯',
        'astonished face': '😲',
        'flushed face': '😳',
        'pleading face': '🥺',
        'frowning face with open mouth': '😦',
        'anguished face': '😧',
        'fearful face': '😨',
        'anxious face with sweat': '😰',
        'sad but relieved face': '😥',
        'crying face': '😢',
        'loudly crying face': '😭',
        'face screaming in fear': '😱',
        'confounded face': '😖',
        'persevering face': '😣',
        'disappointed face': '😞',
        'downcast face with sweat': '😓',
        'weary face': '😩',
        'tired face': '😫',
        'yawning face': '🥱',
        'face with steam from nose': '😤',
        'pouting face': '😡',
        'angry face': '😠',
        'face with symbols on mouth': '🤬',
        'smiling face with horns': '😈',
        'angry face with horns': '👿',
        skull: '💀',
        'skull and crossbones': '☠️',
        'pile of poo': '💩',
        'clown face': '🤡',
        ogre: '👹',
        goblin: '👺',
        ghost: '👻',
        alien: '👽',
        'alien monster': '👾',
        robot: '🤖',
        'grinning cat': '😺',
        'grinning cat with smiling eyes': '😸',
        'cat with tears of joy': '😹',
        'smiling cat with heart eyes': '😻',
        'cat with wry smile': '😼',
        'kissing cat': '😽',
        'weary cat': '🙀',
        'crying cat': '😿',
        'pouting cat': '😾',
        'see no evil monkey': '🙈',
        'hear no evil monkey': '🙉',
        'speak no evil monkey': '🙊'
      }
    },
    [`<img src=${items['鼓掌']}>`]: {
      type: 'image',
      items
    }
  }
}
